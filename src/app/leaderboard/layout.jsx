import AuthNavbar from "@/components/auth-navbar";
import AuthSidebar from "@/components/auth-sidebar";
import { StackedLayout } from "@/components/base/stacked-layout";

function AppLayout({ children }) {
  return (
    <StackedLayout navbar={<AuthNavbar />} sidebar={<AuthSidebar />}>
      {children}
    </StackedLayout>
  );
}

export default AppLayout;
