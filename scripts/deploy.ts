import { ethers } from "hardhat";

async function main() {
  const Ballot = await ethers.getContractFactory("Ballot");
  const ballot = await Ballot.deploy([
    "Proposal 1",
    "Proposal 2",
    "Proposal 3",
  ]);

  await ballot.deployed();

  console.log("Ballot contract deployed to:", ballot.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
