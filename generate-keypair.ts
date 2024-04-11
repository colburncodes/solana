import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Connection, clusterApiUrl } from "@solana/web3.js"


const keypair = getKeypairFromEnvironment("SECRET_KEY");
console.log(`✅ Finished!`)

const connection = new Connection(clusterApiUrl("devnet"));
console.log(`✅ Connected!`)