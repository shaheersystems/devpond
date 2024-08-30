import AuthNavbar from "@/components/auth-navbar";
import AuthSidebar from "@/components/auth-sidebar";
import { Avatar } from "@/components/base/avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/base/dropdown";
import {
  Navbar,
  NavbarDivider,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
  NavbarSpacer,
} from "@/components/base/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "@/components/base/sidebar";
import { StackedLayout } from "@/components/base/stacked-layout";
import Link from "next/link";

const navItems = [
  { label: "Home", url: "/" },
  { label: "Questions", url: "/events" },
  { label: "Leaderboard", url: "/orders" },
];

function AppLayout({ children }) {
  return (
    <StackedLayout navbar={<AuthNavbar />} sidebar={<AuthSidebar />}>
      {children}
    </StackedLayout>
  );
}

export default AppLayout;
