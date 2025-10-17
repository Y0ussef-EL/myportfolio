import Image from "next/image";
import { FlipWords } from "../ui/flip-words";
import { robotoSlab } from "@/utils/fonts";

const About = () => {
  const words = ["scalable", "intuitive", "robust", "innovative"];
const words2 = ["solutions", "experiences", "applications", "platforms"];

  return (
    <div className={`${robotoSlab.className} text-zinc-600 grid grid-cols-1 md:grid-cols-2 gap-6 px-6`}>
      {/* Left Section */}
      <div className="flex flex-col justify-center items-start space-y-4">
        <div className="text-2xl font-semibold mx-16">
          Hello <span>👋</span>,
        </div>
        <p className="text-3xl leading-relaxed mx-16">
          My name is <span className="font-bold">EL AMMARI YOUSSEF</span>, a
          <span className="font-bold"> Software Developer </span> based in Morocco, dedicated to crafting
          beautiful and functional web and mobile applications that elevate user
          experiences.
        </p>
        <div className="mx-16">
          <div className=" bg-zinc-600/20 py-4 pt-3 px-3 rounded-2xl w-fit h-fit inline-block text-center">
            <div className="flex flex-col">
              <FlipWords
                words={words}
                className="text-zink-600 font-bold text-4xl capitalize"
              />
              <FlipWords
                words={words2}
                className="text-zink-600 font-bold text-4xl capitalize"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex justify-center items-center">
        <Image
          src="/HeroPic.png"
          alt="picture"
          width={800}
          height={1000}
          className="object-cover opacity-30"
        />
      </div>
    </div>
  );
};

export default About