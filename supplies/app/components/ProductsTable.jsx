"use client";

import React, { useState, useEffect, useRef } from "react";

export default function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dialogRef = useRef(null);

  // Fetch products
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error(`Fetch all status: ${res.status}`);
        const data = await res.json();
        setProducts(
          data.map((p) => ({ 
            ...p, 
            price: typeof p.price === "number" ? p.price : parseFloat(p.price) || 0 
          }))
        );
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Sync native dialog with selectedProduct
  useEffect(() => {
    if (!dialogRef.current) return;
    selectedProduct ? dialogRef.current.showModal() : dialogRef.current.close();
  }, [selectedProduct]);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
      console.log("DELETE status:", res.status, res.headers.get("content-type"));
      if (!res.ok) {
        // read any error message from body
        const errBody = await res.json().catch(() => ({}));
        throw new Error(`Delete failed ${res.status}: ${errBody.message||"no body"}`);
      }
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error("handleDelete error:", err);
      alert("Error deleting product:\n" + err.message);
    }
  };

  if (loading) return <p className="text-center py-6">Loading…</p>;
  if (error)   return <p className="text-center py-6 text-red-500">Error: {error}</p>;
  if (!products.length)
    return <p className="text-center py-6">No products found.</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-600">All Products</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-100 ">
            <tr className="text-gray-600">
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id} className="hover:bg-gray-50">
                <td className="p-3">
                  <img
                    src={p.imageSrc}
                    alt={p.imageAlt}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-3">{p.title}</td>
                <td className="p-3">${p.price.toFixed(2)}</td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => setSelectedProduct(p)}
                    className="btn btn-sm bg-sky-400 text-white"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="btn btn-sm bg-orange-400 text-white ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <dialog ref={dialogRef} className="modal modal-middle">
        {selectedProduct && (
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-2">{selectedProduct.title}</h3>
            <img
              src={selectedProduct.imageSrc}
              alt={selectedProduct.imageAlt}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <p>
              <strong>Description:</strong> {selectedProduct.description}
            </p>
            {/* …other fields… */}
            <div className="modal-action">
              <form method="dialog">
                <button
                  className="btn"
                  onClick={() => setSelectedProduct(null)}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}