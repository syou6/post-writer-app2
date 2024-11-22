import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { getServerSession, type Session } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

const postCreateSchema = z.object({
    title: z.string(),
    content: z.string().optional(),
});

//api//posts

export async function POST(
    req: NextRequest) {
    try {
        const session: Session | null = await getServerSession(authOptions);
        if 
        (!session || !session.user) 
       
        {
            return NextResponse.json("Unauthorized", { status: 403 });
        }

        const { user } = session;
        const json = await req.json();
        const body = postCreateSchema.parse(json);
        const { title, content } = body;

        const post = await prisma.post.create({
            data: {
                title,
                content,
                authorId: user.id,
            },
            select: {
                id: true,
            },
        });

        return NextResponse.json(post);
    } catch (err) {
        if (err instanceof z.ZodError) {
            return NextResponse.json(err.issues, { status: 422 });
        }

        return NextResponse.json(null, { status: 500 });
    }
}
