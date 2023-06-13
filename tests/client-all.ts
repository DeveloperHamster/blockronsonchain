const systemProgram = anchor.web3.SystemProgram;
// EDIT THIS: token = public nft account addy you want to tie your on-chain image to
const token = new web3.PublicKey(" ");
// EDIT THIS: dataS = string of the base64 info
const dataS = new String(' ');


// do not touch, automatically divide dataS into strings to split transactions
var string1 = new String(dataS.slice(0,800));
var string2 = new String(dataS.slice(800,1600));
var string3 = new String(dataS.slice(1600,2400));
var string4 = new String(dataS.slice(2400,3200));
var string5 = new String(dataS.slice(3200,4000));
var string6 = new String(dataS.slice(4000,4800));
var string7 = new String(dataS.slice(4800,5600));

// program logic
    const [imagerPubkey, _] = await anchor.web3.PublicKey.findProgramAddress(
      [token.toBytes()],
      pg.program.programId
    );
    console.log("Your imager address", imagerPubkey.toString());

// create image storage account
    const [imager, _imagerBump] =
      await anchor.web3.PublicKey.findProgramAddress(
        [token.toBytes()],
        pg.program.programId
      );
    const tx = await pg.program.methods
      .createImager(token)
      .accounts({
        authority: pg.wallet.publicKey,
        imager: imager,
        systemProgram: systemProgram.programId,
      })
      .rpc();

// transact all 7 string parts    
    const tx1 = await pg.program.methods
      .updateImager(token,string1.toString())
      .accounts({
        imager: imagerPubkey,
      })
      .rpc();  
    const tx2 = await pg.program.methods
      .updateImager(token,string2.toString())
      .accounts({
        imager: imagerPubkey,
      })
      .rpc();
    const tx3 = await pg.program.methods
      .updateImager(token,string3.toString())
      .accounts({
        imager: imagerPubkey,
      })
      .rpc();
    const tx4 = await pg.program.methods
      .updateImager(token,string4.toString())
      .accounts({
        imager: imagerPubkey,
      })
      .rpc();
    const tx5 = await pg.program.methods
      .updateImager(token,string5.toString())
      .accounts({
        imager: imagerPubkey,
      })
      .rpc();
    const tx6 = await pg.program.methods
      .updateImager(token,string6.toString())
      .accounts({
        imager: imagerPubkey,
      })
      .rpc();
    const tx7 = await pg.program.methods
      .updateImager(token,string7.toString())
      .accounts({
        imager: imagerPubkey,
      })
      .rpc();
    
    console.log("Done!");    
// displays current data    
//    console.log("Your imager", imager);