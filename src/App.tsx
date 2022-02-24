import React from "react";
import { Button } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { getMetaMaskProvider } from "./libs/ethers";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [error, setError] = React.useState("");
  const [address, setAddress] = React.useState("");
  const handleClickConnect = async () => {
    try {
      const provider = getMetaMaskProvider();
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const walletAddresss = await signer.getAddress();
      setAddress(walletAddresss);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{address ? `Your address is ${address}` : "No Wallet Found"}</p>
        <Button
          startIcon={<AccountBalanceWalletIcon />}
          variant="contained"
          onClick={handleClickConnect}
        >
          Connect Wallet
        </Button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
    </div>
  );
}

export default App;
