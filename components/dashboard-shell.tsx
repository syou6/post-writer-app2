// import { cn } from "@/lib/utils";
// import React from "react";

// interface DashBordShellProps extends React.HTMLAttributes<HTMLDivElement> {}

// export default function DashBordShell({
//      children, 
//      className, 
//      ...props
//     }: DashBordShellProps) {
//     return (
//     <div className={cn("grid items-center gap-8",className)} {...props}>
//     {children}
//     </div>
//     );
// }


import { cn } from "@/lib/utils";
import React from "react";

export default function DashBordShell({
  children, 
  className, 
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("grid items-center gap-8", className)} {...props}>
      {children}
    </div>
  );
}
