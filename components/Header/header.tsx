import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular + Bold
  display: "swap",
});

const Header = () => {
  return (
    <header
      className={`${robotoSlab.className} text-zinc-600 py-10 border-b flex flex-col items-center justify-center text-center px-4`}
    >
      <h1 className="uppercase font-extrabold text-3xl sm:text-4xl md:text-5xl">
        youssef el ammari
      </h1>

      <p className="text-lg md:text-xl mt-2 font-medium text-zinc-700">
        Full Stack Engineer
      </p>

      <p className="max-w-2xl text-sm sm:text-base text-zinc-500 px-15 sm:px-0 justify-between">
        I build accessible, pixel-perfect digital experiences for web and mobile interfaces.
      </p>
    </header>
  );
};

export default Header;
