import Image from 'next/image'
import React from 'react'
import SubTitle from '../Titles/SubTitle'
import Paragraph from '../Paragraph'
import Tag from '../Tag'
import Link from 'next/link'

const VerticalBlogCard = () => {
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
            <div className="post-title">
                <SubTitle />
            </div>
            <div className="post-content line-clamp-4">
                <Paragraph paragraphText={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eum ea aperiam quas dolor, fuga totam, dicta nesciunt aliquam aliquid nulla consequuntur, saepe nisi! Minus consectetur, dolore quis quidem explicabo quam necessitatibus similique laudantium voluptatibus ipsa, earum doloremque recusandae vitae? Quis eligendi maxime officiis doloribus, dignissimos corrupti laboriosam quae, totam veniam inventore necessitatibus qui accusantium ipsa rerum. Ea optio qui deserunt officia doloribus totam reprehenderit odio sit cumque excepturi molestiae, ducimus, explicabo ut dolor possimus modi sunt laboriosam, numquam exercitationem neque vero. Dolor repudiandae sequi ducimus iusto culpa cum nisi saepe. Autem optio molestiae corrupti necessitatibus rem, quisquam dignissimos facilis qui. Labore dicta, illum, temporibus laboriosam quaerat fugit itaque, officiis debitis quidem in velit veritatis odio porro tenetur dolore magnam nisi! Saepe corporis a quod provident animi vel. Eum quis aperiam recusandae! Aspernatur, voluptas in ex adipisci eos vel? Iste aut dolor, aliquid nesciunt enim temporibus magnam porro ad, voluptas ducimus architecto adipisci omnis a ut cupiditate error rerum atque odit officia? Doloribus, harum eveniet saepe ea quasi possimus incidunt tenetur at, dolorum iusto id, officiis optio sequi sed consequatur cumque voluptas quis quaerat libero? Unde, nostrum. Repudiandae placeat debitis, ab neque, consequatur a vel ex nesciunt consectetur harum autem?'}/>
            </div>
            <div className="tag-section mt-3">
                <Tag />
            </div>
            <div className="link-section mt-8">
                <Link href={'#'}>Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default VerticalBlogCard