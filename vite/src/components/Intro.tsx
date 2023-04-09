import prima from "../assets/prima.jpg";
import seconda from "../assets/seconda.jpg";
import terza from "../assets/terza.jpg";

export const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-3xl md:text-6xl mb-1 md:mb-3 font-bold">
        Chiara Elifani
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        {
          "Dott.ssa in Scienze della Nutrizione, Maestro dello Sport, Docente nazionale e Preparatore Atletico CSEN-CONI, pt & coaching on line ed in presenza"
        }
      </p>
      <section className="grid gap-4">
        <img
          src={prima}
          alt="donna in palestra allo specchio"
          className="h-[400px] rounded-lg"
        />
        <img
          src={seconda}
          alt="donna in palestra allo specchio"
          className="h-[400px] rounded-lg"
        />
        <img
          src={terza}
          alt="donna in palestra allo specchio"
          className="h-[400px] rounded-lg"
        />
      </section>
    </div>
  );
};
