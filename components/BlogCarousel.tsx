"use client";
import React, { useEffect, useRef, useState } from "react";
//@ts-ignore
import Slider from "react-slick";

const BlogCarousel = () => {
  const sliderRef = useRef(null); // Create a ref for the slider

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch data from the API route
    const fetchBlogs = async () => {
      const response = await fetch("http://localhost:3000/api/blogData");
      const data = await response.json();
      setBlogs(data);
      console.log(data);
    };

    fetchBlogs();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 cards in desktop mode
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 cards in tablet mode
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 card in mobile mode
        },
      },
    ],
  };

  return (
    <div className="my-8 relative">
      <Slider ref={sliderRef} {...settings}>
        {blogs.map((blog: any) => (
          <div key={blog.ID} className="p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={`/blog_images/${blog.Image}`}
                alt={blog.Blog_title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>
                    {new Date(blog.Published_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span>{blog.Time_to_read}min</span>
                </div>
                <h3 className="text-md font-semibold text-black mb-2">
                  {blog.Blog_title}
                </h3>
                <a
                  href={blog.Blog_url}
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* Custom Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#28d478]  rounded-full p-2 shadow-lg w-10 text-white"
        //@ts-ignore
        onClick={() => sliderRef.current.slickPrev()}
      >
        &lt; {/* You can replace this with an icon */}
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#28d478]  rounded-full p-2 shadow-lg w-10  text-white"
        //@ts-ignore
        onClick={() => sliderRef.current.slickNext()}
      >
        &gt; {/* You can replace this with an icon */}
      </button>
    </div>
  );
};

export default BlogCarousel;
