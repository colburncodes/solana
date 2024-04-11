import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

// Replace with the wallet addresses you want to check.
// Example addresses for famous wallets: toly.sol, shaq.sol, mccann.sol
const walletAddresses = ["toly.sol", "shaq.sol", "mccann.sol"];

const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");

async function checkWalletBalance(walletAddress) {
    try {
        const publicKey = new PublicKey("HRW92eMH2cfJZKqxoo3F1AmEAoc1PdkuZvm6V4K2LaLW");
        const balanceInLamports = await connection.getBalance(publicKey);
        const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
        console.log(`💰 The balance for the wallet at address ${walletAddress} is ${balanceInSOL} SOL`);
    } catch (error) {
        console.error(`Error: The address ${walletAddress} is not valid or could not be queried. Details: ${error}`);
    }
}

walletAddresses.forEach(checkWalletBalance);