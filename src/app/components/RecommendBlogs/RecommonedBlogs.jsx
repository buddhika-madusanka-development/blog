import React from 'react'
import DefaultBlogCard from '../BlogCards/DefaultBlogCard'
import Title from '../Titles/Title'
import RedirectButton from '../RedirectButton'

const RecommonedBlogs = ({blogCount = 3}) => {
  return (
    <div className=''>

        <div className="title-section flex justify-between items-center md:mb-6">
          <div className="title mt-10 mb-5 w-full md:w-3/5 flex items-center justify-between">
            <Title titleContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, necessitatibus." />
          </div>
          <RedirectButton />
        </div>
        
        <div className="grid grid-cols-1 mt-6 md:flex md:gap-5">
            <DefaultBlogCard />
            <DefaultBlogCard />
            <DefaultBlogCard />
        </div>
    </div>
  )
}

export default RecommonedBlogs