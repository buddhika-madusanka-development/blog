"use client";

import { connectDB } from "@/libs/db.config";
import Title from "./components/Titles/Title";
import DefaultBlogCard from "./components/BlogCards/DefaultBlogCard";
import Button from "./components/Button";
import VerticalBlogCard from "./components/BlogCards/VerticalBlogCard";
import RedirectButton from "./components/RedirectButton";
import { useEffect, useState } from "react";

export default function Home() {
  // access the data trough the api endpoint
  const [blogs, setBlogs] = useState([]);
  const [trending, setTrending] = useState([]);
  const [likedBlogs, setLikedBlogs] = useState([]);
  const [suggestionBlogs, setSuggestionBlogs] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  // filter most viewed blog posts
  const filterTrendingBlogs = async (blogs) => {
    const tempBlogs = blogs;

    tempBlogs.sort( async (a, b) => await b.views_count - a.views_count);
    const filterBlogs = tempBlogs.slice(0, 2);

    setTrending(filterBlogs);
  };


  // filter moset liked blog posts
  const filterLikedBlogs = (blogs) => {
    const tempBlogs = blogs;

    tempBlogs.sort((a,b) => b.like_count - a.like_count);
    const filterBlogs = tempBlogs.slice(0,6);

    setLikedBlogs(filterBlogs);
    
  }


  // create suggetion blogs 
  const suggestionBlogsFilter = (blogs) => {
    const tempBlogs = blogs;
    const suggestionBlogs = blogs.slice(0,6);
    console.log(suggestionBlogs);

    setSuggestionBlogs(suggestionBlogs);
  }

  useEffect(() => {
    const fetchBlogs = async () => {

      setIsLoading(true);

      const blogResponse = await fetch("http://localhost:3000/api/blogs");

      // ckeck if blog response is ok or not
      if (!blogResponse.ok) {
        console.log("Someting went wrong...");
      }

      const blogs = await blogResponse.json();
      setBlogs(blogs);

      filterTrendingBlogs(blogs);
      filterLikedBlogs(blogs)
      suggestionBlogsFilter(blogs)


      setIsLoading(false);

    };

    fetchBlogs();
  }, []);

  if(isLoading) {
    return <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
  }
  
  
  return (
    <div className="relative">
      {/* Trending Blogs section ===> there show about most popular blogs couting the views */}
      <div className="trending-blogs">
        <div className="title-section flex justify-between items-center">
          <div className="title mt-10 md:mb-6 w-full md:w-3/5 flex items-center justify-between">
            <Title titleContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, necessitatibus." />
          </div>
          <RedirectButton />
        </div>

        <div className="trending-posts grid grid-cols-1 md:grid-cols-2 gap-5">
          {
            trending.map((blog) => (
              <DefaultBlogCard key={blog.post_id} post={blog} />
            ))
          }
          
        </div>
      </div>

      {/* Blogs section there show couple of most liked blogs */}
      <div className="blogs mt-24">
        <div className="title-section flex justify-between items-center md:mb-6">
          <div className="title mt-10 mb-5 w-full md:w-3/5 flex items-center justify-between">
            <Title titleContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, necessitatibus." />
          </div>
          <RedirectButton />
        </div>

        <div className="trending-posts grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">

          {
            likedBlogs.map((blog) => (
              <DefaultBlogCard key={blog.post_id} post={blog} />
            ))
          }
          
        </div>
      </div>

      {/* Vertical blog section withrout any filtering with different tags */}
      <div className="blogs-section mt-24">
        <div className="title-section flex justify-between items-center md:mb-10">
          <div className="title mt-5 mb-5 w-full md:w-3/5 flex items-center justify-between">
            <Title titleContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, necessitatibus." />
          </div>
          <RedirectButton />
        </div>
        <div className="posts-section">

          {
            suggestionBlogs.map((blog) => (
              <VerticalBlogCard key={blog.post_id} post={blog} />
             ) )
          }
          
        </div>
      </div>
    </div>
  );
}
