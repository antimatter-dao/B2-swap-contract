# contracts

Smart contracts for B2swap

## How to start

```shell
$ git clone https://github.com/antimatter-dao/B2-swap-contract.git
$ cd B2-swap-contract
$ npm i
```

### Build contracts

```shell
$ npm run build
```

### Run unit tests

```shell
$ npm run test
```

### Deploy contract

```shell
$ npx hardhat run scripts/deploy_b2swapfactory.ts --network bastest
```

### Verify contract
```shell
$ npx hardhat verify --network bastest 0xe647d0eD873B8934CdBe205e52EDD5332A6e0C4f '0x47026F2c46C5cA5f0db89c3152cffE5Ae3b99bd5'
```
