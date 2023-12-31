require('colors');
const dotenv = require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  process.env.MNEMONIC,
  process.env.PROVIDER_URL
);
const web3 = new Web3(provider);

const deploy = async () => {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account ' + accounts[0].blue);

    const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode })
      .send({ gas: '1000000', from: accounts[0] });
    console.log('✅ Contract deployed to ' + result.options.address.cyan);
  } catch (err) {
    console.error('Error!'.red.underline.bold, err);
  }
};
deploy();
