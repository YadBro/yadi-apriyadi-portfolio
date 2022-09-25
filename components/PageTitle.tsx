import Head from "next/head";

interface IHeading {
  titlePage: string,
}


export default function PageTitle({titlePage}: IHeading) {
  const judul = `Yadi Apriyadi | ${titlePage}`;
  return (
    <>
      <Head>
        <title>{judul}</title>
        <meta name="description" content="This is portofolio Yadi Apriyadi" />
        <link rel="icon" href="/maskot.ico" />
      </Head>
    </>
  )
}