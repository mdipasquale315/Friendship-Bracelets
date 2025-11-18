import { useState } from "react";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0xaCe3b74992b406bd060f8ECBe6c0c600A3a92331";
const ABI = [ ETHERSCAN_API_KEY ];

function App() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);

  async function connectWallet() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      setAccount(await signer.getAddress());

      const token = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
      setContract(token);
    } else {
      alert("MetaMask not found!");
    }
  }

  async function getBalance() {
    if (contract && account) {
      const balance = await contract.balanceOf(account);
      alert(`Balance: ${ethers.formatUnits(balance, 18)} FRND`);
    }
  }

  return (
    <div>
      <h1>Friendship Bracelets Stablecoin</h1>
      {!account ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <>
          <p>Connected: {account}</p>
          <button onClick={getBalance}>Check Balance</button>
        </>
      )}
    </div>
  );
}

export default App;
