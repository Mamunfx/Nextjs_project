import dbConnect from "../../../../lib/dbConnect";
import { ObjectId } from "mongodb";

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const collection = await dbConnect("productCollection");
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(
        JSON.stringify({ message: "Not Found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    return new Response(
      JSON.stringify({ message: "Deleted" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );

  } catch (err) {
    console.error("DELETE /api/products/[id] error:", err);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}