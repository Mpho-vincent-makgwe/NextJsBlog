import NavBarLayout from '@/componets/Layouts/NavBarLayout'
import Head from 'next/head';
import '@/styles/globals.css'

const App = ({ Component, pageProps })=> {
  return( <NavBarLayout>
          <Head>
            <title>Welcome To NextJs Blog</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    <Component {...pageProps} />
    </NavBarLayout>
)};
export default App;