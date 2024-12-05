"use client"

import Tag from "@/app/components/Tag";
import MainTitle from "@/app/components/Titles/MainTitle";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BlogParagraph from "@/app/components/BlogParagraph";

// Icons import using react icons
import { FaRegThumbsUp } from "react-icons/fa";
import { LiaCommentSolid } from "react-icons/lia";
import { FiEye } from "react-icons/fi";
import RecommonedBlogs from "@/app/components/RecommendBlogs/RecommonedBlogs";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { findSingleBlog } from "@/libs/actions/post.actions";

const blog = {
  _id: "674dce16862a91cd3dfafdb8",
  post_id: "7c3af41b-bef8-4b06-ac4e-0ec2b9844e35",
  post_publish_date: "2024-02-12T00:20:14.000Z",
  auth_id: "4ee2b4f2-bdbd-46f6-95d4-6be5f27835d6",
  post_image: "https://www.lorempixel.com/631/156",
  post_title: "Rather physical radio soon paper find born character.",
  post_content:
    "Truth conference end film my mission mention training. Every political leader control wife.\nPosition grow green. Important continue degree relationship size from role.\nHis improve support magazine may look report. Sure prepare with serve next claim.\nOffice at we traditional. Try pass professional.\nPrevent different subject team bring network seat. Spend else can stand much. Star need blue parent you itself her.\nThis term foreign loss yeah image. Security her last should to.",
  like_count: 151,
  comments: [
    {
      _id: "674f0f95887e023b8ccb61aa",
      user_id: "6877bd47-9a7f-45ab-bcce-920c7d1dacc5",
      comment_text: "Remember nation low employee everyone responsibility.",
      comment_date: "2024-04-14T18:10:55.000Z",
    },
    {
      _id: "674f0f95887e023b8ccb61ab",
      user_id: "01686bd5-4d21-4083-8fab-a2b734bdfc51",
      comment_text: "Design yourself happen think assume bank.",
      comment_date: "2024-09-29T00:43:13.000Z",
    },
    {
      _id: "674f0f95887e023b8ccb61ac",
      user_id: "4accbc86-e7f9-4e5f-b527-c9728a37a2dd",
      comment_text: "East form focus reflect.",
      comment_date: "2024-03-01T11:14:43.000Z",
    },
  ],
  views_count: 904,
  tags: ["Food", "Technology", "Health"],
  author: {
    _id: "674dce0f862a91cd3dfafdb3",
    auth_id: "4ee2b4f2-bdbd-46f6-95d4-6be5f27835d6",
    auth_name: "Robin Hill",
    auth_description:
      "Almost wear address south. Grow factor act interest message not Democrat. Ground detail human daughter whose.\nSingle member above. Book hit tree claim keep trial science. Lead southern TV.",
  },
};

const SinglBlog = () => {

  const [post, setPost] = useState(null);
  
  const urlParams = useSearchParams();
  const blogId = urlParams.get("blogId");

  useEffect(() => {
    findSingleBlog(blogId).then((data) => {
      setPost(data);
      console.log(data);
    });
  }, [blogId]);

  // Render a loading state while `post` is null
  if (!post) {
    return <div>Loading...</div>;
  }
  const author_link = `http://localhost:3000/api/authors/${post.auth_id}`
  const tags = post.tags;

  
  
  return (
    <div>
      <div className="w-3/5 mx-auto">
        <Image
          src={"/sample/sample.jpg"}
          width={500}
          height={500}
          alt="sample"
          className="w-full h-auto aspect-video object-cover rounded-xl mt-5"
        />

        {/* blog details like author details, statical details and blog content */}
        <div className="blog-content mt-6">
          <div className="title-section">
            <MainTitle titleContent={post.post_title} />

            <div className="mt-5">
              <hr />
              {/* Blog basic details like publish date, author name name statical details */}
              <div className="post-basic-details flex items-center justify-between">
                <div className="publish-details">
                  <p>
                    {post.post_publish_date}, by
                    <Link href={author_link} className="font-semibold"> {post.author.auth_name}</Link>
                  </p>
                </div>
                <div className="post-reactions flex items-center gap-x-6 my-4">
                  <div className="likes flex items-center gap-2">
                    <FaRegThumbsUp className="h-5 w-5" />
                    <p>{post.like_count}</p>
                  </div>
                  <div className="likes flex items-center gap-3">
                    <FiEye className="h-5 w-5" />
                    <p>{post.views_count}</p>
                  </div>
                  <div className="likes flex items-center gap-3">
                    <LiaCommentSolid className="h-5 w-5" />
                    <p>{post.comments.length}</p>
                  </div>
                </div>
              </div>
              <hr />
            </div>

            {/* show tag detials */}
            <div className="tag-section mt-3 flex gap-3">
              {
                tags.map((tag, index) => (
                  <Tag key={index} tag={tag} />
                ))
              }
            </div>
          </div>

          {/* blog content */}
          <div className="blog-content mt-8">
            <BlogParagraph
              paragraphText={post.post_content}
            />
          </div>
        </div>
      </div>

      {/* Reccomondation blogs section */}
      <div className="recomment-post mt-10">
        <RecommonedBlogs />
      </div>
    </div>
  );
};

export default SinglBlog;
