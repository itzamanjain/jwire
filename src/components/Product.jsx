import React from "react";
import img1 from "../assets/foodpros.jpg";
import img2 from "../assets/greenfod.jpg";
import img3 from "../assets/modelmart.jpg";
import img4 from "../assets/refg.jpg";
import img5 from "../assets/solarplate.jpg";
import img6 from "../assets/solorreel.jpg";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1 goes here.",
      price: 19.99,
      image: img1,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2 goes here.",
      price: 29.99,
      image: img2,
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description of Product 3 goes here.",
      price: 39.99,
      image: img3,
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description of Product 4 goes here.",
      price: 49.99,
      image: img4,
    },
    {
      id: 5,
      name: "Product 5",
      description: "Description of Product 5 goes here.",
      price: 59.99,
      image: img5,
    },
    {
      id: 6,
      name: "Product 6",
      description: "Description of Product 6 goes here.",
      price: 59.99,
      image: img6,
    },
    {
      id: 7,
      name: "Product 7",
      description: "Description of Product 7 goes here.",
      price: 59.99,
      image: img3,
    },
    {
      id: 8,
      name: "Product 8",
      description: "Description of Product 8 goes here.",
      price: 59.99,
      image: img1,
    },
  ];

  return (
    <div className="container mx-auto p-4" id="product">
      <h1 className="text-3xl font-bold mb-4">Product Page</h1>
      <p className="mb-8">This is the content of the Product page.</p>

      {/* Displaying Products in a Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-md overflow-hidden shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-bold text-green-500 mb-2">Price: ${product.price.toFixed(2)}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

