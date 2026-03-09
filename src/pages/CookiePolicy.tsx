import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";

export default function CookiePolicy() {
  return (
    <main className="overflow-x-hidden">
      <SEOHead title="Cookie Policy" description="Cookie Policy of Innovation Campus." path="/cookie-policy" />
      <Navbar />
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">Cookie Policy</h1>
          <p className="font-body text-sm text-muted-foreground mb-6">Last updated: March 9, 2026</p>

          <div className="prose prose-neutral max-w-none font-body text-foreground/80 space-y-6">
            <h2 className="font-display text-2xl font-semibold text-foreground">1. What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and improve your browsing experience.</p>

            <h2 className="font-display text-2xl font-semibold text-foreground">2. Types of Cookies We Use</h2>

            <h3 className="font-display text-xl font-semibold text-foreground">Technical Cookies (Essential)</h3>
            <p>These cookies are strictly necessary for the website to function. They enable core features such as page navigation and access to secure areas. The website cannot function properly without them.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Session management</li>
              <li>Cookie consent preferences</li>
              <li>Language selection</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-foreground">Analytics Cookies</h3>
            <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the site's performance and user experience.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Pages visited and time spent</li>
              <li>Traffic sources and navigation paths</li>
              <li>Device and browser information</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-foreground">Marketing Cookies</h3>
            <p>These cookies are used to deliver advertisements and content relevant to your interests. They may also be used to limit the number of times you see an ad and measure the effectiveness of advertising campaigns.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Personalized content and ads</li>
              <li>Social media integration</li>
              <li>Retargeting across platforms</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground">3. Managing Your Preferences</h2>
            <p>You can manage your cookie preferences at any time through the cookie banner that appears on your first visit. You can also clear cookies through your browser settings.</p>

            <h2 className="font-display text-2xl font-semibold text-foreground">4. Third-Party Cookies</h2>
            <p>Some cookies may be set by third-party services that appear on our pages, such as analytics providers and social media platforms. We do not control these cookies. Please refer to the respective third-party privacy policies for more information.</p>

            <h2 className="font-display text-2xl font-semibold text-foreground">5. Updates to This Policy</h2>
            <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

            <h2 className="font-display text-2xl font-semibold text-foreground">6. Contact</h2>
            <p>For questions about our use of cookies, please email <a href="mailto:privacy@innovationcampus.biz" className="text-primary underline">privacy@innovationcampus.biz</a>.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
