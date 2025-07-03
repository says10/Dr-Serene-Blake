'use client';
export default function Hero() {
  return (
    <section className="w-full flex justify-center items-center bg-background my-4">
      <div className="relative w-full max-w-full mx-2 md:max-w-[1400px] md:mx-4 aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/hero-fallback.jpg"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          <source src="/hero-bg.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-2 py-8 md:px-4 md:py-16">
          <h1 className="text-2xl md:text-5xl font-serif font-bold text-white mb-2 md:mb-4 drop-shadow-lg">
            Psychological Care for<br />Change, Insight, and Well-Being
          </h1>
          <h2 className="text-base md:text-xl font-serif text-white mb-4 md:mb-6 drop-shadow">
            Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation
          </h2>
          <a href="/contact" className="inline-block w-full md:w-auto bg-amber-400 text-primary font-semibold rounded-full px-8 py-3 text-lg shadow hover:bg-primary hover:text-white transition-colors duration-200">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
} 