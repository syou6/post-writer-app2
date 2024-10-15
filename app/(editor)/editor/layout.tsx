// import MainNav from "@/components/MainNav";
// import  SiteFooter  from "@/components/site-footer";
// import { dashboardConfig } from "@/config/dashborad";
// import DashboardNav from "@/components/dashboard-nav";

// export default function EditorLayout({
//     children,
// }: {
//     children: React.ReactNode;
// }) {
//     return (
//         <div className="container mx-auto grid items-center gap-10 py-8">
//           {children}
//         </div>
//     );
// }




interface EditorProps {
    children?: React.ReactNode;
  }
  
  export default function EditorLayout({ children }: EditorProps) {
    return (
      <div className="container mx-auto grid items-center gap-10 py-8">
        {children}
      </div>
    );
  }