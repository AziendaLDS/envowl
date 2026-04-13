export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] text-black">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 md:px-10 md:py-40">
        <div className="mb-16 sm:mb-24 md:mb-28">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-black/55 sm:mb-5 sm:text-base">
            Legal
          </p>
          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-black sm:mb-5 sm:text-5xl md:text-6xl lg:text-7xl">
            Privacy Policy
          </h1>
          <p className="text-base text-black/60 sm:text-lg">
            Last updated: April 13, 2026
          </p>
        </div>

        <div className="space-y-12 text-base leading-[1.8] text-black sm:space-y-20 sm:text-xl md:space-y-24 md:text-2xl md:leading-[1.85]">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-black sm:mb-6 sm:text-3xl md:text-4xl">
              Overview
            </h2>
            <p>
              Meridian (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
              operated by LDS Ventures LLC. We are committed to protecting your
              personal information and being transparent about what we collect and
              how we use it. This Privacy Policy explains our practices for the
              Meridian website and waitlist service located at our website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-black sm:mb-6 sm:text-3xl md:text-4xl">
              Information We Collect
            </h2>
            <p className="mb-4">
              We collect only the minimum information necessary to operate our
              waitlist and communicate with you:
            </p>
            <ul className="list-none space-y-3">
              {[
                {
                  label: "Email address",
                  desc: "Collected when you join our waitlist or subscribe to our newsletter.",
                },
                {
                  label: "Signup type",
                  desc: "Whether you signed up as a potential client or an AI creator, to personalize our communications.",
                },
                {
                  label: "Usage data",
                  desc: "Basic analytics such as pages visited and time spent on site, collected in aggregate and not tied to individual identities.",
                },
              ].map((item) => (
                <li key={item.label} className="flex gap-4">
                  <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-black" />
                  <span>
                    <span className="font-semibold text-black">{item.label}</span>{" "}
                    — {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-black sm:mb-6 sm:text-3xl md:text-4xl">
              How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-none space-y-3">
              {[
                "Send you waitlist updates, early access notifications, and launch announcements",
                "Deliver our weekly newsletter and AI resource content",
                "Improve the Meridian platform based on usage patterns",
                "Communicate important service updates",
              ].map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-black" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-black sm:mb-6 sm:text-3xl md:text-4xl">
              What We Never Do
            </h2>
            <ul className="list-none space-y-3">
              {[
                "We never sell your personal information to third parties",
                "We never share your email address with advertisers",
                "We never send unsolicited commercial messages unrelated to Meridian",
              ].map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-black" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-black sm:mb-6 sm:text-3xl md:text-4xl">
              Third Party Services
            </h2>
            <p className="mb-4">
              We use the following third party services to operate Meridian. Each
              has their own privacy policy governing how they handle data:
            </p>
            <div className="space-y-4">
              {[
                {
                  name: "Beehiiv",
                  desc: "Our email newsletter and waitlist platform. Your email address is stored and managed through Beehiiv's infrastructure.",
                },
                {
                  name: "Vercel",
                  desc: "Our website hosting provider. Vercel may collect standard server logs including IP addresses.",
                },
                {
                  name: "Analytics",
                  desc: "We may use privacy-focused analytics tools to understand site usage in aggregate.",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-neutral-300 bg-white p-6 shadow-sm"
                >
                  <p className="mb-2 text-xl font-semibold text-black">
                    {item.name}
                  </p>
                  <p className="text-lg leading-relaxed text-black">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-black sm:mb-6 sm:text-3xl md:text-4xl">
              Your Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-none space-y-3">
              {[
                "Unsubscribe from our emails at any time using the unsubscribe link in any email we send",
                "Request access to the personal data we hold about you",
                "Request deletion of your personal data from our systems",
                "Opt out of any future communications",
              ].map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-black" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:aziendaLDS@gmail.com"
                className="font-medium text-black underline underline-offset-4"
              >
                aziendaLDS@gmail.com
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-black sm:mb-6 sm:text-3xl md:text-4xl">
              Data Retention
            </h2>
            <p>
              We retain your email address and signup information for as long as
              you are subscribed to our communications. If you unsubscribe or
              request deletion, we will remove your data from our active systems
              within 30 days.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-black sm:mb-6 sm:text-3xl md:text-4xl">
              Cookies
            </h2>
            <p>
              Our website may use essential cookies to ensure basic functionality.
              We do not use tracking cookies for advertising purposes. Any
              analytics we employ are configured to respect user privacy and do
              not build individual user profiles.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-black sm:mb-6 sm:text-3xl md:text-4xl">
              Children&apos;s Privacy
            </h2>
            <p>
              Meridian is not directed at children under the age of 13. We do
              not knowingly collect personal information from children. If you
              believe a child has provided us with personal information, please
              contact us and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-black sm:mb-6 sm:text-3xl md:text-4xl">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy as Meridian grows and evolves. We
              will notify waitlist subscribers of any material changes via email.
              Continued use of our website after changes constitutes acceptance of
              the updated policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-black sm:mb-6 sm:text-3xl md:text-4xl">
              Contact
            </h2>
            <p>
              For any privacy-related questions or requests, contact LDS Ventures
              LLC at{" "}
              <a
                href="mailto:aziendaLDS@gmail.com"
                className="font-medium text-black underline underline-offset-4"
              >
                aziendaLDS@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
