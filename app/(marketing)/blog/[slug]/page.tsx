import { notFound } from "next/navigation";
import { allPosts } from "../../../../.contentlayer/generated/Post/_index.mjs";
import React from "react"
import { time } from "console";
import { format } from "date-fns"; // 追加
import Link from "next/link"; // 
import { cn } from "@/lib/utils"; // 修正: 正しいインポートパスに変更
import { buttonVariants } from "@/components/ui/button"; // 修正: buttonVariantsのインポートを追加
import Mdx from "../../../../components/mdx-component";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

async function getPostFromSlug(slug: string) {
    const post = allPosts.find((post) => post.slugAsParams === slug);
    return post;
    
} 

export async function generateMetadata({
    params
}: {
    params: {slug: string };
}): Promise<Metadata> {
    const page = await getPostFromSlug(params.slug);

    if(!page) {
        return{};
    }

    return {
        title: page.title, // 修正: ブログのタイトルを設定
        description: page.description,
        openGraph: {
            type: "article",
            locale: "ja",
            url: siteConfig.url,
            title: page.title, // 修正: Open Graphのタイトルも設定
            description: siteConfig.description,
            siteName: siteConfig.name,
        },
        twitter: {
            card: "summary_large_image",
            title: page.title, // 修正: Twitterのタイトルも設定
            description: siteConfig.description,
            images: [`${siteConfig.url}/og.jpg`],
            creator: "@shocode",
        },
    };
    
}



export default async function PostPage({
    params,
 }: {
    params: { slug: string};
}) {
    const slug = params.slug;
    const post = await getPostFromSlug(slug);

    if(!post) {
        notFound();
    }


    return (
        <article className="container mx-auto max-w-3xl py-6 lg:py-10 ">
            <div>{post.date && (
                <time> Published on {format(post.date, "yyyy/MM/dd")}</time>
                )}
                <h1 className="mt-2 font-extrabold text-4xl lg:text-5xl leading-tight">
                {post.title}
                </h1>
                </div>
                {post.image && (
                <img 
                src={post.image} 
                alt={post.title} 
                width={720} 
                height={405} 
                className="my-8 border rounded-md bg-muted"
                />
                )}
                <Mdx code ={post.body.code} />
                <hr className="mt-12"/>
                <div className="py-6 text-center lg:py-10">
                    <Link 
                     href={"/blog"}
                     className={cn(buttonVariants({ variant: "ghost" }))} // 修正: 不要なスペースを削除
                    >
                        全ての記事見る

                    </Link>
                </div>
        </article>
    );
}