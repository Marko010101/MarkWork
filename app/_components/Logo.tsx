import Image from "next/image";
import LogoImage from "@/public/logo.png";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="rounded-xl bg-white/20 p-1 backdrop-blur-md border border-white/10">
      <Image src={LogoImage} alt="MarkWork Logo" width={50} height={50} className="h-10 w-auto drop-shadow-lg" />
    </Link>
  );
}
