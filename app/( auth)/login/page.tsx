import React from 'react'; // 追加: Reactをインポート
import Link from 'next/link'; // 追加: Linkをインポート
import UserAUthForm from '../../../components/user-auth-form';

export default function Login () {
    return (
        <div className='container mx-auto p-4 flex flex-col justify-center h-screen items-center w-screen'> {/* 追加: mx-auto と p-4 を追加 */}
            <div className="mx-auto w-full sm:w-[350px] flex flex-col justify-center space-y-6">
                <div className='text-center space-y-2'>
                    <h1 className='text-2xl font-semibold tracking-tight'>
                        Welcome back
                    </h1>
                    <p className='text-sm text-muted-foreground'>
                        メールアドレスを入力してログインできます。
                    </p>
                </div>

                <UserAUthForm />
                <p className='text-sm text-muted-foreground px-8 text-center text-sm'>
                    <Link href= {"/register"} className= "underline underline-offset-4">
                    アカウントを持っていませんか？
                    </Link>
                </p>
            </div>
        </div>
    )
}