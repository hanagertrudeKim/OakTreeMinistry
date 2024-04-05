import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const contents = [
  {
    title: "Home",
    link : "/"
  },
  {
    title: "About us",
    link : "/about-us"
  },
  {
    title: "Our Ministries",
    link : "/our-ministries"
  },
  {
    title: "Media",
    link : "/media"
  },
]

export default function Header() {
  return (
    <div className='sticky w-full h-21 bg-white flex justify-between items-center pr-20'>
      <Image src="/logo.svg" alt="logo" width={220} height={80} />
      <div className='flex justify-center items-center gap-16 text-base font-semibold'>
      {contents.map((content, index) => {
        return (
          <Link key={index} href={content.link} className=''>{content.title}</Link>
        )
      })}
        <Link href='/donate' className='bg-black text-white w-28 h-10 flex justify-center items-center rounded-md text-sm'>
          <div>Donate</div>
        </Link>
      </div>
    </div>
  )
}
