import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { articles } from "../data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} – Blog GarageOS`,
    description: article.excerpt,
  };
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-slate-900 mt-10 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-lg font-bold text-slate-900 mt-6 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={key++} className="border-l-4 border-orange-400 pl-4 py-1 my-5 bg-orange-50 rounded-r-xl">
          <p className="text-slate-700 italic text-sm leading-relaxed">
            {line.replace("> ", "")}
          </p>
        </blockquote>
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      let j = i;
      while (j < lines.length && lines[j].startsWith("- ")) {
        items.push(lines[j].replace("- ", ""));
        j++;
      }
      elements.push(
        <ul key={key++} className="space-y-2 my-4 ml-4">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
              <span className="text-orange-500 mt-1 flex-shrink-0">•</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
            </li>
          ))}
        </ul>
      );
      i = j - 1;
    } else if (line.startsWith("- [ ] ") || line.startsWith("- [x] ")) {
      const items: { done: boolean; text: string }[] = [];
      let j = i;
      while (j < lines.length && (lines[j].startsWith("- [ ] ") || lines[j].startsWith("- [x] "))) {
        items.push({ done: lines[j].startsWith("- [x]"), text: lines[j].replace(/^- \[.\] /, "") });
        j++;
      }
      elements.push(
        <ul key={key++} className="space-y-2 my-4 ml-4">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
              <span className={`mt-0.5 flex-shrink-0 w-4 h-4 border rounded flex items-center justify-center text-xs ${item.done ? "bg-green-500 border-green-500 text-white" : "border-slate-300"}`}>
                {item.done ? "✓" : ""}
              </span>
              {item.text}
            </li>
          ))}
        </ul>
      );
      i = j - 1;
    } else if (line.startsWith("---")) {
      elements.push(<hr key={key++} className="my-8 border-slate-200" />);
    } else if (line.trim() !== "") {
      elements.push(
        <p key={key++} className="text-slate-600 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{
            __html: line
              .replace(/\*\*(.*?)\*\*/g, "<strong class='text-slate-900'>$1</strong>")
              .replace(/\*(.*?)\*/g, "<em>$1</em>")
          }}
        />
      );
    }
  }
  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const prev = articles[currentIndex - 1];
  const next = articles[currentIndex + 1];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
                {article.category}
              </span>
              <span className="text-slate-400 text-xs flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime} de lecture
              </span>
              <span className="text-slate-400 text-xs flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-slate-500 leading-relaxed mb-8">
              {article.excerpt}
            </p>

            <div className="flex items-center gap-3 pb-8 border-b border-slate-200">
              <div className="w-11 h-11 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                {article.author.initials}
              </div>
              <div>
                <div className="font-semibold text-slate-900">{article.author.name}</div>
                <div className="text-sm text-slate-500">{article.author.role}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <article className="prose-custom">
              {renderContent(article.content)}
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-slate-900 mx-4 sm:mx-6 lg:mx-auto max-w-3xl rounded-3xl mb-16">
          <div className="text-center px-8">
            <h2 className="text-2xl font-bold text-white mb-3">
              Prêt à automatiser votre garage ?
            </h2>
            <p className="text-slate-400 mb-6">
              Rejoignez 150+ garages moto qui utilisent GarageOS au quotidien.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Demander une démo gratuite
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Prev / Next */}
        {(prev || next) && (
          <section className="pb-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-2 gap-4">
                {prev ? (
                  <Link href={`/blog/${prev.slug}`} className="group border border-slate-200 rounded-2xl p-5 hover:border-orange-200 hover:shadow-md transition-all">
                    <div className="text-xs text-slate-400 mb-2 flex items-center gap-1">
                      <ArrowLeft className="w-3 h-3" />
                      Article précédent
                    </div>
                    <div className="text-sm font-semibold text-slate-900 group-hover:text-orange-500 transition-colors leading-snug">
                      {prev.title}
                    </div>
                  </Link>
                ) : <div />}
                {next && (
                  <Link href={`/blog/${next.slug}`} className="group border border-slate-200 rounded-2xl p-5 hover:border-orange-200 hover:shadow-md transition-all text-right">
                    <div className="text-xs text-slate-400 mb-2 flex items-center gap-1 justify-end">
                      Article suivant
                      <ArrowRight className="w-3 h-3" />
                    </div>
                    <div className="text-sm font-semibold text-slate-900 group-hover:text-orange-500 transition-colors leading-snug">
                      {next.title}
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
