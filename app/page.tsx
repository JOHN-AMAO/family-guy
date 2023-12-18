import Image from "next/image";
import Link from "next/link";
async function getAllCharacters() {
  const data = await fetch(`http://localhost:3001/api/characters`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}

export default async function Page() {
  const data = await getAllCharacters();

  return (
    <main>
      <div className='grid grid-cols-2 gap-1 py-5 md:grid-cols-3 lg:grid-cols-4'>
        {data?.character?.map((item: any) => {
          return (
            <Link
              href={`/characters/${item.slug}`}
              key={item.name}
              className='overflow-hidden rounded-md'
            >
              <Image
                src={item.avatar}
                alt=''
                className='transition-all duration-500 hover:scale-110 hover:-rotate-2'
                width={500}
                height={500}
              />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
