import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
  try {
    const col = dbConnect("productCollection");
    const product = await col.findOne({ _id: new ObjectId(params.id) });
    if (!product) {
      return new Response(JSON.stringify({ message: "Not Found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("GET /api/products/[id] error:", err);
    return new Response(JSON.stringify({ message: "Invalid ID" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const col = dbConnect("productCollection");
    const result = await col.deleteOne({ _id: new ObjectId(params.id) });
    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ message: "Not Found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify({ message: "Deleted" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("DELETE /api/products/[id] error:", err);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}