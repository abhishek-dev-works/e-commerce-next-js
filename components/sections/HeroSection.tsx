import React from 'react';
import Image from 'next/image';
function HeroSection() {
  return (
    <section
      className="w-full h-[calc(100vh-96px)]"
      // style={{ backgroundImage: "url('./Hero1.jpg')" }}
    >
      <Image
        src="/Hero.jpg"
        alt="Descriptive text for screen readers"
        width={500}
        height={300}
        layout="responsive"
      />
    </section>
  );
}

export default HeroSection;
