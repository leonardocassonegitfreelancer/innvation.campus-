import { Helmet } from "react-helmet-async";
import { getAlternateLinks, generateBreadcrumbJsonLd } from "@/lib/i18n";

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  jsonLd?: object;
  ogImage?: string;
}

const BASE_URL = "https://malaga-duality-landing.lovable.app";
const DEFAULT_OG_IMAGE = "/og-image.jpg";

export default function SEOHead({ title, description, path = "/", jsonLd, ogImage }: SEOHeadProps) {
  const fullTitle = `Innovation Campus | ${title}`;
  const url = `${BASE_URL}${path}`;
  const alternates = getAlternateLinks(path);
  const breadcrumbJsonLd = path !== "/" && path !== "/es" && path !== "/it" 
    ? generateBreadcrumbJsonLd(path, BASE_URL) 
    : null;
  const image = `${BASE_URL}${ogImage || DEFAULT_OG_IMAGE}`;

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

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Innovation Campus" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
      {breadcrumbJsonLd && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      )}
    </Helmet>
  );
}
