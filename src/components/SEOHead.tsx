import { Helmet } from "react-helmet-async";
import { getAlternateLinks, generateBreadcrumbJsonLd } from "@/lib/i18n";

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  jsonLd?: object;
}

const BASE_URL = "https://malaga-duality-landing.lovable.app";

export default function SEOHead({ title, description, path = "/", jsonLd }: SEOHeadProps) {
  const fullTitle = `Innovation Campus | ${title}`;
  const url = `${BASE_URL}${path}`;
  const alternates = getAlternateLinks(path);
  const breadcrumbJsonLd = path !== "/" && path !== "/es" && path !== "/it" 
    ? generateBreadcrumbJsonLd(path, BASE_URL) 
    : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* hreflang tags for SEO */}
      <link rel="alternate" hrefLang="en" href={`${BASE_URL}${alternates.en}`} />
      <link rel="alternate" hrefLang="es" href={`${BASE_URL}${alternates.es}`} />
      <link rel="alternate" hrefLang="it" href={`${BASE_URL}${alternates.it}`} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${alternates.en}`} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
      {breadcrumbJsonLd && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      )}
    </Helmet>
  );
}
