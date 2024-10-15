// import { Post, User } from "@prisma/client";
// import Editor from "@/components/editor";
// import { db } from "@/lib/db";
// import { getCurrentUser } from "@/lib/session";
// import { notFound, redirect } from "next/navigation";

// interface EditorProps {
//     params: { postId: string };
// }

// async function getPostForUser(postId: Post["id"], userId: User["id"]) {
//     const post =await db.post.findFirst({
//         where: {
//             id: postId,
//             authorId: userId,
//         },
//     });
//     return post;  
// }

// export default  async function EditorPage( { params }: EditorProps) {
//     const user = await getCurrentUser();

//     if(!user) {
//         redirect("/login");
//     }

//     const userId = user?.id;

    
//     const postId = params.postId;
//     const post = await getPostForUser(postId, userId);
   
//     if (!post) {
//         notFound();
//     }

//     return(
//     <Editor 
//       post = {{
//         id: post?.id,
//         title: post?.title,
//         content: post?.content,
//         published: post?.published,
//     }}
//     />
//   );
// }




import Editor from "@/components/editor";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { Post, User } from "@prisma/client";
import { notFound, redirect } from "next/navigation";

interface EditorProps {
  params: { postId: string };
}

async function getPostForUser(postId: Post["id"], userId: User["id"]) {
  return await db.post.findFirst({
    where: {
      id: postId,
      authorId: userId,
    },
  });
}

export default async function EditorPage({ params }: EditorProps) {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions.pages?.signIn || "/login");
  }

  const post = await getPostForUser(params.postId, user.id);

  if (!post) {
    notFound();
  }

  return (
    <Editor
      post={{
        id: post.id,
        title: post.title,
        content: post.content,
        published: post.published,
      }}
    />
  );
}