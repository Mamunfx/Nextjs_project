import dbConnect from "@/lib/dbConnect";

export async function POST(request) {
    try {
      const body = await request.json();
      const collection = dbConnect("userCollection");
      const result = await collection.insertOne(body);
      return new Response(
        JSON.stringify({ message: "Created", insertedId: result.insertedId }),
        {
          status: 201,
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (err) {
      console.error(err);
      return new Response(
        JSON.stringify({ message: "Internal Server Error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }

export async function GET() {
    try {
      const collection = dbConnect("userCollection");
      const user = await collection.findOne({}); 
      return new Response(JSON.stringify(user), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error(err);
      return new Response(
        JSON.stringify({ message: "Internal Server Error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }