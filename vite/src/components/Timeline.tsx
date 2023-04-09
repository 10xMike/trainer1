import { TimelineItem } from "./TimelineItem";

export const Timeline = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center my-20 ">
      <div className="w-full md:w-7/12">
        <TimelineItem
          year={"2010"}
          title={"IDK"}
          duration={"a long time lol"}
          details={
            "My humble attempt at building my version of the digital world one step at a time by documenting my coding journey and creating software engineering and computer science content to help those coming behind me"
          }
        ></TimelineItem>
        <TimelineItem
          year={"2010"}
          title={"IDK"}
          duration={"a long time"}
          details={
            "My humble attempt at building my version of the digital world one step at a time by documenting my coding journey and creating software engineering and computer science content to help those coming behind me"
          }
        ></TimelineItem>
        <TimelineItem
          year={"2010"}
          title={"IDK"}
          duration={"a long time"}
          details={
            "My humble attempt at building my version of the digital world one step at a time by documenting my coding journey and creating software engineering and computer science content to help those coming behind me"
          }
        ></TimelineItem>
        <TimelineItem
          year={"2010"}
          title={"IDK"}
          duration={"a long time"}
          details={
            "My humble attempt at building my version of the digital world one step at a time by documenting my coding journey and creating software engineering and computer science content to help those coming behind me"
          }
        ></TimelineItem>
      </div>
    </section>
  );
};
