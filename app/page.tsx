import Image from "next/image";
import Agreement from "@/public/agreement.avif";
import CTAButton from "./_components/ui/CTAButton";

export default function Home() {
  return (
    <>
      <section className="relative h-[85vh]">
        <Image
          src={Agreement}
          fill
          quality={100}
          placeholder="blur"
          className="-z-10 object-cover object-top brightness-70 dark:brightness-40"
          alt="Freelance agreement"
        />
        <div className="text-primary-50 relative z-10 max-h-96 pt-20 text-center">
          <h1 className="pb-10 text-5xl font-light tracking-tight text-accent-50">
            Connect With Top Freelancers & Clients
          </h1>
          <p className="mx-auto mb-10 max-w-2xl font-serif text-lg tracking-wider text-accent-50">
            Find the perfect talent for your project or your next career
            opportunity. Easy, fast, and secure.
          </p>
          <CTAButton className="px-5 py-2.5 text-xl font-light">
            Get Started
          </CTAButton>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 text-center">
        <h2 className="mb-6 text-3xl font-semibold text-accent-50">
          How It Works
        </h2>
        <div className="flex justify-center gap-10">
          <div className="flex flex-col items-center">
            <div className="mb-4 text-4xl">1</div>
            <h3 className="mb-4 text-xl text-accent-50">Post a Job</h3>
            <p className="text-accent-50">
              Clients can easily post jobs to find freelancers with the right
              skills.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4 text-4xl">2</div>
            <h3 className="mb-4 text-xl text-accent-50">Browse Freelancers</h3>
            <p className="text-accent-50">
              Freelancers can create profiles, showcase skills, and apply for
              projects.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4 text-4xl">3</div>
            <h3 className="mb-4 text-xl text-accent-50">Hire & Collaborate</h3>
            <p className="text-accent-50">
              Clients can hire the best freelancer and collaborate on projects
              with ease.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-accent-500 py-20 text-center">
        <h2 className="mb-6 text-3xl font-semibold text-accent-50">
          Why Choose Us?
        </h2>
        <div className="flex justify-center gap-10">
          <div className="flex flex-col items-center">
            <div className="mb-4 text-4xl">🌟</div>
            <h3 className="mb-4 text-xl text-accent-50">Access Top Talent</h3>
            <p className="text-accent-50">
              Browse a wide range of highly skilled freelancers ready to work on
              your project.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4 text-4xl">🔒</div>
            <h3 className="mb-4 text-xl text-accent-50">Secure Payments</h3>
            <p className="text-accent-50">
              Payments are securely processed, giving both clients and
              freelancers peace of mind.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4 text-4xl">⚡</div>
            <h3 className="mb-4 text-xl text-accent-50">Fast & Efficient</h3>
            <p className="text-accent-50">
              Quickly find the best match for your project and start working
              immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 text-center">
        <h2 className="mb-6 text-3xl font-semibold text-accent-50">
          What Our Clients Say
        </h2>
        <div className="flex justify-center gap-10">
          <div className="max-w-xs">
            <p className="mb-4 text-accent-50">
              "This platform helped me find the perfect freelancer for my
              project. I highly recommend it!"
            </p>
            <p className="font-semibold text-accent-50">Client A</p>
          </div>
          <div className="max-w-xs">
            <p className="mb-4 text-accent-50">
              "As a freelancer, I found great projects here that helped me grow
              my portfolio."
            </p>
            <p className="font-semibold text-accent-50">Freelancer B</p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-accent-500 py-10 text-center">
        <h2 className="mb-6 text-3xl font-semibold text-accent-50">
          Find Your Next Project or Freelancer
        </h2>
        <input
          type="text"
          placeholder="Search for freelancers, skills, or projects..."
          className="w-3/4 max-w-md rounded-md px-4 py-2 text-accent-600 placeholder:text-accent-400"
        />
      </section>

      {/* Sign Up Call-to-Action */}
      <section className="py-20 text-center">
        <h2 className="mb-6 text-3xl font-semibold text-accent-50">
          Ready to Get Started?
        </h2>
        <CTAButton className="px-5 py-3 text-xl font-light">
          Sign Up Now
        </CTAButton>
      </section>
    </>
  );
}
