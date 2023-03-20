import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <>
      <div className={inter.className}>
        <div className="bg-white text-black flex flex-row h-screen">
          <ThemeProvider attribute="class">
            <Navbar />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;
