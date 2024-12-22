"use client";

import {useRouter} from "next/navigation";
import React, {FC, useEffect, useState} from "react";

interface BlogCardProps {
  blog: any;
}

const BlogsCard: FC<BlogCardProps> = ({blog}) => {
  const [blogDetails, setBlogDetails] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (blog) {
      const blogDetails = blog.map((item: any) => ({
        id: item.id,
        title: item.title,
        author: item.author,
        content: item.content,
      }));
      setBlogDetails(blogDetails);
    }
  }, [blog]);

  const handleButtonClick = (id: any) => {
    router.push(`/blogs/${id}`);
  };

  return (
    <div className="flex flex-col gap-6 items-center mt-20 text-white">
      {blogDetails.map((blog, index) => (
        <div
          key={index}
          className="bg-[#ff3232] p-5 rounded-xl w-full max-w-md shadow-lg"
        >
          <h2 className="font-bold text-2xl mb-2">{blog.title}</h2>
          <p className="text-sm mb-4">{blog.content}</p>
          <p className="italic mb-4 text-gray-300">Author: {blog.author}</p>
          <button
            onClick={() => handleButtonClick(blog.id)}
            className="mt-4 bg-white text-black shadow-lg px-5 py-2 rounded-2xl font-bold text-lg"
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogsCard;
