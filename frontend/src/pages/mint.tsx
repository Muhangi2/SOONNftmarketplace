import type { NextPage } from "next"
import Head from "next/head"
import { MintView } from "../views"

const Mint: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Nft Marketplace</title>
        <meta name="description" content="Basic Functionality" />
      </Head>
      <MintView />
    </div>
  )
}

export default Mint
