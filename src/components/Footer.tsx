import { NAVIGATION } from '@/static/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#07403A] text-white pt-10 px-[5vw] mt-[10vh] sm:pt-5">
      <div className="container">
        <div className="flex md:flex-row justify-between sm:justify-start">
          <div className="mb-4 md:mb-0 sm:hidden">
            <h1 className="text-[18px] font-semibold font-NSK">OakTree Ministry</h1>
          </div>
          <div className="flex flex-col gap-3 sm:hidden">
            <Link href='/'>
              <div className="text-white font-bold mx-2">Home</div>
            </Link>
            {NAVIGATION.map((nav) => {
              return (
                <Link href={nav.link} key={nav.title}>
                  <div className="text-gray-400 hover:text-white mx-2">{nav.title}</div>
                </Link>
              )
            })}
          </div>
          <div className='flex flex-col gap-3 sm:text-[12px] sm:flex-row'>
            <Link href="rlagksk8428@gmail.com" className="text-white mx-2 font-semibold">문의하기</Link>
            <Link href="https://www.instagram.com/oaktreeministryhaiti" className="text-white mx-2 font-semibold">인스타그램</Link>
          </div>
        </div>
      </div>
      <div className='border-t border-white mt-7 flex justify-end py-3 sm:py-2 sm:mt-4'>
        <div className='text-gray-100 text-[14px] sm:text-[10px]'>Copyright 2024. oakTree Ministry inc. all right reserved</div>
      </div>
    </footer>
  );
}
