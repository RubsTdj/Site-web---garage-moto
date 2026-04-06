"use client";

export default function NewsletterForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex gap-3">
      <input
        type="email"
        placeholder="votre@garage.fr"
        className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
      />
      <button
        type="submit"
        className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-colors whitespace-nowrap"
      >
        S&apos;abonner
      </button>
    </form>
  );
}
