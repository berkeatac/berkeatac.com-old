import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
  saved: any;
}

const SavedBox = ({ saved }: any) => {
  return (
    <Link href={saved.url} target="_blank">
      <div className="my-4 border-l-2 border-black pl-4 pr-4 py-2 hover:shadow-sm hover:bg-whitesmoke cursor-pointer transition-colors">
        <h4 className="text-2xl mb-2 font-bold">{saved.title}</h4>
        <p className="text-lg">{saved.description}</p>
        <p className="text-sm text-slate-400 text-ellipsis max-w-xs leading-relaxed truncate">
          {saved.url}
        </p>
        <p className="text-sm text-slate-600 max-w-xs leading-9 truncate">
          {new Date(saved.createdAt).toLocaleDateString()}
        </p>
      </div>
    </Link>
  );
};

const Saved: NextPage<LayoutProps> = ({ saved, children }: LayoutProps) => {
  return (
    <div className="w-full h-full align-start justify-start">
      {saved?.data?.map((item: any) => (
        <SavedBox saved={item} />
      ))}
    </div>
  );
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  const saved = await fetch(
    `https://cdn.contentful.com/spaces/${
      process.env.CONTENTFUL_SPACE_ID
    }/environments/${"master"}/entries?access_token=${
      process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN
    }`
  )
    .then((res) => res.json())
    .then((data) => {
      const array = data?.items?.map(
        (item: {
          fields: {
            title: string;
            description: string;
            url: string;
            createdAt: string;
          };
        }) => {
          return {
            title: item.fields.title,
            description: item.fields.description,
            url: item.fields.url,
            createdAt: item.fields.createdAt || null,
          };
        }
      );

      return {
        data: array,
      };
    });

  return {
    props: {
      saved,
    },
  };
}

export default Saved;
