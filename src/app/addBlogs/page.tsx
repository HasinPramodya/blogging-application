"use client";

import { supabaseComponent } from "../../../utils/supabase";
import React from "react";
import { useForm } from "react-hook-form";

const AddBlog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const payload = {
      tittle: data.tittle,
      content: data.content,
      author: data.author,
    };

    const { data: newBlog, error } = await supabaseComponent
      .from("blog_posts")
      .insert(payload)
      .select();

    console.log("new blog", newBlog);
    console.log("error", error);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-10">Add a New Blog</h1>
      <form
        className="w-full max-w-lg bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Title Input */}
        <div className="mb-5">
          <label className="block mb-2 text-lg font-medium text-gray-700">
            Blog Title
          </label>
          <input
            type="text"
            className="block w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm p-3"
            placeholder="Enter the blog title"
            required
            {...register("tittle")}
          />
        </div>

        {/* Content Input */}
        <div className="mb-5">
          <label className="block mb-2 text-lg font-medium text-gray-700">
            Content
          </label>
          <textarea
            rows={6}
            className="block w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm p-3"
            placeholder="Write the blog content here..."
            required
            {...register("content")}
          ></textarea>
        </div>

        {/* Author Input */}
        <div className="mb-5">
          <label className="block mb-2 text-lg font-medium text-gray-700">
            Author Name
          </label>
          <input
            type="text"
            className="block w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm p-3"
            placeholder="Enter the author's name"
            {...register("author")}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
        >
          Post Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
