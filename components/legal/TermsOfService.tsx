export function TermsOfService() {
  return (
    <div className="relative isolate -mt-16 overflow-hidden md:-mt-[4.5rem]">
      <div className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6 md:px-8 md:pb-32 md:pt-44">
        <div className="mb-16 border-b border-paper/10 pb-12 sm:mb-20">
          <p className="mb-4 text-sm font-semibold text-ember">
            Legal
          </p>
          <h1 className="mb-5 font-display text-5xl font-bold leading-[0.98] tracking-[-0.035em] text-paper sm:text-6xl lg:text-7xl">
            Terms of Service
          </h1>
          <p className="text-base text-paper/50">
            Last updated: October 1, 2026
          </p>
        </div>

        <div className="space-y-14 text-base leading-[1.8] text-paper/70 sm:text-lg">
          <section>
            <h2 className="mb-4 font-display text-2xl font-bold tracking-[-0.02em] text-paper sm:text-3xl">
              Agreement
            </h2>
            <p>
              By accessing or using the Envowl website and services
              (&quot;Service&quot;), operated by LDS Ventures LLC, you agree to
              be bound by these Terms of Service. If you do not agree to these
              terms, please do not use our Service. These terms apply to all
              visitors, waitlist subscribers, and any other users of the
              Service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold tracking-[-0.02em] text-paper sm:text-3xl">
              Description of Service
            </h2>
            <p>
              Envowl is currently operating as a pre-launch waitlist and
              resource platform. We collect email addresses from individuals
              interested in our upcoming AI talent marketplace, publish free
              educational content about artificial intelligence for businesses
              and professionals, and sell a small number of paid digital
              resource packs. The full marketplace platform is under
              development and has not yet launched.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold tracking-[-0.02em] text-paper sm:text-3xl">
              Purchases
            </h2>
            <p className="mb-4">
              If you buy a paid resource pack from the Envowl shop:
            </p>
            <ul className="list-none space-y-3">
              {[
                "Payment is processed securely by Stripe, and prices are shown at checkout",
                "Packs are digital products delivered by an access link sent to the email address you provide at checkout",
                "You are granted a personal, non-transferable license to use the pack. You may not resell, redistribute, or share it publicly",
                "All sales are final. Because packs are digital and delivered immediately, we do not offer refunds. If you have trouble with your access link, contact us at the email below and we will fix it",
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
              Waitlist & Communications
            </h2>
            <p className="mb-4">
              By joining the Envowl waitlist you agree that:
            </p>
            <ul className="list-none space-y-3">
              {[
                "You are providing your email address voluntarily to receive updates about Envowl",
                "We may send you periodic emails about our launch, platform updates, and AI resources",
                "You can unsubscribe at any time using the link provided in any email",
                "Joining the waitlist does not guarantee access to the platform, any specific pricing, or any specific features",
                "Launch timing is a target, not a commitment. We may change, delay, or cancel the marketplace launch at our discretion",
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
              Acceptable Use
            </h2>
            <p className="mb-4">
              You agree not to use the Envowl website or services to:
            </p>
            <ul className="list-none space-y-3">
              {[
                "Violate any applicable laws or regulations",
                "Submit false or misleading information",
                "Attempt to gain unauthorized access to any part of our systems",
                "Transmit any harmful, offensive, or disruptive content",
                "Scrape, harvest, or collect data from our website without permission",
                "Impersonate Envowl, LDS Ventures LLC, or any of our team members",
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
              Intellectual Property
            </h2>
            <p>
              All content on the Envowl website — including text, design,
              logos, graphics, and resource articles — is the property of LDS
              Ventures LLC and is protected by applicable intellectual property
              laws. You may not reproduce, distribute, or create derivative
              works from our content without explicit written permission.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold tracking-[-0.02em] text-paper sm:text-3xl">
              Third Party Content & Links
            </h2>
            <p>
              Our resource library may link to or reference third party websites,
              articles, and videos. These are provided for informational
              purposes only. Envowl does not endorse, control, or take
              responsibility for the content, privacy practices, or accuracy of
              any third party sites. Accessing third party links is at your own
              risk.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold tracking-[-0.02em] text-paper sm:text-3xl">
              Disclaimer of Warranties
            </h2>
            <p>
              The Envowl website and all content are provided &quot;as
              is&quot; without warranty of any kind, express or implied. We do
              not warrant that the Service will be uninterrupted, error-free, or
              free of harmful components. The educational content we publish is
              for informational purposes only and does not constitute
              professional business, legal, or financial advice.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold tracking-[-0.02em] text-paper sm:text-3xl">
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, LDS Ventures LLC shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of or inability to use the
              Envowl website or services. Our total liability to you for any
              claims arising from these terms shall not exceed the amount you
              paid us in the twelve months preceding the claim (zero, if you
              have made no purchases).
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold tracking-[-0.02em] text-paper sm:text-3xl">
              Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in
              accordance with the laws of the United States and the State of New
              Jersey, without regard to conflict of law provisions. Any disputes
              arising from these terms shall be resolved in the courts of New
              Jersey.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold tracking-[-0.02em] text-paper sm:text-3xl">
              Changes to These Terms
            </h2>
            <p>
              We reserve the right to modify these Terms of Service at any time.
              When we make material changes, we will update the date at the top
              of this page and notify waitlist subscribers via email where
              appropriate. Your continued use of the Service after any changes
              constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-bold tracking-[-0.02em] text-paper sm:text-3xl">
              Contact
            </h2>
            <p>
              For any questions regarding these Terms of Service, contact LDS
              Ventures LLC at{" "}
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
