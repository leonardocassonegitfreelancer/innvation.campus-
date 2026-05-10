import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { getBlogPost, blogPosts } from "@/data/blogPosts";

interface Props {
  slug: string;
}

export default function BlogPostIsland({ slug }: Props) {
  const post = getBlogPost(slug);

  if (!post) {
    if (typeof window !== "undefined") window.location.replace("/blog");
    return null;
  }

  const renderContent = (content: string) =>
    content
      .trim()
      .split("\n")
      .map((line, i) => {
        const t = line.trim();
        if (!t) return null;
        if (t.startsWith("## "))
          return <h2 key={i} className="font-display text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">{t.slice(3)}</h2>;
        if (t.startsWith("- **"))
          return <li key={i} className="font-body text-muted-foreground leading-relaxed ml-4 mb-2" dangerouslySetInnerHTML={{ __html: t.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />;
        if (t.startsWith("- "))
          return <li key={i} className="font-body text-muted-foreground leading-relaxed ml-4 mb-2">{t.slice(2)}</li>;
        return <p key={i} className="font-body text-muted-foreground leading-relaxed mb-4">{t}</p>;
      });

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section className="bg-neutral-dark pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <a href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-body mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />Back to Blog
          </a>
          <span className="text-xs font-body font-semibold uppercase tracking-widest text-primary">{post.category}</span>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mt-2">{post.title}</h1>
          <div className="flex items-center gap-5 mt-5 text-sm text-primary-foreground/50 font-body">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <article>{renderContent(post.content)}</article>
        </div>
      </section>
      {related.length > 0 && (
        <section className="py-16 bg-muted">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">More from the Blog</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((r) => (
                <a key={r.slug} href={`/blog/${r.slug}`} className="group block border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-card p-6">
                  <span className="text-xs font-body font-semibold uppercase tracking-widest text-primary">{r.category}</span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-2 group-hover:text-primary transition-colors">{r.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mt-2 line-clamp-2">{r.excerpt}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
      <Footer />
    </main>
  );
}
