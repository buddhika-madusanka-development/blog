import React, { useEffect, useState } from 'react'
import DefaultBlogCard from '../BlogCards/DefaultBlogCard'
import Title from '../Titles/Title'
import RedirectButton from '../RedirectButton'

const RecommonedBlogs = ({blogCount = 3}) => {
  
  const [blogs, setBlogs] = useState([]);
  const [trending, setTrending] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  // filter most viewed blog posts
  const filterTrendingBlogs = async (blogs) => {
    const tempBlogs = blogs;

    tempBlogs.sort( async (a, b) => await b.views_count - a.views_count);
    const filterBlogs = tempBlogs.slice(0, blogCount);

    setTrending(filterBlogs);
  };

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
      
      setIsLoading(false);
    };

    fetchBlogs();
  }, []);
  
  return (
    <div className=''>

        <div className="title-section flex justify-between items-center md:mb-6">
          <div className="title mt-10 mb-5 w-full md:w-3/5 flex items-center justify-between">
            <Title titleContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, necessitatibus." />
          </div>
          <RedirectButton />
        </div>
        
        <div className="grid grid-cols-1 mt-6 md:flex md:gap-5">

          {
            trending.map((blog, index) => (
              <DefaultBlogCard key={index} post={blog} />
            ))
          }

        </div>
    </div>
  )
}

export default RecommonedBlogs