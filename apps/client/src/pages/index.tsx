import Image from 'next/image'
import { Inter } from 'next/font/google'
import {SignUp} from '@fly-high/ui'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='bg-blue-600'>Hello</div>
    <SignUp/>
    </>
  )
}
