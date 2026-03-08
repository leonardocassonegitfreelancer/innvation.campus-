import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEOHead from "@/components/SEOHead";
import { getBlogPost, blogPosts } from "@/data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  // Simple markdown-like rendering for headings, lists, paragraphs
  const renderContent = (content: string) => {
    return content
      .trim()
      .split("\n")
      .map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return null;
        if (trimmed.startsWith("## "))
          return (
            <h2
              key={i}
              className="font-display text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4"
            >
              {trimmed.slice(3)}
            </h2>
          );
        if (trimmed.startsWith("- **"))
          return (
            <li key={i} className="font-body text-muted-foreground leading-relaxed ml-4 mb-2">
              <span
                dangerouslySetInnerHTML={{
                  __html: trimmed
                    .slice(2)
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>'),
                }}
              />
            </li>
          );
        if (trimmed.startsWith("- "))
          return (
            <li key={i} className="font-body text-muted-foreground leading-relaxed ml-4 mb-2">
              {trimmed.slice(2)}
            </li>
          );
        return (
          <p key={i} className="font-body text-muted-foreground leading-relaxed mb-4">
            {trimmed}
          </p>
        );
      });
  };

  // Suggest related posts
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main className="overflow-x-hidden">
      <SEOHead
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { "@type": "Organization", name: post.author },
        }}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-neutral-dark pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-body mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <span className="text-xs font-body font-semibold uppercase tracking-widest text-primary">
            {post.category}
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mt-2">
            {post.title}
          </h1>
          <div className="flex items-center gap-5 mt-5 text-sm text-primary-foreground/50 font-body">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <article>{renderContent(post.content)}</article>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16 bg-muted">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              More from the Blog
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="group block border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-card p-6"
                >
                  <span className="text-xs font-body font-semibold uppercase tracking-widest text-primary">
                    {r.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                    {r.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mt-2 line-clamp-2">
                    {r.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
