import AdvertorialBanner from "@/components/AdvertorialBanner";
import Header from "@/components/Header";
import ProblemHook from "@/components/ProblemHook";
import TheRealProblem from "@/components/TheRealProblem";
//import ContadorRoi from "@/components/ContadorRoi";


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
