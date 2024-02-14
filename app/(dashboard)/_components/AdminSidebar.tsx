import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import { MdDashboard, MdPages } from "react-icons/md";
import Logo from "./Logo";

const AdminSidebar = () => {
  return (
    <div className="bg-gray-100 h-full fixed w-[275px] px-2">
      <Logo />
      <nav className="flex flex-col gap-1 h-full">
        <Link
          href="/admin"
          className="flex items-center justify-start space-x-2 hover:bg-slate-950 hover:text-slate-100 duration-200 ease-in-out p-2 rounded-md"
        >
          <MdDashboard className="w-6 h-6" />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/admin/posts"
          className="flex items-center justify-start space-x-2 hover:bg-slate-950 hover:text-slate-100 duration-200 ease-in-out p-2 rounded-md"
        >
          <MdPages className="w-6 h-6" />
          <span>Posts</span>
        </Link>
      </nav>
      <div className="px-4 items-end">
        <button className="flex items-center">
          <BiLogOut className="w-6 h-6" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
