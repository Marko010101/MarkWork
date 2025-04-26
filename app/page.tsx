import Image from "next/image";
import Agreement from "@/public/agreement.avif";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section>
        <Image
          src={Agreement}
          fill
          quality={90}
          placeholder="blur"
          className="object-cover object-top brightness-50"
          alt="Freelance agreement"
        />

        <div className="relative z-10 text-center text-primary-50">
          <h1 className="mt-15 mb-6 text-5xl font-bold tracking-tight">
            Connect With Top Freelancers & Clients
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg">
            Find the perfect talent for your project or your next career
            opportunity. Easy, fast, and secure.
          </p>
          <Link
            href="/jobs"
            className="inline-block rounded-md bg-accent-500 px-8 py-4 text-lg font-semibold text-primary-100 transition-all hover:bg-accent-600 hover:text-primary-50"
          >
            Get Started
          </Link>
        </div>
      </section>
      <section>
        <div className="h-20">Hello</div>
      </section>
    </main>
  );
}
