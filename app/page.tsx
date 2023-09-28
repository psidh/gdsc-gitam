import Image from "next/image";
import Header from "./components/header";
import GDSCOpportunities from "./components/gdsc_opportunities";
import HowItWorks from "./components/how_it_works";
import JoinGDSC from "./components/join_gdsc";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <GDSCOpportunities />
      <HowItWorks />
      <JoinGDSC />
      <Footer />
    </main>
  );
}
