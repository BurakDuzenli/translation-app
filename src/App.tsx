import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SecondHero from "./components/SecondHero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Reviews from "./components/Review";
import Faq from "./components/Faq";
import Kickstart from "./components/Kickstart";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Hero />
        </div>
        <SecondHero />
        <Features />
        <Pricing />
        <Reviews />
        <Faq />
        <Kickstart />
        <Footer />
      </main>
    </div>
  );
}

export default App;
