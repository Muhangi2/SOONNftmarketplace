use anchor_lang::prelude::*;

declare_id!("6NDXkjs5qXb4bfHyPLpq63a1v7bqMf8dZSTCEZP7eobu");

#[program]
pub mod anchor_project {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
