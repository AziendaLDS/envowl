export function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] text-black">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-6 sm:py-24 md:px-8 md:py-40">
        <div className="mb-16 sm:mb-24 md:mb-28">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-black/55 sm:mb-5 sm:text-base">
            Legal
          </p>
          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-black sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl">
            Terms of Service
          </h1>
          <p className="text-base text-black/60 sm:text-lg">
            Last updated: April 13, 2026
          </p>
        </div>

        <div className="space-y-12 text-base leading-[1.8] text-black sm:space-y-20 sm:text-xl md:space-y-24 md:text-2xl md:leading-[1.85]">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-black sm:mb-6 sm:text-3xl md:text-4xl">
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
            <h2 className="mb-4 text-2xl font-semibold text-black sm:mb-6 sm:text-3xl md:text-4xl">
              Description of Service
            </h2>
            <p>
              Envowl is currently operating as a pre-launch waitlist and
              resource platform. We collect email addresses from individuals
              interested in our upcoming AI talent marketplace, and publish free
              educational content about artificial intelligence for businesses
              and professionals. The full marketplace platform is under
              development and has not yet launched.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-black sm:mb-6 sm:text-3xl md:text-4xl">
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
                "We reserve the right to modify, delay, or cancel the platform launch at our discretion",
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
                  <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-black" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-black sm:mb-6 sm:text-3xl md:text-4xl">
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
            <h2 className="mb-4 text-2xl font-semibold text-black sm:mb-6 sm:text-3xl md:text-4xl">
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
            <h2 className="mb-4 text-2xl font-semibold text-black sm:mb-6 sm:text-3xl md:text-4xl">
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
            <h2 className="mb-4 text-2xl font-semibold text-black sm:mb-6 sm:text-3xl md:text-4xl">
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, LDS Ventures LLC shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of or inability to use the
              Envowl website or services. Our total liability to you for any
              claims arising from these terms shall not exceed the amount you
              paid us in the twelve months preceding the claim, which at the
              current pre-launch stage is zero.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-black sm:mb-6 sm:text-3xl md:text-4xl">
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
            <h2 className="mb-4 text-2xl font-semibold text-black sm:mb-6 sm:text-3xl md:text-4xl">
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
            <h2 className="mb-4 text-2xl font-semibold text-black sm:mb-6 sm:text-3xl md:text-4xl">
              Contact
            </h2>
            <p>
              For any questions regarding these Terms of Service, contact LDS
              Ventures LLC at{" "}
              <a
                href="mailto:envowlsupport@gmail.com"
                className="font-medium text-black underline underline-offset-4"
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
