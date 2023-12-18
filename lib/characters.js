export async function getAllCharacters() {
  const data = await fetch("http://localhost:3001/api/characters");
  if (!data.ok) {
    throw new Error("unable to fetch data");
  }
  return data.json();
}
