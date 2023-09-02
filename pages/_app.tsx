import "../styles/globals.css";
import Layout from "../components/layout";
import type { AppProps } from "next/app";
import { AuthProvider } from "../contexts/firebase";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
