import Head from "next/head";
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
        {/* Google Analytics (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VK9FZ7CGHZ"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-VK9FZ7CGHZ');
          `}
        </script>
        {/* End Google Analytics */}
      </Head>
      <MemPortHome />
    </>
  );
}
