import dbConnect from "@/lib/dbConnect";

export async function GET() {
  try {
    const col = dbConnect("productCollection");
    const products = await col.find().toArray();
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("GET /api/products error:", err);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const col = dbConnect("productCollection");
    const result = await col.insertOne(body);
    return new Response(
      JSON.stringify({ message: "Created", insertedId: result.insertedId }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("POST /api/products error:", err);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}