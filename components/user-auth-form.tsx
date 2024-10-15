"use client"

import React from "react";
import { Label } from "./ui/label"; // 追加: Labelコンポーネントのインポート
import { Input } from "./ui/input";
import { buttonVariants } from "./ui/button";
import { cn } from "../lib/utils"; // 修正: 正しいパスに変更
import { Icon } from "./icon"; // 修正: 同じディレクトリーのicon.tsxをインポート
import { signIn } from "next-auth/react"; // 追加: signInをインポート
import { useState} from "react";

export default function UserAuthForm () {

    const [isGithubloading, setIsGithubloading] = useState<boolean>(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);

    return (
<div className="grid gap-6">
    <form>
        <div className="grid gap-2">
            <div className="grid gap-1">
                <Label htmlFor="email">メールアドレス</Label>
                <Input id="email" placeholder="name@example.com" type="email" />
            </div>
            <button className={cn(buttonVariants())}>
                メールアドレスでログイン
            </button>
        </div>
    </form>
    <div className="relative flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 bg-white px-2 text-gray-500">または</span>
        <div className="flex-grow border-t border-gray-300"></div>
    </div>
    <div className="flex flex-col gap-3">
    <button 
    className={cn(buttonVariants({ variant: "outline" }))} 
    onClick={() => {
        setIsGithubloading(true);
        signIn("github")
    }}      
    >
        {isGithubloading ? (
            <Icon.spinner className="mr-2 animate-spin" />
       ) : (
            <Icon.github className="mr-2" /> )}
        GitHub
    </button>

    <button
          className={cn(buttonVariants({ variant: "outline" }))}
          onClick={() => {
            setIsGoogleLoading(true);
            signIn("google");
          }}
        >
          {isGoogleLoading ? (
            <Icon.spinner className="mr-2 animate-spin" />
          ) : (
            <Icon.google className="mr-2" />
          )}
          Google
        </button>

    </div>
   
</div>


    );
 }




