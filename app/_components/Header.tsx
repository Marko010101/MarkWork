import Logo from "./Logo";
import Navigation from "./navigation";

export function Header() {
  return (
    <header className="sticky z-100 flex items-center justify-between border-b border-accent-500 px-4 py-3">
      <Logo />
      <Navigation />
      <div>
        <button className="rounded-md bg-accent-500 px-4 py-2 text-accent-100 transition-colors hover:bg-accent-600 hover:text-primary-50">
          Sign Up
        </button>
      </div>
    </header>
  );
}
