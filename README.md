# blockronsonchain
blockrons on chain JSON storage

This was written to be used and deployed on solpg (sol playground).

lib.rs is the main file containing the code that goes on-chain. just deploy this as is.

client-all.ts is the client side code, you only need to edit 2 lines:

1. const token = new web3.PublicKey(" ");
      This is the solana account you want to tie the PDA to (seed), usually I use the NFT account so that I can find/reference it in the future.

2. const dataS = new String(' ');
      This is where you write the JSON data that goes on-chain. Supports plaintext JSON. Upto 5600 bytes (with 10kb max if you edit the string concatenation).

If you want to test your on-chain data account, use this website: https://onchain-datagrabber-developerhamster.vercel.app/
It pulls plaintext data from sol accounts and displays any images, if there are.
