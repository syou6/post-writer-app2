import { allPosts } from "../../../.contentlayer/generated/Post/_index.mjs";
import { format } from "date-fns"; 
import Link from 'next/link'; // {{ edit_1 }}
import React from 'react'; // {{ edit_1 }}

export default function BlogPage() {
const posts = allPosts;


    return (
        <div className="container mx-4  max-w-4xl py-6 lg:py-10 lg:mx-auto  ">
            <div >
                <div className="space-y-4">
                <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight">
                    Blog🚀
                </h1>
                <p className="text-muted-foreground text-1xl">
                    ContentLayerとMDXで書いてます.
                </p>
                </div>
            </div>
           <hr className="my-8 mx-6 lg:mx-0" /> {/* {{ edit_1 }} */}
           <div className="grid sm:grid-cols-2 gap-10">
           {posts.map((post)=> (
          <article key={post._id} className="relative flex flex-col space-y-2">
            {post.image && (
                <img 
                src={post.image} 
                alt={post.title} 
                width={904} 
                height={452} 
                className="rounded-md border bg-muted "
                />
            )}
            <h2 className="text-2xl font-extrabold break-words">{post.title}</h2>
            <p className="text-muted-foreground break-words">{post.description}</p>
            <p className="text-sm text-muted-foreground">{format(post.date, "yyyy/MM/dd")}
            </p>
            <Link href={post.slug} className="absolute inset-0">
            </Link>
            </article>
        ))}
        </div>
        </div>
    );
}