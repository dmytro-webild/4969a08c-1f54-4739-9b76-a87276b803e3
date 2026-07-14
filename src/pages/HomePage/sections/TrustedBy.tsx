export default function TrustedBySection() {
  return (
    <section data-webild-section="trusted-by" id="trusted-by" className="w-full py-12 bg-background border-b border-white/5">
      <div className="w-content-width mx-auto flex flex-col items-center justify-center gap-8">
        <p className="text-sm font-medium text-accent uppercase tracking-widest">Trusted by leading lenders and developers</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
          <img src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2000&auto=format&fit=crop" alt="Trusted Partner" className="h-8 md:h-10 w-auto object-contain rounded-md" />
          <img src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2000&auto=format&fit=crop" alt="Trusted Partner" className="h-8 md:h-10 w-auto object-contain rounded-md" />
          <img src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=2000&auto=format&fit=crop" alt="Trusted Partner" className="h-8 md:h-10 w-auto object-contain rounded-md" />
          <img src="https://images.unsplash.com/photo-1614850715649-1d0106293cb1?q=80&w=2000&auto=format&fit=crop" alt="Trusted Partner" className="h-8 md:h-10 w-auto object-contain rounded-md" />
        </div>
      </div>
    </section>
  );
}