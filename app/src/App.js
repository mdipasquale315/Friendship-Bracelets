import { useState } from "react";
import { ethers } from "ethers";
import contractABI from "./FriendshipBracelets.json"; // paste ABI JSON here

const CONTRACT_ADDRESS = "0xaCe3b74992b406bd060f8ECBe6c0c600A3a92331";

function App() {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  async function connectWallet() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      setAccount(await signer.getAddress());
    } else {
      alert("MetaMask not found!");
    }
  }

  async function getContract() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, contractABI.abi, signer);
  }

  async function checkBalance() {
    if (!account) return alert("Connect wallet first!");
    const contract = await getContract();
    const bal = await contract.balanceOf(account);
    setBalance(ethers.formatUnits(bal, 18));
  }

  async function mintTokens() {
    if (!account) return alert("Connect wallet first!");
    const contract = await getContract();
    // Example: mint 100 FRND to your own account
    const tx = await contract.mint(account, ethers.parseUnits("100", 18));
    await tx.wait();
    alert("Minted 100 FRND!");
    checkBalance();
  }

  async function transferTokens() {
    if (!recipient || !amount) return alert("Enter recipient and amount!");
    const contract = await getContract();
    const tx = await contract.transfer(recipient, ethers.parseUnits(amount, 18));
    await tx.wait();
    alert(`Transferred ${amount} FRND to ${recipient}`);
    checkBalance();
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Friendship Bracelets Stablecoin</h1>
      {!account ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <>
          <p>Connected: {account}</p>
          <button onClick={checkBalance}>Check Balance</button>
          {balance && <p>Balance: {balance} FRND</p>}

          <hr />

          <button onClick={mintTokens}>Mint 100 FRND</button>

          <hr />

          <h3>Transfer FRND</h3>
          <input
            type="text"
            placeholder="Recipient address"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            style={{ width: "300px" }}
          />
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ width: "100px", marginLeft: "10px" }}
          />
          <button onClick={transferTokens}>Send</button>
        </>
      )}
    </div>
  );
}

export default App;
