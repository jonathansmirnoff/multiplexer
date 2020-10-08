const HDWalletProvider = require('@truffle/hdwallet-provider');

//Put your mnemonic here, take care of this and don't deploy your mnemonic into production!
const mnemonic = 'YOUR MNEMONIC';

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://public-node.rsk.co', 0, 1, true, "m/44'/60'/0'/0/"),
      network_id: 30,
      gasPrice: 0x487EE40
    },

    testnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://public-node.testnet.rsk.co', 0, 1, true, "m/44'/60'/0'/0/"),
      network_id: 31,
      gasPrice: 0x487EE40
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {  },

  // Configure your compilers
  compilers: {  solc: { version: "0.4.16" } }
}