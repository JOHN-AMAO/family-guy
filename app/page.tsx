import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getAllCharacters() {
  const data = await fetch("http://localhost:3001/api/characters");
  if (!data.ok) {
    throw new Error("unable to fetch data");
  }
  return data.json();
}

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
