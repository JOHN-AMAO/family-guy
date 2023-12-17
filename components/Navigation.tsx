import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Navigation = () => {
  return (
    <>
      <div>
        <div className='flex flex-row justify-between mx-60 mt-8'>
          <Image
            src='/logo.png'
            alt='logo'
            width={80}
            height={60}
          />
          <Link
            href='/quiz'
            className='p-3 bg-green-500 rounded flex flex-row items-center justify-center text-black font-bold transition hover:scale-110'
          >
            <FaArrowRight className='mr-2 ' />
            Take a Quiz
          </Link>
        </div>
        <div className='mt-8'>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Navigation;
