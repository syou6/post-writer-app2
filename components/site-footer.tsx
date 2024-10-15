import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function SiteFooter(){
    return(
        <footer>
            <div className="container py-10 md:py-0 md:h-20">
                <p className="text-center test-sm md:text-left md:ml-40">
                    Built by {""}
                    <Link 
                    href= {siteConfig.links.x} 
                    className="underline underline-offset-4 font-midium"
                    target="_blank"
                    rel="noreferrer"
                    >
                    Shocode
                    </Link>
                    . Hosted on {""}
                    <Link href={"http://vercel.com"} className="underline underline-offset-4 font-midium">Vercel</Link>
                </p>
            </div>
        </footer>
    );
}


