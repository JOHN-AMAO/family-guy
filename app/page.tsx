import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getAllCharacters() {
  const data = await fetch(`http://localhost:3001/api/characters`);

  if (!data.ok) {
    throw new Error("Unable to fetch characters");
  }
  return data.json();
}

const page = async () => {
  const data = await getAllCharacters();
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {data?.character?.map((item: any) => {
        return (
          <Link
            href={`http://localhost:3001/api/characters/${item?.slug}`}
            key={item?.name}
          >
            <Image
              className=''
              src={item?.avatar}
              width={800}
              height={400}
              alt='images'
            />
          </Link>
        );
      })}
    </div>
  );
};

export default page;
