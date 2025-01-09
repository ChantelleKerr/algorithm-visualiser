import Card from "@/components/Card/Card";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
export default function Home() {
  const navLinks = [
    {
      title: "SORTING",
      image: "/pathfinder.webp",
      link: "/sorting",
      style: "bg-green border-green text-green",
    },
    {
      title: "PATHFINDER",
      image: "/pathfinder.webp",
      link: "/pathfinder",
      style: "bg-red border-red text-red",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-grow flex-col justify-center items-center">
        <h2 className="flex justify-center text-4xl text-primary bg-green mb-5 font-extrabold w-full py-4">
          ALGORITHMS
        </h2>
        <div className="flex flex-wrap gap-4 justify-center my-5">
          {navLinks.map((link) => (
            <Card
              key={link.title}
              title={link.title}
              image={link.image}
              link={link.link}
              style={link.style}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
