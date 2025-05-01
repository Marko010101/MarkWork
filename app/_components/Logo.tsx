import Image from "next/image";
import LogoImage from "@/public/logo.png";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="-900/10 justify-self-start rounded-xl border border-accent-900/10 bg-accent-900/10 p-1 dark:border-white/10 dark:bg-accent-100/10"
    >
      <Image
        src={LogoImage}
        alt="MarkWork Logo"
        width={50}
        height={50}
        className="h-10 w-auto drop-shadow-lg"
      />
    </Link>
  );
}
