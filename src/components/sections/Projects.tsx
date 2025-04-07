import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CafeZupas Project Section */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">CafeZupas</h3>
              <p className="text-gray-400 mb-4">
                Contributed to the development and maintenance of mobile
                applications for a prominent restaurant chain with 65+ stores
                across the United States.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React Native",
                  "Android",
                  "iOS",
                  "JavaScript",
                  "TypeScript",
                  "laravel",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://cafezupas.com/"
                  className="text-amber-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* AI Analytics Dashboard Project Section */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Lesfemmes</h3>
              <p className="text-gray-400 mb-4">
                Developed the Les Femmes mobile app for both Android and iOS
                using React Native. The app allows women in the UAE to buy,
                sell, and network. Focused on delivering a seamless,
                user-friendly experience with key features such as product
                listings, chat, and secure payments.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React Native", "Android", "iOS", "laravel"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-amber-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://lesfemmes.net/"
                  className="text-amber-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* E-Commerce Web App Project Section */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                TebCom (Patient+Doctor)
              </h3>
              <p className="text-gray-400 mb-4">
                Developed the TEBCOM mobile application for both Android and iOS
                using React Native. TEBCOM is a telemedicine platform connecting
                patients with licensed healthcare practitioners in Egypt. Key
                features include in-app live chat and video consultations,
                secure medical record storage, and transparent payment
                processing.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React Native",
                  "Android",
                  "iOS",
                  "laravel",
                  "twillio",
                  "WebRTC",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-amber-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://tebcom.net/"
                  className="text-amber-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Real-Time Chat App Project Section */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Artify</h3>
              <p className="text-gray-400 mb-4">
                Developed the Artefy app for both Web and Mobile (Android & iOS)
                using React Native. Artefy connects artists and art enthusiasts,
                allowing users to showcase, buy, and sell artwork. Focused on
                providing a seamless, visually engaging experience with features
                like user profiles, artwork galleries, and secure transactions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Socket.IO", "React", "React Native"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-amber-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.figma.com/community/file/1328822952289127880/artify-nft-marketplace-website-ui-design"
                  className="text-amber-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Kashmir Premier League</h3>
              <p className="text-gray-400 mb-4">
                Developed the Kashmir Premier League app for Mobile (Android &
                iOS) using React Native. The app provides real-time sports
                updates, live streaming, player statistics, and match schedules
                for the Kashmir Premier League.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React Native", "Android", "iOS", "python"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-amber-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://kpl20.com/"
                  className="text-amber-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
