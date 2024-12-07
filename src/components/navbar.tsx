import React from 'react';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
export default function Navbar() {
  return (
    <main className="flex items-center justify-between w-full h-16 px-10">
      <Link href="/" className="logo">
        <Image src="https://i.ibb.co/s9Qys2j/logo.png" alt="logo" width={70} height={70} />
      </Link>
      <Link href="/sign-in" className={buttonVariants()}>
        Sign In
      </Link>
    </main>
  );
}
