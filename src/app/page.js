import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Waitlist from "@/components/Waitlist";
import Sneak from "@/components/Sneak";
import Community from "@/components/Community";
import Faq from "@/components/Faq";
import More from "@/components/More";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex-1">
      <Hero />
      <Why />
      <Sneak />
      <Community />
      <Waitlist/>
      <Faq />
      <More />
      <Footer />

    </div>
  );
}
