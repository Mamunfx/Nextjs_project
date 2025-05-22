"use client";

import React, { useState, useEffect } from "react";

export default function ProductForm() {
  const [imageSrc, setImageSrc] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [badges, setBadges] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); 
  const [rating, setRating] = useState("");
  const [reviewsCount, setReviewsCount] = useState("");
  const [price, setPrice] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");

  useEffect(() => {
    setPreviewSrc(imageSrc);
  }, [imageSrc]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      imageSrc,
      imageAlt,
      badges: badges.split(",").map((b) => b.trim()).filter(Boolean),
      title,
      description, 
      rating: Number(rating),
      reviewsCount: Number(reviewsCount),
      price: parseFloat(price),
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      alert("✅ Product added successfully!");
      // reset form
      setImageSrc("");
      setImageAlt("");
      setBadges("");
      setTitle("");
      setDescription("");
      setRating("");
      setReviewsCount("");
      setPrice("");
    } catch (err) {
      console.error(err);
      alert("❌ Error adding product");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Add New Product
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image URL & Preview */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image URL
          </label>
          <input
            type="url"
            value={imageSrc}
            onChange={(e) => setImageSrc(e.target.value)}
            required
            placeholder="https://..."
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-sky-500"
          />
          {previewSrc && (
            <img
              src={previewSrc}
              alt="Preview"
              className="mt-3 w-32 h-32 object-cover rounded border"
            />
          )}
        </div>
        {/* Alt Text */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Alt Text
          </label>
          <input
            type="text"
            value={imageAlt}
            onChange={(e) => setImageAlt(e.target.value)}
            required
            placeholder="e.g. Vitamin C Bottle"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-sky-500"
          />
        </div>
        {/* Badges */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Badges (comma-separated)
          </label>
          <input
            type="text"
            value={badges}
            onChange={(e) => setBadges(e.target.value)}
            placeholder="e.g. Organic, New"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-sky-500"
          />
        </div>
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Product Title"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-sky-500"
          />
        </div>
        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={3}
            placeholder="Write a brief description"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-sky-500"
          />
        </div>
        {/* Rating & Reviews */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rating
            </label>
            <input
              type="number"
              step="0.1"
              min="0"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
              placeholder="e.g. 4.5"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reviews Count
            </label>
            <input
              type="number"
              min="0"
              value={reviewsCount}
              onChange={(e) => setReviewsCount(e.target.value)}
              required
              placeholder="e.g. 120"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-sky-500"
            />
          </div>
        </div>
        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price ($)
          </label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            placeholder="24.99"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-sky-500"
          />
        </div>
        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-sky-400 text-white py-2 rounded hover:bg-sky-600 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}