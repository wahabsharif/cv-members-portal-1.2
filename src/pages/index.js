import Head from "next/head";
import { Inter } from "next/font/google";
import MemPortHome from "@/components/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Capital Valley - Member Portal</title>
        <meta
          name="description"
          content="Capital Valley - Members Portal - Ballot Results"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MemPortHome />
    </>
  );
}
