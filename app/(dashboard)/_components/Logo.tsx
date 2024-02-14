import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="h-20 px-2 flex items-center justify-start">
      <Link
        href="/admin"
        className="flex items-center justify-start gap-2"
        aria-labelledby="Umar Bashir Portfolio logo"
      >
        <div className="relative w-10 h-10">
          <Image src="/images/Logo.svg" alt="Umar Bashir Portfolio Logo" fill />
        </div>
        <h1 className="text-xl font-bold text-slate-700">Admin Panel</h1>
      </Link>
    </div>
  );
};

export default Logo;
