"use client";
import React from 'react'; // 追加: Reactをインポート
import { useMDXComponent } from 'next-contentlayer/hooks'; // 追加: useMDXComponentをインポート
import Image from "next/image"; // 修正: Imageをデフォルトインポートに変更
import Callout from './callout';

const components = {
    Image, 
    Callout,
};

export default function Mdx({code}: { code: string }) {

    const Component = useMDXComponent(code);

    return(
        <div className='prose lg:prose-xl max-w-full'>
            <Component components={components}/>
        </div>
    )
}