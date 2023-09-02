import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {ReduxProvider} from "@/redux/provider"
import Header from "@/components/Header/page"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Online Store',
  description:'This is an E-Commerce App Based on Next JS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ReduxProvider>
      <Header/>
        <div className='px-[10%]'>
        {children}
        </div>
        </ReduxProvider>
        </body>
    </html>
  )
}
