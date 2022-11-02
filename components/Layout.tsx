import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const Home: NextPage<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 px-16">
      <Head>
        <title>berkeatac</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100&display=swap');
        </style>
      </Head>

      <nav className="flex flex-row w-full max-w-7xl fixed top-0 bg-opacity-90 z-40 backdrop-blur-md pt-4">
        <h1 className="text-3xl justify-start tracking-wider">
          <Link href={"/"}>berkeatac</Link>
        </h1>
        <div className="flex flex-row justify-end w-full">
          <Link
            href="/saved"
            className="text-xl rounded-md px-2 py-1 hover:bg-snow transition-colors"
          >
            saved
          </Link>
          <Link
            href="/work"
            className="text-xl rounded-md px-2 py-1 hover:bg-snow transition-colors"
          >
            work
          </Link>
        </div>
      </nav>

      <main className="flex w-full flex-1 flex-col py-12 max-w-7xl">
        {children}
      </main>

      <footer className="flex h-12 w-full items-center justify-center border-t gap-4">
        <Link href={"https://www.twitter.com/berkeatac"}>twitter</Link>
        <Link href={"https://www.github.com/berkeatac"}>github</Link>
      </footer>
    </div>
  );
};

export default Home;
