"use client";

import { supabaseComponent } from "../../../../utils/supabase";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const EditBlog = ({ params }: { params: Promise<{ id: string }> }) => {
  const [blogData, setBlogData] = useState<any>([]);
  const [blogId, setBlogId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle params as a promise
  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setBlogId(resolvedParams.id);
    };

    fetchParams();
  }, [params]);

  // Fetch the blog data after blogId is available
  useEffect(() => {
    if (blogId) {
      const getSingleBlog = async () => {
        let { data: blogs, error } = await supabaseComponent
          .from("blog_posts")
          .select("*")
          .eq("id", blogId);

        if (error) {
          setError("You cannot fetch the blog");
        } else {
          setBlogData(blogs);
        }
      };

      getSingleBlog();
    }
  }, [blogId]);

  const onSubmit = async (data: any) => {
    const payload = {
      title: data.title,
      content: data.content,
      author: data.author,
    };

    const { data: updatedBlog, error } = await supabaseComponent
      .from("blog_posts")
      .update(payload)
      .eq("id", blogId)
      .select();

    console.log("updated blog", updatedBlog);
    console.log("is there any error?", error);
  };

  return (
    <form
      className="max-w-md mx-auto flex flex-col align-middle min-h-screen justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-5">
        <label className="block mb-2 text-2xl font-medium text-gray-900">
          Title
        </label>
        <input
          defaultValue={blogData[0]?.title}
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="The art of programming"
          required
          {...register("title")}
        />
      </div>
      <div className="flex gap-5 flex-col">
        <label className="block mb-2 text-2xl font-medium text-gray-900">
          Author Name:
        </label>
        <input
          defaultValue={blogData[0]?.author}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          {...register("author")}
        />
      </div>
      <div className="flex gap-5 flex-col">
        <label className="block mb-2 text-2xl font-medium text-gray-900">
          Content:
        </label>
        <input
          defaultValue={blogData[0]?.content}
          placeholder="Enter blog content"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          {...register("content")}
        />
      </div>

      {errors.exampleRequired && <span>This field is required</span>}

      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-1/2 mt-10 text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="submit"
      >
        Update
      </button>
    </form>
  );
};

export default EditBlog;
