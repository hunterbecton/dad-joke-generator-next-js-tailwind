import Head from 'next/head';

import { JokeCard } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dad joke generator</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='flex min-h-screen items-center justify-center'>
        <JokeCard />
      </div>
    </>
  );
}
