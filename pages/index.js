import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import countdown from '@/components/Js/countdown'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Zentopia | Coming soon!</title>
        <meta name="description" content="Zentopia | Coming soon!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://cdn.discordapp.com/attachments/1068105030592372756/1070454217166290995/backgroundeserrhhrtyu.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap" rel="stylesheet" />

      </Head>
      <main className=" overflow-y-scroll no-scrollbar bg-no-repeat bg-[url('https://cdn.discordapp.com/attachments/1068105030592372756/1070454217166290995/backgroundeserrhhrtyu.png')] bg-cover scrollbar-hide md:scrollbar-default">
      <h1 className=" text-white font-bold  text-center font-main">
      <br /><br /><br /><br /><br /><br />  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <p className='text-[15.5vh]'>Zentopia</p> <br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><p className='text-3xl'>Comming to you in...<div id="countdown"></div></p><br /><br /><br /><br /><br /><br /><br />
    </h1>


      </main>
      
    </>
  )
}