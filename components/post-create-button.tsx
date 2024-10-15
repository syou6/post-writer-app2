"use client";

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "./ui/button";
import { useState } from "react";
import { Icon } from "./icon";
import { title } from "process";
import { useRouter } from "next/navigation";
import { Description } from "@radix-ui/react-toast";
import { toast } from "@/hooks/use-toast";


interface PostCreateButtonProps extends ButtonProps {}

export default function PostCreateButton({
    className, 
    variant, 
    ...props 
}: PostCreateButtonProps) {
    const router = useRouter();
    const [isLoading, setIsLoding] =useState(false);

    const onClick = async () => {
      setIsLoding(true);
      const response = await fetch("api/posts", {
        method: "POST",
        headers:  {
          "Content-Tytpe": "application/json",

        },
        body: JSON.stringify({
          title: "Untitled Post",
        }),
      });

      setIsLoding(false);

    

      if(!response.ok) {
        return toast({
          title: "問題が発生しました。",
          description: "投稿が作成されませんでした。もう一度お試しください。",
          variant: "destructive",
        });
       }

       const post =await response.json();
       
       router.refresh();
       router.push(`editor/${post.id}`);
  
    };

    return (
      <button className={cn(
        buttonVariants({variant}),
        {"cursor-not-allowed opacity-60": isLoading },
       className
       )}
        onClick={onClick}
        disabled={isLoading}
        {...props}
        >
         {isLoading ?(
            <Icon.spinner className="animate-spin mr-2 h-4 w-4" /> 
         ):(
          <Icon.add className="mr-2 h-4 w-4"/>
        )}
            新しい投稿
        </button>
        );
}