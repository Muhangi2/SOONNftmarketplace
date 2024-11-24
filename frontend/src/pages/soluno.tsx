import type { NextPage } from "next"
import Head from "next/head"
import { SolunoView } from "../views"

const Soluno: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Nft Marketplace</title>
        <meta name="description" content="Basic Functionality" />
      </Head>
      <SolunoView />
    </div>
  )
}

export default Soluno
