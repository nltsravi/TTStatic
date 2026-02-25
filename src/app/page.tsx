import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { Trainers } from "@/components/Trainers";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Hero />
      <Categories />
      <Trainers />
    </main>
  );
}
