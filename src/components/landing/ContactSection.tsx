import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";

export default function ContactSection() {
  const [location, setLocation] = useState<"historic" | "seaside" | "both">("both");
  const [service, setService] = useState<string>("");
  const [hearAbout, setHearAbout] = useState<string>("");
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();

  const serviceOptions = t("contact.form.serviceOptions", { returnObjects: true }) as string[];
  const hearAboutOptions = t("contact.form.hearAboutOptions", { returnObjects: true }) as string[];

  const bgStyle = "bg-neutral-dark";
  const textColor = "text-white";
  const mutedColor = "text-white/60";
  const inputClass = "mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-primary";

  const locationOptions = [
    { value: "historic", label: t("contact.form.locationHistoric") },
    { value: "seaside", label: t("contact.form.locationSeaside") },
    { value: "both", label: t("contact.form.locationBoth") },
  ] as const;

  return (
    <section id="contact" className={`relative py-24 md:py-36 transition-all duration-1000 ${bgStyle} overflow-hidden`}>
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }} />
      <div className="relative max-w-2xl mx-auto px-6">
        <div ref={ref} className={`scroll-animate ${isVisible ? "visible" : ""}`}>
          <div className="text-center mb-12">
            <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">
              {t("contact.label")}
            </p>
            <h2 className={`font-display text-3xl md:text-5xl font-bold ${textColor}`}>
              {t("contact.title")}
            </h2>
            <p className={`font-body mt-4 ${mutedColor}`}>
              {t("contact.description")}
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!service) {
                alert(t("contact.form.selectService"));
                return;
              }
              alert(t("contact.form.thankYou"));
            }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label className={`font-body text-sm ${mutedColor}`}>{t("contact.form.name")}</Label>
                <Input
                  required
                  placeholder={t("contact.form.namePlaceholder")}
                  className={inputClass}
                />
              </div>
              <div>
                <Label className={`font-body text-sm ${mutedColor}`}>{t("contact.form.email")}</Label>
                <Input
                  type="email"
                  required
                  placeholder={t("contact.form.emailPlaceholder")}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label className={`font-body text-sm ${mutedColor}`}>{t("contact.form.company")}</Label>
                <Input
                  required
                  placeholder={t("contact.form.companyPlaceholder")}
                  className={inputClass}
                />
              </div>
              <div>
                <Label className={`font-body text-sm ${mutedColor}`}>{t("contact.form.phone")}</Label>
                <Input
                  type="tel"
                  required
                  placeholder={t("contact.form.phonePlaceholder")}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <Label className={`font-body text-sm ${mutedColor}`}>
                {t("contact.form.location")}
              </Label>
              <div className="flex flex-wrap gap-3 mt-2">
                {locationOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setLocation(opt.value)}
                    className={`font-body text-sm px-4 py-2 rounded-full border transition-all duration-500 ${
                      location === opt.value
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-transparent border-white/20 text-white/60 hover:border-primary/50"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label className={`font-body text-sm ${mutedColor}`}>
                {t("contact.form.service")}
              </Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className={`mt-1 bg-white/10 border-white/20 text-white focus:border-primary ${!service ? "text-white/30" : ""}`}>
                  <SelectValue placeholder={t("contact.form.servicePlaceholder")} />
                </SelectTrigger>
                <SelectContent className="bg-neutral-dark border-white/20 text-white">
                  {serviceOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className={`font-body text-sm ${mutedColor}`}>
                {t("contact.form.hearAbout")}
              </Label>
              <Select value={hearAbout} onValueChange={setHearAbout}>
                <SelectTrigger className={`mt-1 bg-white/10 border-white/20 text-white focus:border-primary ${!hearAbout ? "text-white/30" : ""}`}>
                  <SelectValue placeholder={t("contact.form.hearAboutPlaceholder")} />
                </SelectTrigger>
                <SelectContent className="bg-neutral-dark border-white/20 text-white">
                  {hearAboutOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className={`font-body text-sm ${mutedColor}`}>{t("contact.form.message")}</Label>
              <Textarea
                placeholder={t("contact.form.messagePlaceholder")}
                rows={4}
                className={inputClass}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body uppercase tracking-widest gap-2"
              size="lg"
            >
              <Send className="w-4 h-4" />
              {t("contact.form.submit")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
