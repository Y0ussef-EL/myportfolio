import { InfiniteMovingCards } from './../ui/infinite-moving-cards';
const MovingBar = () => {
  return (
    <div className="h-fit bg-transparent rounded-md flex flex-col antialiased dark:bg-black items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={Tech}
        direction="right"
        speed="fast"
      />
    </div>
  );
}
 
const Tech = [
  {
    quote:"",
    name: "NextJS",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "",
    name: "ReactJS",
    title: "Hamlet",
  },
  {
    quote: "",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
export {MovingBar};