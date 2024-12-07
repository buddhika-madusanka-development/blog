import Link from 'next/link'
import React from 'react'

const Tag = ({tag = 'Tag'}) => {
  return (
    <Link href={`http://localhost:3000/pages/blogs?tag=${tag}`} className='bg-tag-color text-tag px-3 py-1 rounded-full w-fit border-tag-border border text-sm font-normal border-tag hover:bg-tag-hover duration-300 hover:text-tag-hover'>
        <p>{tag}</p>
    </Link>
  )
}

export default Tag