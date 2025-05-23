import { ObjectId } from "mongodb";
import dbConnect from "@/lib/dbConnect";

export async function POST(request) {
  try {
    const {
      productId,
      productName,
      productImage,
      productPrice,
      userEmail,
      quantity,
    } = await request.json();

    if (
      !productId ||
      !productName ||
      !productImage ||
      productPrice == null ||
      !userEmail ||
      quantity == null
    ) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        {
          status: 422,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const coll = await dbConnect("cartCollection");
    const result = await coll.insertOne({
      productId,
      productName,
      productImage,
      productPrice,
      userEmail,
      quantity,
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({
        message: "Added to cart",
        insertedId: result.insertedId.toString(),
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const userEmail = url.searchParams.get("userEmail");
    if (!userEmail) {
      return new Response(
        JSON.stringify({ message: "Missing userEmail query param" }),
        {
          status: 422,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const coll = await dbConnect("cartCollection");
    const items = await coll.find({ userEmail }).toArray();

    return new Response(JSON.stringify(items), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function DELETE(request) {
  try {
    const { cartItemId, userEmail } = await request.json();
    if (!cartItemId || !userEmail) {
      return new Response(
        JSON.stringify({ message: "Missing cartItemId or userEmail" }),
        {
          status: 422,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const coll = await dbConnect("cartCollection");
    const result = await coll.deleteOne({
      _id: new ObjectId(cartItemId),
      userEmail,
    });

    return new Response(
      JSON.stringify({
        message:
          result.deletedCount === 1
            ? "Deleted"
            : "No item found to delete",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}