import Image from 'next/image'
import { Inter } from 'next/font/google'
import {SignUp} from '@fly-high/ui'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // <h1 className="bg-yellow-300 text-3xl font-bold underline">
    //   Hello world! 
    // </h1>
    <>
    <div className='bg-blue-600'>Hello</div>
    <SignUp/>
    </>
  )
}
