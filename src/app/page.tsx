
import { Clients } from "@/Components/Clients";
import Contact from "@/Components/Contact/Contact";
import { CounterData } from "@/Components/CounterData";

import { Footer } from "@/Components/Footer";
import { HeaderMain } from "@/Components/HeaderMain";
import { HistoryCres } from "@/Components/HistoryCres";
import { Services } from "@/Components/Services";

import { SliderMain } from "@/Components/SliderMain";
import { Solution } from "@/Components/Solution";
import { UsMain } from "@/Components/usMain";


export default function Home() {
  return (
    <div className="">
      <HeaderMain/>
      <SliderMain/>
      <UsMain/>
      <Services/>
      <Solution/>
      
      <CounterData/>
      <HistoryCres/>
      <Clients/>
      <Contact/>
      <Footer/>
    </div>
  );
}
