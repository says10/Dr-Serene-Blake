'use client';
import Image from 'next/image';

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-20 bg-neutral">
      <div className="max-w-6xl mx-auto px-2 md:px-4">
        <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary text-center mb-8 md:mb-14">
          Areas of Focus
        </h2>
        <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-3">
          {/* Service 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 md:w-56 md:h-56 mb-6 md:mb-8">
              <Image
                src="/anxiety-stress.jpg"
                alt="Anxiety & Stress Management"
                width={224}
                height={224}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
            <h3 className="text-base md:text-xl font-serif font-semibold text-primary mb-2 md:mb-4">
              Anxiety & Stress Management
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              Learn practical tools to manage anxiety, reduce overwhelm, and build resilience. Dr. Blake uses evidence-based techniques like CBT and mindfulness to help you regain calm and confidence in daily life.
            </p>
          </div>
          {/* Service 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 md:w-56 md:h-56 mb-6 md:mb-8">
              <Image
                src="/relationship-counseling.jpg"
                alt="Relationship Counseling"
                width={224}
                height={224}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
            <h3 className="text-base md:text-xl font-serif font-semibold text-primary mb-2 md:mb-4">
              Relationship Counseling
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              Strengthen communication, rebuild trust, and deepen connection. Whether you&apos;re facing conflict or seeking to enrich your relationship, Dr. Blake offers a supportive space for couples and individuals.
            </p>
          </div>
          {/* Service 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 md:w-56 md:h-56 mb-6 md:mb-8">
              <Image
                src="/trauma-recovery.jpg"
                alt="Trauma Recovery"
                width={224}
                height={224}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
            <h3 className="text-base md:text-xl font-serif font-semibold text-primary mb-2 md:mb-4">
              Trauma Recovery
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              Heal from past trauma in a safe, compassionate environment. Dr. Blake integrates trauma-informed care to help you process experiences, restore a sense of safety, and move forward with hope.
            </p>
          </div>
        </div>
        <div className="text-center mt-8 md:mt-14 text-gray-700">
          <span className="font-semibold">Session Fees:</span> $200 / individual &nbsp;|&nbsp; $240 / couples
        </div>
      </div>
    </section>
  );
} 