import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getAllCharacters } from "@/lib/characters";

const page = async () => {
  const data = await getAllCharacters();
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
      {data.character.map((item: any) => {
        return (
          <Link
            className='hover:scale-110 '
            href={`http://localhost:3000/api/characters${item.slug}`}
            key={item.name}
          >
            <Image
              src={item.avatar}
              width={300}
              height={700}
              alt='images'
            />
          </Link>
        );
      })}
    </div>
  );
};

export default page;
