import React, { ReactNode } from "react";
import {
  SidebarInset,
  SidebarTrigger,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import {
  RiAddBoxLine,
  RiCoinLine,
  RiExternalLinkLine,
  RiFireLine,
  RiGithubLine,
  RiLink,
  RiMagicLine,
} from "@remixicon/react";
interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="font-space bg-sidebar group/sidebar-inset">
        <div className="p-4 border-b sticky top-0 flex items-center justify-between">
          <SidebarTrigger className="">
            <Button size="icon">
              <RiLink />
            </Button>
          </SidebarTrigger>
          <Button>
            <RiAddBoxLine />
            Contribue
          </Button>
        </div>
        <div className="flex h-[calc(100svh-4rem)] p-8  transition-all ease-in-out duration-300">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
