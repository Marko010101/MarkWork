import Link from "next/link";
import { navLinks } from "@/app/_lib/constants/navigation";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-4 rounded-4xl bg-accent-600 px-4 py-3 text-accent-50 shadow-md">
        {navLinks.map(({ href, label }) => (
          <li key={label}>
            <Link
              href={href}
              className="transition-colors hover:text-accent-50"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
