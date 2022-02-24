import { ethers } from "ethers";

export const getMetaMaskProvider = (): any => {
  const anyWindow = window as any;
  if (!anyWindow.ethereum) {
    throw new Error("No Metamask Installed");
  }
  const provider = new ethers.providers.Web3Provider(anyWindow.ethereum, "any");
  return provider;
};
