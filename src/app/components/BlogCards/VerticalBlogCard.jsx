import Image from 'next/image'
import React from 'react'
import SubTitle from '../Titles/SubTitle'
import Paragraph from '../Paragraph'
import Tag from '../Tag'
import Link from 'next/link'

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

const VerticalBlogCard = ({post = blog}) => {

    const tags = post.tags;
    
  return (
    <div className='mb-7 flex flex-col gap-5 md:gap-10 md:flex-row md:mb-0'>
        <Image 
            src={'/sample/sample.jpg'}
            width={500}
            height={500}
            alt='sample'
            className='w-full h-auto aspect-video object-cover rounded-xl mt-5'
        />
        <div className='flex flex-col justify-center px-5 md:px-0'>
            <Link href={`http://localhost:3000/pages/singleBlog?blogId=${post.post_id}`} className="post-title">
                <SubTitle subTitleContent={post.post_title}/>
            </Link>
            <div className="post-content line-clamp-3">
                <Paragraph paragraphText={post.post_content}/>
            </div>
            <div className="tag-section mt-3 flex flex-wrap gap-2">
                {
                    tags.map((tag, index) => (
                        <Tag key={index} tag={tag} />
                     ) )
                }
            </div>
            <div className="link-section mt-8 text-mute-paragraph">
                <Link href={`http://localhost:3000/pages/singleBlog?blogId=${post.post_id}`}>Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default VerticalBlogCard