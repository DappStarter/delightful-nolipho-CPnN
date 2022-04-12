require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad hover kiwi bottom thumb'; 
let testAccounts = [
"0x9990d896efa2f25a46f7f3b4400235fe678a3f0c6a1ea0070cc6929fc98a2f66",
"0xab37b26ce4009f31ea81e2059653843e98ac4f78b3c76dd08ec0d52b13e369fb",
"0x3c2b4146e1aef086297494b7ed8811375508fff4e1f284d0f269a5f1b3fa0701",
"0x04884298d37e2fad12337774890ba636dedef6a69fd860c330aebf1ad30ea830",
"0xb4f40d0b25a10f08940a04f63f6713c09a167d43eda28fba22dca0251ca5da34",
"0xac54a7b9dd5512f46197865af87829ed4a878cdf462b7f70540f2224abaacf86",
"0x09fc9fb1df8bac66a20f8e4fa24eb596fc00a00e8fc8582820aed8612f6f2c9b",
"0x5078651610dbb4c6c05ef7df0951542e2b0532143cb75684122b5fd251d53959",
"0x66dcee79fa4762f879fa12522ea1b567b7097af19c08e35230a1730b49b8e1b3",
"0x40854b9febc4d5704510d29da055b5a9ac11c83b72babf9a90730d2d44550313"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


