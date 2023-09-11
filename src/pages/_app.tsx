import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/UI/Layout";
import { ThirdwebProvider } from "@thirdweb-dev/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain="ethereum"
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThirdwebProvider>
  );
}
