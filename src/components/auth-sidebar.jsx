import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarSection,
} from "@/components/base/sidebar";
import Logo from "./logo";
import Link from "next/link";
import { navItems } from "@/constants";

const AuthSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          {navItems.map(({ label, url }) => (
            <Link
              className="px-4 py-2 transition-all rounded-lg hover:bg-black/5"
              key={label}
              href={url}
            >
              {label}
            </Link>
          ))}
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  );
};

export default AuthSidebar;
