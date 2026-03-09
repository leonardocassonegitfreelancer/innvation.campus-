import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

interface PlanCard {
  name: string;
  price: string;
  period: string;
  features: string[];
  bestSeller?: boolean;
  url: string;
}

const monthlyPlans: PlanCard[] = [
{
  name: "UNLIMITED",
  price: "€179",
  period: "/month + VAT",
  url: "https://members.innovationcampus.biz/signup?plan=UNL",
  features: [
  "24/7 Access",
  "Fixed Desk",
  "Personal Locker",
  "Meeting Rooms 4h/mo",
  "200 prints",
  "Discounts in shops and services",
  "Events and Community"]
},
{
  name: "FLEXI 12",
  price: "€139",
  period: "/month + VAT",
  url: "https://members.innovationcampus.biz/signup?plan=FL12",
  features: [
  "Access 12 days/month",
  "Monday to Friday, 7am–11pm",
  "Flex Desk",
  "Meeting Rooms 2h/mo",
  "150 prints",
  "Discounts in shops and services",
  "Events and Community"]
},
{
  name: "FLEXI 7",
  price: "€90",
  period: "/month + VAT",
  bestSeller: true,
  url: "https://members.innovationcampus.biz/signup?plan=FL7",
  features: [
  "Access 7 days/month",
  "Monday to Friday, 7am–11pm",
  "Flex Desk",
  "Meeting Rooms 1h/mo",
  "50 prints",
  "Discounts in shops and services",
  "Events and Community"]
}];


const shortStayPlans: PlanCard[] = [
{
  name: "TWO WEEKS",
  price: "€139",
  period: "+ VAT",
  url: "https://members.innovationcampus.biz/signup?plan=FL12",
  features: [
  "Two weeks in a row",
  "7am–11pm",
  "Flex Desk",
  "Meeting Rooms 2h",
  "100 prints",
  "Discounts in shops and services",
  "Events and Community"]
},
{
  name: "ONE WEEK",
  price: "€90",
  period: "+ VAT",
  url: "https://members.innovationcampus.biz/signup?plan=FL12",
  features: [
  "One week in a row",
  "7am–11pm",
  "Flex Desk",
  "Meeting Rooms 1h",
  "50 prints",
  "Discounts in shops and services",
  "Events and Community"]
},
{
  name: "DAY PASS",
  price: "€24",
  period: "+ VAT",
  url: "https://members.innovationcampus.biz/signup?plan=FL12",
  features: [
  "Monday to Friday, 9:30–18:30",
  "Flex Desk",
  "Monitor included",
  "10 prints"]
}];

const extras = [
"Half-day pass (4h): €14 + VAT",
"Locker (when not included): €9/month",
"Extra prints: €0.05 each",
"Screen rental: only in addition to a membership"];


function PricingCard({ plan }: {plan: PlanCard;}) {
  return (
    <div
      className={`relative rounded-xl border p-6 flex flex-col transition-shadow hover:shadow-lg ${
      plan.bestSeller ?
      "border-primary ring-2 ring-primary/20 bg-card" :
      "border-border bg-card"}`
      }>
      
      {plan.bestSeller &&
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-body font-semibold uppercase tracking-wider px-4 py-1 rounded-full">
            <Star className="w-3 h-3" /> Best Seller
          </span>
        </div>
      }

      <h3 className="font-display text-lg font-bold text-foreground uppercase tracking-wider text-center mt-1">
        {plan.name}
      </h3>

      <div className="text-center my-4">
        <span className="font-display text-4xl font-bold text-primary">{plan.price}</span>
        <span className="font-body text-sm text-muted-foreground">{plan.period}</span>
      </div>

      <ul className="space-y-2.5 flex-1 mb-6">
        {plan.features.map((f) =>
        <li key={f} className="flex items-start gap-2 font-body text-sm text-foreground/80">
            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span>{f}</span>
          </li>
        )}
      </ul>

      <Button
        asChild
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm uppercase tracking-widest">
        
        <a

          target="_blank"
          rel="noopener noreferrer" href="https://members.innovationcampus.biz/signup?plan=FL12">
          
          Book Now
        </a>
      </Button>
    </div>);

}

export default function CoworkingPricing() {
  const [tab, setTab] = useState<"monthly" | "short">("monthly");

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold text-center">
          Pricing
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-12">
          Plans & Memberships
        </h2>

        {/* Tabs */}
        <div className="flex gap-3 mb-12 justify-center">
          <button
            onClick={() => setTab("monthly")}
            className={`py-3 px-6 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${
            tab === "monthly" ?
            "bg-primary text-primary-foreground" :
            "border border-primary text-primary bg-transparent"}`
            }>
            
            Monthly Memberships
          </button>
          <button
            onClick={() => setTab("short")}
            className={`py-3 px-6 rounded-md font-body text-sm font-semibold uppercase tracking-wider transition-colors ${
            tab === "short" ?
            "bg-primary text-primary-foreground" :
            "border border-primary text-primary bg-transparent"}`
            }>
            
            Short Stays
          </button>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" key={tab}>
          {(tab === "monthly" ? monthlyPlans : shortStayPlans).map((plan) =>
          <PricingCard key={plan.name} plan={plan} />
          )}
        </div>

        {/* Extras */}
        <div className="mt-10 text-center">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-semibold">
            Extras
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            {extras.map((e) =>
            <span key={e} className="font-body text-sm text-muted-foreground">
                {e}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>);

}