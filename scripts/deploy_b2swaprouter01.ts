import {ethers} from "hardhat";

const factory = '0xe647d0eD873B8934CdBe205e52EDD5332A6e0C4f';
const weth = '0xF0f5061B617eb45EA7E303AaF6f95E027919F7d6';

async function main() {
  const [account] = await ethers.getSigners();

  console.log("Account:", account.address);
  console.log("Balance:", (await account.getBalance()).toString());

  const Contract = await ethers.getContractFactory("B2swapRouter01");
  const contract = await Contract.deploy(factory, weth);
  console.log("B2swapRouter01 deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
