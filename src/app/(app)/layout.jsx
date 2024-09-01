import { StackedLayout } from "@/components/base/stacked-layout";
import AuthNavbar from "@/components/auth-navbar";
import AuthSidebar from "@/components/auth-sidebar";
const Layout = ({ children }) => {
  return (
    <StackedLayout navbar={<AuthNavbar />} sidebar={<AuthSidebar />}>
      {children}
    </StackedLayout>
  );
};

export default Layout;
