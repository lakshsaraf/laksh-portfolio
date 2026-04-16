export function Marquee() {
  const tags = [
    "Landing Page", "Branding", "Contact Page", "Pitch deck", "Mobile app", "Logo",
    "Landing Page", "Branding", "Contact Page", "Pitch deck", "Mobile app", "Logo"
  ];

  return (
    <div className="w-full overflow-hidden bg-white py-4 border-y border-white/10">
      <div className="flex whitespace-nowrap animate-marquee">
        {tags.map((tag, index) => (
          <div key={index} className="flex items-center mx-4">
            <span className="text-black font-display font-bold uppercase tracking-widest text-sm md:text-base">
              {tag}
            </span>
            <span className="mx-8 text-black/30 text-xl">•</span>
          </div>
        ))}
        {tags.map((tag, index) => (
          <div key={`dup-${index}`} className="flex items-center mx-4">
            <span className="text-black font-display font-bold uppercase tracking-widest text-sm md:text-base">
              {tag}
            </span>
            <span className="mx-8 text-black/30 text-xl">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
