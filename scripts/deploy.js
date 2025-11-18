import hardhat from "hardhat";
const { ethers } = hardhat;

async function main() {
  const Token = await ethers.getContractFactory("FriendshipBracelets");
  const token = await Token.deploy();
  await token.waitForDeployment();
  console.log("Friendship Bracelets deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
