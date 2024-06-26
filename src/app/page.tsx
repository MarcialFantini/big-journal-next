import { Card } from "@/components/Card";
import { Hamburgers, parserItems } from "./data";

export default function Home() {
  return (
    <main className="md:grid md:grid-cols-4 gap-4">
      <div className=" w-full h-full bg-[#222626] rounded-lg">
        <h2 className="mb-4 lg:mb-0  flex md:flex-col text-[2.5rem] font-bold p-4">
          Good <span>Foods</span>
        </h2>
      </div>
      <section className=" col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {parserItems(Hamburgers).map((items, key) => {
          return (
            <section
              className=" flex flex-col gap-4"
              key={key + "-container-card"}
            >
              {items.map((item, key) => (
                <Card key={key + "card" + item.id} item={item}></Card>
              ))}
            </section>
          );
        })}
      </section>
    </main>
  );
}
