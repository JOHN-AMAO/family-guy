import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getAllCharacters() {
  const data = await fetch(`http://localhost:3000/api/characters`);
  if (!data.ok) {
    throw new Error("unable to fetch data");
  }
  return data.json();
}

const page = async () => {
  const data = await getAllCharacters();
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
      {data.character.map((item: any) => {
        return (
          <Link
            className='hover:scale-110 hover:rotate-2'
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
