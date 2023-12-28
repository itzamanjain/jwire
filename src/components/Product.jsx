import React from "react";
import img1 from "../assets/foodpros.jpg";
import img2 from "../assets/greenfod.jpg";
import img3 from "../assets/modelmart.jpg";
import img4 from "../assets/refg.jpg";
import img5 from "../assets/solarplate.jpg";
import img6 from "../assets/solorreel.jpg";
import img7 from "../assets/bulb.jpg";
import img8 from "../assets/clean.jpeg";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Food Prossesing Unit",
      description: "Efficient and innovative, this unit streamlines food preparation. Enhance your kitchen experience with cutting-edge technology",
      price: 19.99,
      image: img1,
    },
    {
      id: 2,
      name: "Green Fodder Machine",
      description: "Revolutionize farming with our advanced Green Fodder Machine. Boost crop yield and quality effortlessly",
      price: 29.99,
      image: img2,
    },
    {
      id: 3,
      name: "Model Mart",
      description: "Elevate your modeling projects with Model Mart. Precision and style converge in this must-have tool.",
      price: 39.99,
      image: img3,
    },
    {
      id: 4,
      name: "Dd Solar Refrigerator",
      description: "Experience the future of cooling with our DD Solar Refrigerator. Sustainable, reliable, and ready to redefine refrigeration",
      price: 49.99,
      image: img4,
    },
    {
      id: 5,
      name: "Solar Plates",
      description: "Harness solar power with our Solar Plates. Ideal for eco-friendly energy solutions. ",
      price: 59.99,
      image: img5,
    },
    {
      id: 6,
      name: "Solar Reeling Machine",
      description: "Seamlessly reel in solar power with our innovative machine. Simplify energy production and contribute to a greener future.",
      price: 59.99,
      image: img6,
    },
  
    {
      id: 7,
      name: "Led Bulb",
      description: "Illuminate your space efficiently with our LED Bulb. Energy-saving and long-lasting brilliance for a brighter future.",
      price: 59.99,
      image: img7,
    },
  
    {
      id: 8,
      name: "Clean Cooking Solution",
      description: "Revolutionize your kitchen with our Clean Cooking Solution. Modernize your cooking experience while prioritizing cleanliness and efficiency.",
      price: 59.99,
      image: img8,
    },
  
  ];

  return (
    <div className="container mx-auto p-4" id="product">
      <h1 className="text-3xl font-bold mb-4 text-center">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-md overflow-hidden shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-center">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;