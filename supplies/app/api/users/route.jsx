import dbConnect from "@/lib/dbConnect";

export async function POST(request) {
  try {
    // 1. Parse & validate JSON body
    const {
      firstName,
      lastName,
      email,
      imageUrl,
      password,
      terms,
    } = await request.json();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !imageUrl ||
      !password ||
      terms !== true
    ) {
      return new Response(
        JSON.stringify({ message: "Missing or invalid fields" }),
        { status: 422, headers: { "Content-Type": "application/json" } }
      );
    }

    // 2. Connect to collection and insert
    const collection = await dbConnect("userCollection");
    const result = await collection.insertOne({
      firstName,
      lastName,
      email,
      imageUrl,
      password,    // stored in plain text as requested
      role: "user", // default role
      terms,
      createdAt: new Date(),
    });

    // 3. Return success
    return new Response(
      JSON.stringify({ message: "User created", insertedId: result.insertedId }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("POST /api/users error:", err);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function GET() {
  try {
    const collection = await dbConnect("userCollection");
    const user = await collection.findOne({});
    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("GET /api/users error:", err);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}