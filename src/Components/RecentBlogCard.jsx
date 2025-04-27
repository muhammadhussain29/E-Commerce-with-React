import React from "react";

const RecentBlogCard = ({ elem }) => {
  return (
    <div className="mx-auto mt-5 px-4 w-[30%]">
      <div className="max-w-2xl mx-auto">
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
          
          {/* Blog Image */}
          <div className="h-64 bg-cover bg-center relative" style={{ backgroundImage: `url(${elem.image})` }}>
            <div className="absolute inset-0 bg-black/40 bg-blend-overlay"></div>
          </div>

          {/* Date Tag */}
          <div className="absolute top-4 left-4 bg-orange-500 text-white font-bold p-2 text-center border-2 border-white rounded-md shadow">
            <span className="block text-xl">{elem.date.day}</span>
            <span className="block text-sm uppercase">{elem.date.month}</span>
          </div>

          {/* Blog Content */}
          <div className="p-5">
            <h3 className="text-lg font-semibold text-zinc-700 hover:text-orange-500 transition duration-300">
              {elem.title}
            </h3>
            <div className="flex items-center space-x-3 text-zinc-700 text-sm mt-2">
              <span className="text-orange-500 font-medium">{elem.author}</span>
            </div>
            <p className="text-zinc-700 text-sm mt-3">{elem.excerpt}</p>

            {/* Read More Button */}
            <button
              className="inline-block mt-4 bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-500 transition duration-300"
            >
              Read More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Default Props for testing
RecentBlogCard.defaultProps = {
  title: "The Ultimate Gym Routine for Strength",
  author: "John Doe",
  date: { day: "15", month: "MAR" },
  comments: "85",
  excerpt: "Boost your strength with this expert-approved routine!",
  image: "/images/gallery5.jpg",
};

export default RecentBlogCard;
