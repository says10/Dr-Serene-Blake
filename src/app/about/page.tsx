'use client';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-2 md:px-4">
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary mb-6 md:mb-8">
            About Dr. Serena Blake
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
            Finding time and opportunities to care for ourselves can be incredibly challenging in today&apos;s busy and demanding world. Dr. Serena Blake offers a dedicated space for self-care, providing the support and tools needed to improve this essential practice. Therapy can help individuals identify and clarify their goals, values, and the various elements that contribute to their well-being, recognizing that these aspects vary from person to person.
          </p>
          <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
            Dr. Blake is dedicated to supporting this journey by offering active listening, psychological knowledge, empathy, compassion, and insights into behavioral patterns and tendencies. She holds a doctorate in Clinical Psychology (PsyD) and has eight years of experience with over 500 client sessions, spanning therapy and psychological assessment in both in-person and virtual settings.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Her therapeutic approach blends cognitive-behavioral therapy, mindfulness, and trauma-informed care, enriched by a commitment to creating a safe, supportive space for every client.
          </p>
          <div className="mt-4 md:mt-6 mb-4">
            <div className="text-base md:text-lg text-primary font-serif mb-2">Experience & Office Hours</div>
            <ul className="text-gray-700 text-sm md:text-base list-disc list-inside space-y-1">
              <li>
                <span className="font-semibold">Experience:</span> 8 years of practice, 500+ sessions
              </li>
              <li>
                <span className="font-semibold">Office Hours:</span>
                <ul className="ml-4 list-disc">
                  <li>In-person: Tue & Thu, 10 AM–6 PM</li>
                  <li>Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-shrink-0 w-full md:w-[340px] flex justify-center md:justify-end">
          <Image
            src="/serena-blake-headshot.jpg"
            alt="Dr. Serena Blake headshot"
            width={320}
            height={420}
            className="w-full md:w-[320px] h-auto md:h-[420px] object-cover rounded-2xl shadow-md"
            priority
          />
        </div>
      </div>
    </section>
  );
} 