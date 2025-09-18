import Image from "next/image";
import Hero from "./components/Hero";
import Fileds from "./components/Fileds";
import Nytheris from "./components/Nytheris";

export default function Home() {
  return (
    <div className="page h-screen w-screen bg-amber-100">
          <Hero/>
         <Fileds/>
         <Nytheris/>
    </div>
  );
}
