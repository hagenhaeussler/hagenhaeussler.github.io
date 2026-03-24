import { Card } from "@/components/ui/card";
import indonesia2019 from "@/assets/Indonesia_2019.jpg";
import hawaii2020 from "@/assets/Hawaii_2020.jpg";
import hawaii2021 from "@/assets/Hawaii_2021.jpg";
import egypt2023 from "@/assets/Egypt_2023.jpg";
import peru2023 from "@/assets/Peru_2023.jpg";
import austria2024 from "@/assets/Austria_2024.png";
import sanJose2026 from "@/assets/SanJose_2026.png";
import alphaCentauri2100 from "@/assets/AlphaCentauri_2100.jpg";

interface TravelItem {
  image: string;
  title: string;
  credit?: string;
}

export const Travels = () => {
  const travels: TravelItem[] = [
    {
      image: indonesia2019,
      title: "Indonesia, 2019",
    },
    {
      image: hawaii2020,
      title: "Hawaii, 2020",
    },
    {
      image: hawaii2021,
      title: "Hawaii, 2021",
    },
    {
      image: egypt2023,
      title: "Egypt, 2023",
    },
    {
      image: peru2023,
      title: "Peru, 2023",
    },
    {
      image: austria2024,
      title: "Austria, 2024",
    },
    {
      image: sanJose2026,
      title: "San Jose, 2026",
    },
    {
      image: alphaCentauri2100,
      title: "Alpha Centauri, 2103",
      credit:
        "Image credit: © ESO/DSS 2 (European Southern Observatory), via Wikipedia, licensed under CC BY 4.0.",
    },
  ];

  return (
    <section id="travels" className="px-6 py-20">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Travels <span className="text-accent">&</span> Adventures
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A chronological snapshot of places and moments along the way
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {travels.map((travel) => (
            <Card
              key={travel.title}
              className="overflow-hidden border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-elegant"
            >
              <img
                src={travel.image}
                alt={travel.title}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-4 space-y-2">
                <p className="text-lg font-semibold text-foreground">{travel.title}</p>
                {travel.credit && (
                  <p className="text-sm text-muted-foreground leading-relaxed">{travel.credit}</p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};