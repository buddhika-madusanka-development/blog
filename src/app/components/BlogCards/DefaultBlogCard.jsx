import Image from 'next/image'
import React from 'react'
import SubTitle from '../Titles/SubTitle'
import Paragraph from '../Paragraph'
import Tag from '../Tag'
import Link from 'next/link'

const DefaultBlogCard = ({post}) => {
  return (
    <div className='w-full bg-card px-5 py-10 rounded-xl'>
        <Image 
            src={'/sample/sample.jpg'}
            width={500}
            height={500}
            alt='sample'
            className='w-full h-auto aspect-video object-cover mb-5 rounded-xl'
        />
        <div className="px-5">
            <SubTitle />
            <div className= {`paragraph line-clamp-2 md:line-clamp-3`}>
                <Paragraph paragraphText={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo id nihil repudiandae. Blanditiis ad, quibusdam accusantium amet similique adipisci laboriosam at sunt praesentium deserunt repudiandae dicta numquam eligendi odit, perferendis qui ipsam eveniet commodi nemo veniam. Ullam quos eligendi, dolores iste vitae quas, tempora ab est minus aperiam sed eveniet voluptates voluptatem dolorem aut. Enim assumenda officia dignissimos. Sit, nobis. Dolore error doloremque assumenda quia pariatur temporibus repudiandae itaque eveniet animi esse veritatis, quos cum officia beatae neque et. Neque dignissimos iure sapiente quo temporibus, quam minus repellendus itaque unde alias saepe iusto dolorem, dolore facere laudantium in repudiandae, atque fugiat debitis officiis odio consectetur! Ipsam nesciunt doloribus, minus corporis magnam quam sint incidunt dolore, numquam ratione atque magni, cumque aliquam a. Perferendis, consectetur accusantium, qui illo perspiciatis sequi quidem temporibus vero voluptates repudiandae fugit pariatur minus tempore quae commodi illum sint, provident praesentium aliquid facere a. Iure dolorem ad nisi modi animi voluptates, veritatis sit explicabo reprehenderit iste. Deserunt rerum perferendis modi illo natus ut iure corrupti. Laborum repudiandae labore amet in sed delectus iusto veritatis sint deserunt earum consequatur eaque, incidunt tempora voluptates numquam assumenda recusandae praesentium excepturi exercitationem minima et aperiam explicabo dolore! Perspiciatis dolor illum sapiente officiis debitis amet repellendus totam veritatis ducimus, magni deleniti beatae accusantium eveniet saepe itaque dolorem nemo dignissimos exercitationem aspernatur repellat? Itaque qui alias, suscipit soluta obcaecati cupiditate nam sequi impedit ratione possimus corrupti ducimus facere quisquam placeat omnis voluptas nihil quam incidunt magni commodi architecto fugit? Optio commodi cupiditate ad quasi culpa rerum quis soluta est accusantium tempore eligendi ullam quaerat, quod at numquam quam ea illum, ipsam sunt repudiandae delectus? Dolorem nam dolores architecto nihil, soluta reiciendis vero mollitia maxime debitis ullam, praesentium odit laborum in saepe hic perferendis libero quasi commodi! Non, ad! Maiores cum fugit voluptates enim neque, incidunt error dolores non quisquam voluptas. Fuga dignissimos quaerat ex ipsa ea, cupiditate at sed vel distinctio sequi, explicabo excepturi architecto natus quisquam eveniet sapiente ducimus voluptatum dicta assumenda? Repellat placeat magnam magni tenetur impedit, facere error harum. Voluptates officiis laborum perferendis beatae error, soluta quidem iste nemo, dignissimos, nobis minus explicabo? Ipsam sequi voluptate, incidunt nihil aliquam totam soluta non ullam iste deserunt, impedit ab, dicta nostrum nulla deleniti. Eum maxime rem omnis quo beatae iste, neque itaque commodi soluta reiciendis suscipit odio quisquam. Earum odit ipsam fugit excepturi commodi! Quisquam quaerat ratione voluptas voluptatum ut beatae, illo iusto omnis neque, ex voluptatem magnam fugiat. Hic delectus inventore cupiditate maiores quos voluptate quisquam est, facilis itaque assumenda dolore accusantium repellendus harum unde minima aperiam perferendis illum commodi esse dignissimos accusamus provident mollitia amet tenetur! Quisquam rem obcaecati molestiae ducimus id repellat commodi quasi sit reprehenderit accusantium quia rerum veniam nam dignissimos voluptas nesciunt, cum pariatur non incidunt repudiandae! Modi adipisci facere accusamus maiores error facilis, officia qui praesentium corrupti libero! Velit, consequuntur odio laudantium reprehenderit adipisci eius eos ipsa repellat incidunt omnis dignissimos natus necessitatibus aut dolor porro vel ea quibusdam eligendi qui ipsam! Eum ducimus ea enim?'} />
            </div>

            <div className="tag-section my-3">
                <Tag />
            </div>

            <div className="link-section mt-5">
                <Link href={'#'}>Read More</Link>
            </div>
        </div>

        
    </div>
  )
}

export default DefaultBlogCard

