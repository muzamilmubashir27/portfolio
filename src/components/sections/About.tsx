import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React Native",
    "React",
    "TypeScript",
    "TailwindCSS",
    "JavaScript",
  ];

  const backendSkills = ["Node.js", "AWS", "MongoDB", "GraphQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-500 to-cyan-400  bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-amber-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-amber-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border max-h-70 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Computer Science </strong> - University of
                  Central Punjab Lahore,Pakistan (2016-2020)
                </li>
                <li>
                  Relevant Coursework: Data Structures,OOP ,Web Development,
                  Cloud Computing...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-200">
                <div>
                  <h4 className="font-semibold text-amber-300 text-lg">
                    {" "}
                    Senior Software Engineer at Tkxel(May 2022 - Present){" "}
                  </h4>
                  <p className="text-sm ">
                    Led development of complex mobile projects with seamless
                    implementation and testing. Built and optimized
                    cross-platform iOS and Android apps using React Native.
                    Extensive knowledge of React Native's core principles and
                    mobile app architecture. Skilled in using AEM as a headless
                    CMS for dynamic content integration. Strong proficiency in
                    JavaScript, including DOM manipulation and object modeling.
                    Deep experience with React workflows, such as Redux and
                    Flux, for efficient state management. Integrated RESTful
                    APIs to ensure smooth backend communication. Designed
                    high-level, user-friendly interfaces through rapid
                    prototyping. Developed robust unit tests covering edge
                    cases, usability, and reliability. Spearheaded bug fixing
                    and performance enhancements for improved app stability.
                    Collaborated with large teams to build scalable,
                    multi-tenant React Native applications. Proficient in
                    handling and debugging 3rd-party dependencies, with
                    experience in custom forking. Expert in the React lifecycle
                    and long-term feature stability. Familiar with native
                    development tools, including Xcode, Android Studio, and
                    Gradle. Managed app releases on the Apple App Store and
                    Google Play Store.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300 text-lg">
                    {" "}
                    Senior Software Engineer at Bynolt (Mar 2022 - Jun 2022){" "}
                  </h4>
                  {/* <p className="text-sm">
                    Managing large and complex projects or multiple components
                    with smooth implementation and testing of the application.
                  </p> */}
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300 text-lg">
                    {" "}
                    Senior React Native Developer at InvoZone (July 2020 - Jun
                    2022){" "}
                  </h4>
                  {/* <p className="text-sm">
                    Managing large and complex projects or multiple components
                    with smooth implementation and testing of the application. ●
                    Cooperating and communicating with other team members for
                    eﬃcient management works. ● Delivering and implementing the
                    project as per scheduled milestones. ● Designing,
                    Developing, Implementation, and troubleshooting
                    applications. ● Providing suggestions to manage and enhance
                    the work culture of the Company. ● Designed and developed
                    base classes, framework classes, and reusable components. ●
                    Involved in Understanding functional speciﬁcations and
                    developing creative solutions to meet business requirements.
                  </p> */}
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300 text-lg">
                    {" "}
                    Senior React Native Developer at Wipro (Dec 2020 - April
                    2022){" "}
                  </h4>
                  {/* <p className="text-sm">
                    Developed and actively maintained mobile applications for
                    clients based in the USA, specifically within the healthcare
                    sector. These applications were designed to improve user
                    engagement and streamline healthcare processes, ensuring
                    high performance, security, and a seamless user experience.
                  </p> */}
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300 text-lg">
                    {" "}
                    Software Engineer at Dominian Global (Jan 2020 - May 2020){" "}
                  </h4>
                  {/* <p className="text-sm">
                    Developed and maintained mobile applications for clients
                    based in the UAE, including projects like LesFemmes and The
                    Work Geneies.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
