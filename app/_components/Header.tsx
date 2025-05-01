import { ModeToggle } from "./darkMode/ModeToggle";
import Logo from "./Logo";
import Navigation from "./navigation";
import CTAButton from "./ui/CTAButton";

export function Header() {
  return (
    <header className="sticky z-100 grid grid-cols-6 items-center border-b border-accent-600 px-4 py-3">
      <Logo />
      <Navigation />
      <div className="flex items-center gap-4 justify-self-end">
        <CTAButton className="w-max" variant="secondary">
          Log In
        </CTAButton>
        <CTAButton className="w-max" variant="primary">
          Sign Up
        </CTAButton>
        <ModeToggle />
      </div>
    </header>
  );
}
