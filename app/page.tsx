import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getAllCharacters } from "@/lib/characters";

const page = async () => {
  const data = await getAllCharacters();
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {data?.character.map((item: any) => {
        return (
          <Link
            href={`http://localhost:3001/api/characters`}
            key={item.name}
          >
            {
              <Image
                src={item.avatar}
                alt='images'
                width={400}
                height={800}
              />
            }
          </Link>
        );
      })}
    </div>
  );
};

export default page;
