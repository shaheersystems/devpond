import React, { ReactNode } from "react";
import {
  SidebarInset,
  SidebarTrigger,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import {
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
      <SidebarInset className="bg-sidebar group/sidebar-inset">
        <header className="dark font-space flex h-16 shrink-0 items-center gap-2 px-4 md:px-6 lg:px-8 bg-sidebar text-sidebar-foreground relative before:absolute before:inset-y-3 before:-left-px before:w-px before:bg-gradient-to-b before:from-white/5 before:via-white/15 before:to-white/5 before:z-50">
          <SidebarTrigger className="-ms-2" />
          <div className="flex items-center gap-6 ml-auto">
            <div>
              <Button variant="secondary">
                <RiMagicLine />
                Sponsor
              </Button>
            </div>
            <div>
              <Button variant="secondary">
                <RiGithubLine />
                <RiExternalLinkLine />
              </Button>
            </div>
            <div className="flex items-center gap-2 text-yellow-300">
              <RiFireLine />
              <span>245</span>
            </div>
            <div>
              <div className="h-8 w-8 rounded-full bg-neutral-200"></div>
            </div>
          </div>
        </header>
        <div className="flex h-[calc(100svh-4rem)] bg-[hsl(240_5%_92.16%)] p-8  transition-all ease-in-out duration-300">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
