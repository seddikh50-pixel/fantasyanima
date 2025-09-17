import Image from "next/image";
import Hero from "./components/Hero";
import Fileds from "./components/Fileds";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-amber-100">
          <Hero/>
         <Fileds/>
    </div>
  );
}
