import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";

export default function LegalNotice() {
  return (
    <main className="overflow-x-hidden">
      <SEOHead title="Legal Notice" description="Legal Notice of Innovation Campus." path="/legal-notice" />
      <Navbar />
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">Legal Notice</h1>
          <p className="font-body text-sm text-muted-foreground mb-6">Last updated: March 9, 2026</p>

          <div className="prose prose-neutral max-w-none font-body text-foreground/80 space-y-6">
            <h2 className="font-display text-2xl font-semibold text-foreground">1. Website Owner</h2>
            <p>This website is owned and operated by Innovation Campus.<br />
            Registered offices: Málaga (Spain), Olbia (Italy), Ancona (Italy).<br />
            Email: <a href="mailto:info@innovationcampus.biz" className="text-primary underline">info@innovationcampus.biz</a></p>

            <h2 className="font-display text-2xl font-semibold text-foreground">2. Company Information</h2>
            <p>Company Name: Innovation Campus S.L.<br />
            Tax ID: [To be provided]<br />
            Registered Address: [To be provided]<br />
            Commercial Registry: [To be provided]</p>

            <h2 className="font-display text-2xl font-semibold text-foreground">3. Intellectual Property</h2>
            <p>All content on this website — including text, images, logos, graphics, videos, and software — is the property of Innovation Campus or its licensors and is protected by applicable intellectual property laws. Reproduction, distribution, or modification without prior written consent is prohibited.</p>

            <h2 className="font-display text-2xl font-semibold text-foreground">4. Limitation of Liability</h2>
            <p>Innovation Campus makes every effort to ensure the accuracy of the information on this website. However, we cannot guarantee that all content is complete, accurate, or up-to-date. We shall not be liable for any damages arising from the use of this website.</p>

            <h2 className="font-display text-2xl font-semibold text-foreground">5. External Links</h2>
            <p>This website may contain links to third-party websites. We have no control over the content of these sites and accept no responsibility for them.</p>

            <h2 className="font-display text-2xl font-semibold text-foreground">6. Governing Law</h2>
            <p>This legal notice is governed by the laws of Spain and the European Union. Any disputes shall be subject to the jurisdiction of the courts of Málaga, Spain.</p>

            <h2 className="font-display text-2xl font-semibold text-foreground">7. Contact</h2>
            <p>For legal inquiries, please contact <a href="mailto:legal@innovationcampus.biz" className="text-primary underline">legal@innovationcampus.biz</a>.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
