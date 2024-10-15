import { Children } from "react";

export default function Callout({ children }: {children: React.ReactNode}) {
    return (
        <div className="my-6 flex items-center rounded-md border border-l-4" style={{ width: '100%' }}>
            <div>{children}
            </div>
        </div>
    );
}