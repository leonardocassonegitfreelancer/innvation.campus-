import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  image: string;
  children?: React.ReactNode;
}

const getSrc = (img: any): string => typeof img === 'string' ? img : img.src;

export default function ServicePageLayout({ title, subtitle, image, children }: ServicePageLayoutProps) {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <img src={getSrc(image)} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/40 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-body mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">{title}</h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/70 mt-3 max-w-2xl">{subtitle}</p>
        </div>
      </section>

      {/* Content */}
      {children || (
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-muted-foreground font-body text-lg mb-8">
              More details coming soon. Contact us to learn more about this service.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/#contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
