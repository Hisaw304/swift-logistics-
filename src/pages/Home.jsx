import React from "react";
import Hero from "../components/Hero";
import TrustedBanner from "../components/TrustedBanner";
import WhyChooseUs from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
const Home = () => {
  return (
    <>
      <Hero />
      <TrustedBanner />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </>
  );
};

export default Home;
