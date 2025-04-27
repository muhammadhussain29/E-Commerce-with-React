import React from 'react'
import RecentBlogCard from "./RecentBlogCard";

const BlogsSection = ({ heading , subheading , blogs }) => {
  return (
    <section className="roboto py-12 md:px-16 px-8 bg-zinc-200">
          {/* Section Heading */}
          <h3 className="text-center md:text-4xl text-3xl capitalize font-bold text-orange-500">{heading}</h3>
          <p className="text-center md:text-lg text-base text-zinc-700">{subheading}</p>
    
          {/* Blog Cards Grid */}
          <div className="flex justify-between flex-wrap mt-10 gap-4">
            {blogs.map((elem, index) => {
              return <RecentBlogCard elem={elem} />
            })}
          </div>
        </section>
  )
}

export default BlogsSection