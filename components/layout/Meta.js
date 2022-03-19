import Head from "next/head"
const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
    title: 'Bob\'s Burgers',
    description: 'This is a web app built with Next.js that consumes the Bob\'s Burgers API to display the characters',
    keywords: 'bob\'s burgers, bob belcher, linda belcher, burgers'
}

export default Meta
