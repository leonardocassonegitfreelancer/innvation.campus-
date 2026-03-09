import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";

export default function PrivacyPolicy() {
  return (
    <main className="overflow-x-hidden">
      <SEOHead title="Privacy Policy" description="Privacy Policy of Innovation Campus." path="/privacy" />
      <Navbar />
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <p className="font-body text-sm text-muted-foreground mb-6">Last updated: March 9, 2026</p>

          <div className="prose prose-neutral max-w-none font-body text-foreground/80 space-y-6">
            <h2 className="font-display text-2xl font-semibold text-foreground">1. Introduction</h2>
            <p>Innovation Campus ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal data when you visit our website and use our services.</p>

            <h2 className="font-display text-2xl font-semibold text-foreground">2. Data Controller</h2>
            <p>The data controller is Innovation Campus, with locations in Málaga (Spain), Olbia and Ancona (Italy). For any privacy-related inquiries, please contact us at <a href="mailto:privacy@innovationcampus.biz" className="text-primary underline">privacy@innovationcampus.biz</a>.</p>

            <h2 className="font-display text-2xl font-semibold text-foreground">3. Data We Collect</h2>
            <p>We may collect the following categories of personal data:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Contact information (name, email, phone number, company name)</li>
              <li>Usage data (pages visited, time spent, browser type)</li>
              <li>Cookie and tracking data (see our Cookie Policy below)</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground">4. Cookies</h2>
            <p>We use three types of cookies:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Technical cookies:</strong> Essential for the website to function properly.</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our site.</li>
              <li><strong>Marketing cookies:</strong> Used to deliver personalized content and advertisements.</li>
            </ul>
            <p>You can manage your cookie preferences at any time through our cookie banner.</p>

            <h2 className="font-display text-2xl font-semibold text-foreground">5. How We Use Your Data</h2>
            <p>We use your personal data to provide and improve our services, respond to inquiries, send relevant communications (with your consent), and comply with legal obligations.</p>

            <h2 className="font-display text-2xl font-semibold text-foreground">6. Your Rights</h2>
            <p>Under GDPR and applicable data protection laws, you have the right to access, rectify, delete, restrict processing, and port your personal data. To exercise these rights, contact us at the email above.</p>

            <h2 className="font-display text-2xl font-semibold text-foreground">7. Data Retention</h2>
            <p>We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by law.</p>

            <h2 className="font-display text-2xl font-semibold text-foreground">8. Contact</h2>
            <p>For questions about this Privacy Policy, please email <a href="mailto:privacy@innovationcampus.biz" className="text-primary underline">privacy@innovationcampus.biz</a>.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
