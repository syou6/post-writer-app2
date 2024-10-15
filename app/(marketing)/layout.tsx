import MainNav from "@/components/MainNav";
import { buttonVariants } from "@/components/ui/button";
import { marketingConfig } from "@/config/marketing";
import  SiteFooter  from "@/components/site-footer";
import {cn} from "@/lib/utils";
import Link from "next/link"; 

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <header className="container max-w-screen-lg mx-auto z-40 bg-background"> 
                <div className="ml-4 mt-4 flex items-center justify-between">
                    <MainNav items = {marketingConfig.mainNav}/>
                    <nav className="mr-4">
                     <Link href={"/login"} className={cn(
                        buttonVariants({variant:"secondary" , size: "sm"}),
                     "px-4 "
                    )}
                    >
                        ログイン
                     </Link>
                    </nav>
                </div>
            </header>
            <main>{children}</main>
            <SiteFooter />
        </div>
    );
}