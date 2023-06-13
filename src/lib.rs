use anchor_lang::prelude::*;

declare_id!("BLKRNygNc7mWMpxQPXs4UoVPyApvyqy4v8uK9F3iJmqS");

#[program]
// Smart contract functions
pub mod imager {
    use super::*;

    // creates the image storage account
    pub fn create_imager(ctx: Context<CreateImager>,token: Pubkey) -> Result<()> {
        let imager = &mut ctx.accounts.imager;
        imager.authority = ctx.accounts.authority.key();
        imager.token = token;
        imager.img = ("").to_string();
        Ok(())
    }
    // puts data inside the image storage account by concatenating strings <- client-side to fit the solana txn limit
    pub fn update_imager(ctx: Context<UpdateImager>,token: Pubkey, image: String) -> Result<()> {   
        let imager = &mut ctx.accounts.imager;
        imager.authority = ctx.accounts.authority.key();
        imager.token = token;
        imager.img = format!("{}{}", imager.img, image); 
        Ok(())
    }

}

// Data validators
//token input (nft token addy) + programID are the main seeds for PDA
#[derive(Accounts)]
#[instruction(token: Pubkey)]
pub struct CreateImager<'info> {
#[account(mut)]
    authority: Signer<'info>,
    #[account(
        init_if_needed,
        seeds = [token.as_ref()],
        bump,
        payer = authority,
        space = 10000
    )]
    pub imager: Account<'info, Imager>,
    system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct UpdateImager<'info> {
    authority: Signer<'info>,
    #[account(mut)]
    pub imager: Account<'info, Imager>,
}

// Data structures
#[account]
#[derive(Default)]
pub struct Imager {
    authority: Pubkey,
    token: Pubkey,
    img: String,
}
