"use client";

import { supabaseComponent } from "../../../utils/supabase";
import {useEffect, useState} from "react";
import BlogsCard from "../component/blogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState<any>([]);
  const [title, setTitle] = useState<any>(null);
  const [author, setAuthor] = useState<any>(null);
  const [content, setContent] = useState<any>(null);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const getBlogs = async () => {
      const {data: blogs, error} = await supabaseComponent
        .from("blog_posts")
        .select("*");

      if (error) {
        setErrors("You might want to check your data");
      } else {
        setBlogs(blogs);
      }
    };

    getBlogs();
  }, []);

  // return <pre>{JSON.stringify(allbooks, null, 2)}</pre>;
  return <BlogsCard blog={blogs} />;
};

export default Blogs;