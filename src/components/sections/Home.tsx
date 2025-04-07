import { RevealOnScroll } from "../RevealOnScroll";
import resume from "../../assets/Muzamil_Mubashir_Resume.pdf";
export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-orange-700 bg-clip-text text-transparent leading-right">
            Hi, I'm Muzamil Mubashir
          </h1>

          <p className="text-zinc-300 text-2xl mb-8 max-w-lg mx-auto">
            I’m a Full-Stack Developer with a focus on React Native and Web
            Applications. I specialize in crafting clean, scalable, and
            high-performance solutions that ensure an exceptional user
            experience. Whether it’s a mobile app or a dynamic web platform, my
            goal is to build solutions that are both intuitive and impactful.
            Let’s build something amazing together!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href={resume} // The resume file should be in the public folder
              download
              className="border border-amber-500 text-amber-500 py-3 px-6 rounded font-medium transition-all duration-200 
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="bg-amber-500 text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-amber-400-500/50 text-amber-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
