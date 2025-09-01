import AdvertorialBanner from "@/secciones/AdvertorialBanner";
import Header from "@/secciones/Header";
import ProblemHook from "@/secciones/ProblemHook";
import TheRealProblem from "@/secciones/TheRealProblem";
//import ContadorRoi from "@/secciones/ContadorRoi";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AdvertorialBanner />
      <Header />
      <ProblemHook />
      <TheRealProblem />
      <main className="flex-1"></main>
    </div>
  );
}
