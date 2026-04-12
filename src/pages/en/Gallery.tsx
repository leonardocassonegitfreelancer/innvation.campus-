import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";
import palaceCourtyard from "@/assets/palace-courtyard.jpg";
import serviceCommunity from "@/assets/service-community.jpg";

export default function GalleryEN() {
  return (
    <>
      <SEOHead
        title="Gallery — Innovation Campus"
        description="Browse photos of our spaces and community events across Málaga, Ancona and Olbia."
        path="/en/gallery"
      />
      <main className="overflow-x-hidden">
        <Navbar />

        {/* Hero */}
        <section className="relative h-[50vh] min-h-[360px] flex items-end">
          <img src={palaceCourtyard} alt="Innovation Campus" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/40 to-transparent" />
          <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">Gallery</h1>
            <p className="font-body text-lg text-primary-foreground/70 mt-3">Our spaces and community moments.</p>
          </div>
        </section>

        {/* Two cards */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="/en/gallery/spaces" className="group block overflow-hidden rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img src={palaceCourtyard} alt="Spaces" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="font-display text-2xl font-bold text-primary-foreground mb-1">Spaces</h2>
                  <p className="font-body text-sm text-primary-foreground/70">Coworking, meeting rooms & venues</p>
                </div>
              </div>
              <div className="px-6 py-4 bg-card">
                <span className="font-body font-bold text-sm uppercase tracking-widest text-primary">Browse spaces →</span>
              </div>
            </a>

            <a href="/en/gallery/events" className="group block overflow-hidden rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img src={serviceCommunity} alt="Events" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="font-display text-2xl font-bold text-primary-foreground mb-1">Events</h2>
                  <p className="font-body text-sm text-primary-foreground/70">Networking, workshops & talks</p>
                </div>
              </div>
              <div className="px-6 py-4 bg-card">
                <span className="font-body font-bold text-sm uppercase tracking-widest text-primary">Browse events →</span>
              </div>
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
