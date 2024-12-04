import { connectDB } from "@/libs/db.config";
import Title from "./components/Titles/Title";
import DefaultBlogCard from "./components/BlogCards/DefaultBlogCard";
import Button from "./components/Button";
import VerticalBlogCard from "./components/BlogCards/VerticalBlogCard";
import RedirectButton from "./components/RedirectButton";

export default function Home() {
  connectDB()
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
          <DefaultBlogCard />
          <DefaultBlogCard />
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
          <DefaultBlogCard />
          <DefaultBlogCard />
          <DefaultBlogCard />
          <DefaultBlogCard />
          <DefaultBlogCard />
        </div>

      </div>


      {/* Vertical blog section withrout any filtering with different tags */}
      <div className="blogs-section mt-24">
        <div className="title-section flex justify-between items-center md:mb-10">
          <div className="title mt-10 mb-5 w-full md:w-3/5 flex items-center justify-between">
            <Title titleContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, necessitatibus." />
          </div>
          <RedirectButton />
        </div>
        <div className="posts-section">
          <VerticalBlogCard />
          <VerticalBlogCard />
          <VerticalBlogCard />
          <VerticalBlogCard />
          <VerticalBlogCard />
        </div>

      </div>
      
    </div>
  );
}


