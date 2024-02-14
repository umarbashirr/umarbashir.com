import { ReactNode } from "react";
import AdminSidebar from "../_components/AdminSidebar";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen relative">
      <AdminSidebar />
      <div className="absolute left-[275px] w-[calc(100%-275px)] min-h-screen p-10">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
