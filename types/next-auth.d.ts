import { User } from "next-auth";

type UserId = string;

declare module "next-auth/jwt" {
    interface JWT {
          id: UserId;
    }
}

declare module "next-auth" {
    interface Session {
        user: User & {
          id: UserId;
        }; // 修正: コロンを追加してプロパティを正しく定義
    }
}