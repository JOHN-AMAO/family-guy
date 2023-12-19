import characters from "@/data/characters.json";
import quotes from "@/data/quotes.json";
import { NextResponse } from "next/server";

export async function GET(req: any, { params }: any) {
  try {
    const character = characters.data.find((item) => (item.slug = params.slug));
    if (!character) {
      return new NextResponse("Character not found", { status: 404 });
    }
    const quote = quotes.data.filter(
      (item) => (item.character_id = character.id)
    );
    return NextResponse.json({
      character,
      quote,
    });
  } catch (error) {
    return new NextResponse("Internal server Error occured", { status: 404 });
  }
}
