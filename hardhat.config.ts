import {HardhatUserConfig} from "hardhat/types";
import "@nomiclabs/hardhat-waffle"
import "tsconfig-paths/register";
import "@typechain/hardhat"
import "@nomiclabs/hardhat-ethers"
import "hardhat-gas-reporter"
import "solidity-coverage";
import '@openzeppelin/hardhat-upgrades';
import "@nomiclabs/hardhat-etherscan";

require("dotenv").config();

const privateKeys = (process.env.PRIVATE_KEYS ?? "").split(",")

const config: HardhatUserConfig = {
  solidity: {
    version: "0.6.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    bastest: {
      url: process.env.BAS_URL ?? "http://localhost:10002",
      accounts: [
        ...privateKeys,
      ],
      from: process.env.PRIVATE_KEY,
      gas: 3000000,
      gasPrice: 50000000000,
    },
  },
  etherscan: {
    apiKey: {
      mainnet: '',
      bastest: 'Fw1eX8hgwSt8U9gA8U4Q',
    },
    customChains: [
      {
        network: "bastest",
        chainId: 20221,
        urls: {
          apiURL: "https://bastest-explorer.antimatter.finance/api",
          browserURL: "https://bastest-explorer.antimatter.finance"
        }
      },
    ]
  },
  gasReporter: {
    currency: "EUR",
    gasPrice: 21
  },
  typechain: {
    outDir: "types",
    target: "ethers-v5",
    alwaysGenerateOverloads: false,
    externalArtifacts: ["externalArtifacts/*.json"],
  },
};

export default config;
