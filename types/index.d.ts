export type NavItem = {
    title: string;
    href: string;
    disabled?: boolean;
};
export type SiteConfig = {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    links: {
        x: string;
        github: string;
    };
};
export type MarketingConfig = {
    mainNav: NavItem[];
};

export type SidebarNavItem = {
    title: string;
    disabled?: boolean;
    external?: boolean;
    icon?: keyof typeof Icon;

} & (
   | {
        href: string;
        item?: never;
    }
   | {
        href?: string;
        items: NavItem[];
    }
);

export type DashboardConfig = {
    mainNav: NavItem[];
    sidebarNav: SidebarNavItem[];
};