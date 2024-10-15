import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";  // cnをインポート
import { siteConfig } from "@/config/site";

export default function IndexPage() {
    return (
        <>
        {/* <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12 "> */}
        <section className="flex justify-center items-center py-12">
           <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
           <Link href={siteConfig.links.x} className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm"
           >
            Xをフォローする
            </Link>
           <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Post Writer
           </h1>
           <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
            このアプリケーションは、Next.js
            App Routerで作られたものです。ユーザーは自由にポストすることができます。
           </p>
           <div className="space-x-4">
            <Link 
             href={"/login"} className={cn(buttonVariants({ size:"lg"}))}>はじめる</Link>
            <Link 
             href={siteConfig.links.github} 
             className={cn(buttonVariants({ size:"lg", variant: "outline"}))}
             target="_blank"
             rel="noreherrer"   
             >
                GitHub</Link>
           </div>
           </div>
        </section>

        <section 
        id = "features" 
        className="container mx-auto py-8 md:py-12 lg:py-24 bg-slate-50 space-y-6"
        >
            <div className="text-center space-y-6 max-w-[58rem] mx-auto">
                <h2 className="font-extrabold text-3xl md:text-6xl">
                    サービスの特徴
                </h2>
                <p className="text-muted-foreground sm:text-lg sm:leading-7">
                    このプロジェクトはモダンな技術スタックを使って作られたWebアプリケーションです。Next.jsAppRouterやcontetlayerを利用してマークダウン形式でブログ投稿ができます。</p>
            </div>
            {/* <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4"> */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
             <div className="bg-background border p-2 rounded-lg">
                    <div className="flex flex-col justify-between p-6 md:h-[160px] h-[160px]">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="45" 
                    height="45" 
                    viewBox="0 0 256 256"
                    >
                    <defs><linearGradient id="logosNextjsIcon0" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"><stop offset="0%" stopColor="#FFF"/><stop offset="100%" stopColor="#FFF" stopOpacity="0"/></linearGradient><linearGradient id="logosNextjsIcon1" x1="50%" x2="49.953%" y1="0%" y2="73.438%"><stop offset="0%" stopColor="#FFF"/><stop offset="100%" stopColor="#FFF" stopOpacity="0"/></linearGradient><circle id="logosNextjsIcon2" cx="128" cy="128" r="128"/></defs><mask id="logosNextjsIcon3" fill="#fff"><use href="#logosNextjsIcon2"/></mask><g mask="url(#logosNextjsIcon3)"><circle cx="128" cy="128" r="128"/><path fill="url(#logosNextjsIcon0)" d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"/><path fill="url(#logosNextjsIcon1)" d="M163.556 76.8h17.067v102.4h-17.067z"/></g>
                    </svg>
                    <div className="space-y-2">
                    <h3 className="font-bold">Next.js</h3>
                    <p className="text-sm text-muted-foregroud">
                        AppRouter/Layouts/APIRoutesの技術を使用。
                    </p>
                </div>
              </div>
             </div>
             <div className="bg-background border p-2 rounded-lg">
             <div className="flex flex-col justify-between p-6 md:h-[160px] h-[160px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236a2.236 2.236 0 0 1-2.236-2.236a2.236 2.236 0 0 1 2.235-2.236a2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622c-1.78-1.653-3.542-2.602-4.887-2.602c-.41 0-.783.093-1.106.278c-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03c-.704 3.113-.39 5.588.988 6.38c.32.187.69.275 1.102.275c1.345 0 3.107-.96 4.888-2.624c1.78 1.654 3.542 2.603 4.887 2.603c.41 0 .783-.09 1.106-.275c1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032c.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127c.666.382.955 1.835.73 3.704c-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28c-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538a15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707c.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564c-.44-.02-.89-.034-1.345-.034c-.46 0-.915.01-1.36.034c.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093c.406.582.802 1.203 1.183 1.86c.372.64.71 1.29 1.018 1.946c-.308.655-.646 1.31-1.013 1.95c-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005a26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16c-.225.39-.435.782-.635 1.174c-.265-.656-.49-1.31-.676-1.947c.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387c-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498c1.732.74 2.852 1.708 2.852 2.476c-.005.768-1.125 1.74-2.857 2.475c-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5c-1.732-.737-2.852-1.706-2.852-2.474c0-.768 1.12-1.742 2.852-2.476c.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948c-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175c.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423c.23 1.868-.054 3.32-.714 3.708c-.147.09-.338.128-.563.128c-1.012 0-2.514-.807-4.11-2.28c.686-.72 1.37-1.536 2.02-2.44c1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532c.66.905 1.345 1.727 2.035 2.446c-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703c.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034c.46 0 .915-.01 1.36-.034c-.44.572-.895 1.095-1.345 1.565c-.455-.47-.91-.993-1.36-1.565z"/></svg>
                    <div className="space-y-2">
                    <h3 className="font-bold">React</h3>
                    <p className="text-sm text-muted-foregroud">
                        AppRouter/Layouts/APIRoutesの技術を使用。
                    </p>
                </div>
                
                
              </div>
             </div>
             <div className="bg-background border p-2 rounded-lg">
             <div className="flex flex-col justify-between p-6 md:h-[160px] h-[160px]">
             <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z"/></svg>
                    <div className="space-y-2">
                    <h3 className="font-bold">PlanetScale</h3>
                    <p className="text-sm text-muted-foregroud">
                        AppRouter/Layouts/APIRoutesの技術を使用。
                    </p>
                </div>
                
                
              </div>
             </div>
             <div className="bg-background border p-2 rounded-lg">
             <div className="flex flex-col justify-between p-6 md:h-[160px] h-[160px]">
             <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624c1.177 1.194 2.538 2.576 5.512 2.576c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
                    <div className="space-y-2">
                    <h3 className="font-bold">TailwindCSS</h3>
                    <p className="text-sm text-muted-foregroud">
                        AppRouter/Layouts/APIRoutesの技術を使用。
                    </p>
                </div>
                
                
              </div>
             </div>
             <div className="bg-background border p-2 rounded-lg">
             <div className="flex flex-col justify-between p-6 md:h-[160px] h-[160px]">
             <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M11.703 5.616c.03-.905.278-2.237 1.145-3.112c.805-.813 1.785-1.209 2.395-1.39a.347.347 0 0 1 .45.353c-.04.866-.268 2.158-.856 2.85c-.554.652-1.444 1.516-2.749 1.662a.348.348 0 0 1-.385-.363Z"/><path fill="currentColor" d="M13.937 22.17c.627.24 1.26.482 1.833.482c1.227 0 4.798-2.83 4.926-5.768a.399.399 0 0 0-.215-.36c-.908-.508-2.392-1.774-2.443-3.615c-.06-2.146 1.017-3.85 1.832-4.555c.184-.159.247-.439.083-.617c-.742-.81-2.234-1.925-3.596-1.898c-.99.02-1.883.39-2.65.706c-.587.243-1.1.455-1.526.455c-.403 0-.887-.21-1.443-.453c-.748-.326-1.626-.708-2.61-.708C6.304 5.84 2.7 7.352 2.7 13.19c0 3.096 3.195 9.544 5.892 9.462c.582 0 1.204-.24 1.822-.48c.608-.236 1.211-.47 1.767-.47c.537 0 1.143.233 1.756.468Z"/></svg>
                    <div className="space-y-2">
                    <h3 className="font-bold">Apple</h3>
                    <p className="text-sm text-muted-foregroud">
                        AppRouter/Layouts/APIRoutesの技術を使用。
                    </p>
                </div>
                
                
              </div>
             </div>
             <div className="bg-background border p-2 rounded-lg">
             <div className="flex flex-col justify-between p-6 md:h-[160px] h-[160px]">
             <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 1024 1024"><path fill="currentColor" d="M448.3 225.2c-18.6 0-32 13.4-32 31.9s13.5 31.9 32 31.9c18.6 0 32-13.4 32-31.9c.1-18.4-13.4-31.9-32-31.9zm393.9 96.4c-13.8-13.8-32.7-21.5-53.2-21.5c-3.9 0-7.4.4-10.7 1v-1h-3.6c-5.5-30.6-18.6-60.5-38.1-87.4c-18.7-25.7-43-47.9-70.8-64.9l25.1-35.8v-3.3c0-.8.4-2.3.7-3.8c.6-2.4 1.4-5.5 1.4-8.9c0-18.5-13.5-31.9-32-31.9c-9.8 0-19.5 5.7-25.9 15.4l-29.3 42.1c-30-9.8-62.4-15-93.8-15c-31.3 0-63.7 5.2-93.8 15L389 79.4c-6.6-9.6-16.1-15.4-26-15.4c-18.6 0-32 13.4-32 31.9c0 6.2 2.5 12.8 6.7 17.4l22.6 32.3c-28.7 17-53.5 39.4-72.2 65.1c-19.4 26.9-32 56.8-36.7 87.4h-5.5v1c-3.2-.6-6.7-1-10.7-1c-20.3 0-39.2 7.5-53.1 21.3c-13.8 13.8-21.5 32.6-21.5 53v235c0 20.3 7.5 39.1 21.4 52.9c13.8 13.8 32.8 21.5 53.2 21.5c3.9 0 7.4-.4 10.7-1v93.5c0 29.2 23.9 53.1 53.2 53.1H331v58.3c0 20.3 7.5 39.1 21.4 52.9c13.8 13.8 32.8 21.5 53.2 21.5c20.3 0 39.2-7.5 53.1-21.3c13.8-13.8 21.5-32.6 21.5-53v-58.2H544v58.1c0 20.3 7.5 39.1 21.4 52.9c13.8 13.8 32.8 21.5 53.2 21.5c20.4 0 39.2-7.5 53.1-21.6c13.8-13.8 21.5-32.6 21.5-53v-58.2h31.9c29.3 0 53.2-23.8 53.2-53.1v-91.4c3.2.6 6.7 1 10.7 1c20.3 0 39.2-7.5 53.1-21.3c13.8-13.8 21.5-32.6 21.5-53v-235c-.1-20.3-7.6-39-21.4-52.9zM246 609.6c0 6.8-3.9 10.6-10.7 10.6c-6.8 0-10.7-3.8-10.7-10.6V374.5c0-6.8 3.9-10.6 10.7-10.6c6.8 0 10.7 3.8 10.7 10.6v235.1zm131.1-396.8c37.5-27.3 85.3-42.3 135-42.3s97.5 15.1 135 42.5c32.4 23.7 54.2 54.2 62.7 87.5H314.4c8.5-33.4 30.5-64 62.7-87.7zm39.3 674.7c-.6 5.6-4.4 8.7-10.5 8.7c-6.8 0-10.7-3.8-10.7-10.6v-58.2h21.2v60.1zm202.3 8.7c-6.8 0-10.7-3.8-10.7-10.6v-58.2h21.2v60.1c-.6 5.6-4.3 8.7-10.5 8.7zm95.8-132.6H309.9V364h404.6v399.6zm85.2-154c0 6.8-3.9 10.6-10.7 10.6c-6.8 0-10.7-3.8-10.7-10.6V374.5c0-6.8 3.9-10.6 10.7-10.6c6.8 0 10.7 3.8 10.7 10.6v235.1zM576.1 225.2c-18.6 0-32 13.4-32 31.9s13.5 31.9 32 31.9c18.6 0 32.1-13.4 32.1-32c-.1-18.6-13.4-31.8-32.1-31.8z"/></svg>
                    <div className="space-y-2">
                    <h3 className="font-bold">Android</h3>
                    <p className="text-sm text-muted-foregroud">
                        AppRouter/Layouts/APIRoutesの技術を使用。
                    </p>
                </div>
                
                
              </div>
             </div>
             </div>
             <div className="mx-auto md:max-w-[58rem] text-center">
                <p className="text-muted-foreground sm:text-lg sm:leading-7">
                    Post Writerはログインするとブログ投稿が出来るようになります。
                </p>
             
            </div>
        </section>

        <section 
        id="contact" 
        className="container mx-auto py-8 md:py-12 lg:py-24">
            <div className="max-w-[58rem] mx-auto text-center flex flex-col gap-4">
                <h2 className="font-extrabold text-3xl md:text-6xl">
                    Contact Me</h2>
                <p className="text-muted-foreground sm:text-lg sm:leading-7">
                    もしもWebサービスが気に入った場合は下記XからDMでご連絡ください。
                    <br />
                    お仕事のご連絡をお待ちしております。
                </p>
                <Link href={siteConfig.links.x} 
                className="underline underline-offset-4"
                target="_blank"
                rel="noreferrer"
                >
                お仕事はXまで
                </Link>
            </div>
        </section>
        </>
    );
}

