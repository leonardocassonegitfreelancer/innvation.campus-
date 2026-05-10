import { ArrowRight, Calendar, Clock, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export default function BlogES() {
  return (
    <main className="overflow-x-hidden">
      <section className="bg-neutral-dark pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <a href="/es" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-body mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver al Inicio
          </a>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">Blog</h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/60 mt-3 max-w-2xl">Ideas, perspectivas e historias de la comunidad Innovation Campus.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="group block border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-card">
                <div className="p-6 md:p-8">
                  <span className="text-xs font-body font-semibold uppercase tracking-widest text-primary">{post.category}</span>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mt-2 group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="font-body text-muted-foreground mt-3 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground font-body">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString("es-ES", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
