import Link from "next/link";
import { navLinks } from "@/app/_lib/constants/navigation";

export default function Navigation() {
  return (
    <nav aria-label="Main Navigation" className="col-span-4 col-start-2">
      <ul className="flex gap-4 justify-self-center px-4 py-3">
        {navLinks.map(({ href, label }) => (
          <li key={label}>
            <Link
              href={href}
              className="relative inline-block w-max px-2 py-1 transition-colors before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-slate-500 before:transition-all before:duration-300 hover:before:w-full"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
