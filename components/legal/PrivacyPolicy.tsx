export function PrivacyPolicy() {
  return (
    <div className="relative isolate -mt-16 overflow-hidden md:-mt-[4.5rem]">
      <div className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6 md:px-8 md:pb-32 md:pt-44">
        <div className="mb-16 border-b border-paper/10 pb-12 sm:mb-20">
          <p className="mb-4 text-sm font-semibold text-ember">
            Legal
          </p>
          <h1 className="mb-5 font-display text-5xl font-bold leading-[0.98] tracking-[-0.035em] text-paper sm:text-6xl lg:text-7xl">
            Privacy Policy
          </h1>
          <p className="text-base text-paper/50">
            Last updated: October 1, 2026
          </p>
        </div>

        <div className="space-y-14 text-base leading-[1.8] text-paper/70 sm:text-lg">
          <section>
            <h2 className="mb-4 font-display text-2xl font-bold tracking-[-0.02em] text-paper sm:text-3xl">
              Overview
            </h2>
            <p>
              Envowl (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
              operated by LDS Ventures LLC. We are committed to protecting your
              personal information and being transparent about what we collect and
              how we use it. This Privacy Policy explains our practices for the
              Envowl website, waitlist, and digital resource shop.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold tracking-[-0.02em] text-paper sm:text-3xl">
              Information We Collect
            </h2>
            <p className="mb-4">
              We collect only the minimum information necessary to operate our
              waitlist, deliver purchases, and communicate with you:
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
                  label: "Purchase information",
                  desc: "If you buy a paid resource pack, we store your email address and the pack you purchased so we can deliver it and restore your access. Payments are handled by Stripe. We never see or store your full card details.",
                },
                {
                  label: "Usage data",
                  desc: "Basic analytics such as pages visited and time spent on site, collected in aggregate and not tied to individual identities.",
                },
              ].map((item) => (
                <li key={item.label} className="flex gap-4">
                  <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ember" />
                  <span>
                    <span className="font-semibold text-paper">{item.label}</span>{" "}
                    — {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold tracking-[-0.02em] text-paper sm:text-3xl">
              How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-none space-y-3">
              {[
                "Send you waitlist updates, early access notifications, and launch announcements",
                "Deliver our weekly newsletter and AI resource content",
                "Improve the Envowl platform based on usage patterns",
                "Deliver purchased resources and send access links",
                "Communicate important service updates",
              ].map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ember" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold tracking-[-0.02em] text-paper sm:text-3xl">
              What We Never Do
            </h2>
            <ul className="list-none space-y-3">
              {[
                "We never sell your personal information to third parties",
                "We never share your email address with advertisers",
                "We never send unsolicited commercial messages unrelated to Envowl",
              ].map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ember" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold tracking-[-0.02em] text-paper sm:text-3xl">
              Third Party Services
            </h2>
            <p className="mb-4">
              We use the following third party services to operate Envowl. Each
              has their own privacy policy governing how they handle data:
            </p>
            <div className="space-y-4">
              {[
                {
                  name: "Beehiiv",
                  desc: "Our email newsletter and waitlist platform. Your email address is stored and managed through Beehiiv's infrastructure.",
                },
                {
                  name: "Supabase",
                  desc: "Our database provider. Waitlist signups and purchase records (email address and pack purchased) are stored in Supabase.",
                },
                {
                  name: "Stripe",
                  desc: "Our payment processor for paid resource packs. Stripe collects and processes your payment details directly. We receive only your email address and confirmation of purchase.",
                },
                {
                  name: "Resend",
                  desc: "Our transactional email provider. We use it to send purchase confirmations and access links to your email address.",
                },
                {
                  name: "Vercel",
                  desc: "Our website hosting provider. Vercel may collect standard server logs including IP addresses. We also use Vercel Analytics to understand site usage in aggregate, without building individual user profiles.",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="rounded-[20px] border border-paper/10 bg-ink-900 p-6"
                >
                  <p className="mb-2 font-display text-xl font-semibold text-paper">
                    {item.name}
                  </p>
                  <p className="text-lg leading-relaxed text-paper">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold tracking-[-0.02em] text-paper sm:text-3xl">
              Your Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-none space-y-3">
              {[
                "Unsubscribe from our emails at any time using the unsubscribe link in any email we send",
                "Request access to the personal data we hold about you",
                "Request deletion of your personal data from our systems",
              ].map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ember" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:envowlsupport@gmail.com"
                className="font-medium text-paper underline decoration-ember decoration-2 underline-offset-4 hover:text-ember"
              >
                envowlsupport@gmail.com
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold tracking-[-0.02em] text-paper sm:text-3xl">
              Data Retention
            </h2>
            <p>
              We retain your email address and signup information for as long as
              you are subscribed to our communications. If you unsubscribe or
              request deletion, we will remove your data from our active systems
              within 30 days. Purchase records are kept so you can recover
              access to what you bought, unless you ask us to delete them.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold tracking-[-0.02em] text-paper sm:text-3xl">
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
            <h2 className="mb-4 font-display text-2xl font-bold tracking-[-0.02em] text-paper sm:text-3xl">
              Children&apos;s Privacy
            </h2>
            <p>
              Envowl is not directed at children under the age of 13. We do
              not knowingly collect personal information from children. If you
              believe a child has provided us with personal information, please
              contact us and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold tracking-[-0.02em] text-paper sm:text-3xl">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy as Envowl grows and evolves. We
              will notify waitlist subscribers of any material changes via email.
              Continued use of our website after changes constitutes acceptance of
              the updated policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold tracking-[-0.02em] text-paper sm:text-3xl">
              Contact
            </h2>
            <p>
              For any privacy-related questions or requests, contact LDS Ventures
              LLC at{" "}
              <a
                href="mailto:envowlsupport@gmail.com"
                className="font-medium text-paper underline decoration-ember decoration-2 underline-offset-4 hover:text-ember"
              >
                envowlsupport@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
