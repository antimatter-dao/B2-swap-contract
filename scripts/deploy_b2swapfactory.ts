import {ethers} from "hardhat";


async function main() {
  const [account] = await ethers.getSigners();

  console.log("Account:", account.address);
  console.log("Balance:", (await account.getBalance()).toString());

  const Contract = await ethers.getContractFactory("B2swapFactory");
  const contract = await Contract.deploy(account.address);
  console.log("B2swapFactory deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
