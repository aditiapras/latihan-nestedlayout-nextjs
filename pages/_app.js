import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <>
      <div className={inter.className}>
        <Navbar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;
