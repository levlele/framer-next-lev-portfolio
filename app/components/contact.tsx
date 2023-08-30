"use client";

import Section from "./section";

export default function Contact() {
  return (
    <Section id="contact" bgColor="bg-green-500">
      <div className="grid h-full place-content-center">
        <h2>CONTACT</h2>
        <button onClick={() => window.scrollTo({ top: 0 })}>
          SCROLL TO TOP
        </button>
      </div>
    </Section>
  );
}
