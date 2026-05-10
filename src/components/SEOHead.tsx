// SEO is handled by Astro Layout — this component is a no-op in the Astro build.
interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
  jsonLd?: object;
  ogImage?: string;
  noIndex?: boolean;
}

export default function SEOHead(_props: SEOHeadProps) {
  return null;
}
