import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <h2 className="text-6xl leading-loose">I'm Berke</h2>
      <h3 className="text-4xl leading-relaxed">
        Frontend Developer @
        <Link href={"https://solsten.io"} className="underline" target="_blank">
          Solsten
        </Link>
      </h3>
      <h3 className="text-4xl leading-relaxed">Berlin</h3>
      <h3 className="text-4xl leading-relaxed">React</h3>
    </>
  );
};

export default Home;
