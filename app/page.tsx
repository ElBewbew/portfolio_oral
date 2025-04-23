"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState, useRef, useId } from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { FlipWords } from "../components/ui/flip-words";
import { Box, Lock, Search, Settings, Sparkles, User } from "lucide-react";
import { GlowingEffect } from "../components/ui/glowing-effect";
import { Timeline } from "../components/ui/timeline";
import { useOutsideClick } from "../components/hooks/use-outside-click";
import { GlareCard } from "../components/ui/glare-card";
import Image from "next/image";
import { div } from "motion/react-client";
import { Carousel } from "../components/ui/carousel";

// Interfaces 
interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

// Variables
const wordsflips = ["Java,", "PHP,", "React,", "Flutter,"];
const words = "Bienvenu sur mon";

export function AuroraBackgroundDemo() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const developpeurSection = document.getElementById("developpeur-section");

      if (!navbar || !developpeurSection) return;

      const sectionBottom = developpeurSection.getBoundingClientRect().bottom;

      if (sectionBottom < 500) {
        navbar.classList.add("visible");
      } else {
        navbar.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav
        id="navbar"
        className="fixed top-1/2 left-0 h-full text-white py-4 px-8 flex flex-col space-y-4 opacity-0 p-24"
      >
        <ul className="space-y-4">
          <li>
            <a href="#main-section" className="text-2xl hover:underline text-galaxy">
              Accueil
            </a>
          </li>
          <li>
            <a href="#developpeur-section" className="text-2xl hover:underline text-galaxy">
              Développeur
            </a>
          </li>
          <li>
            <a href="#flottante-section" className="text-2xl hover:underline text-galaxy">
              Section Flottante
            </a>
          </li>
        </ul>
      </nav>

      <AuroraBackground className="min-h-full">
        {/* Section principale */}
        <motion.div
          id="main-section"
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-4xl md:text-8xl font-bold text-white text-center">
            <TextGenerateEffect words={words} />
            <span className="text-galaxy">Portfolio</span>
          </div>
          <div className="font-extralight text-lg md:text-5xl text-white py-4 text-center">
            <p className="inline">
              Je suis <span className="text-galaxy"> BENOIT VANHOENACKER</span>,<br />
              un développeur web passionné par la création de
              <span className="text-galaxy"> site web</span> et{" "}
              <span className="text-galaxy">application web</span>.
            </p>
          </div>

          
        </motion.div>

        {/* Section "Développeur... et bien plus dans le futur" */}
        <section
          id="developpeur-section"
          className="h-96 w-full mt-10 bg-black dark:bg-white justify-center items-center flex flex-col shadow-b-lg"
        >
          <div className="text-7xl md:text-9xl font-bold dark:text-white text-center"></div>
          <div className="flex justify-center items-center px-4">
            <div className="text-7xl mx-auto font-normal text-neutral-100 dark:text-neutral-400">
              Développeur
              <FlipWords words={wordsflips} /> <br />
              et bien plus encore dans le futur !
            </div>
          </div>
        </section>

        {/* Section flottante */}
        <section
          id="flottante-section"
          className="relative w-3/4 h-auto bg-black flex flex-col gap-4 p-4 mt-10 ml-auto rounded-2xl shadow-lg shadow-b-lg"
        >
          {/* Titre de la section */}
          <div className="w-full text-center text-galaxy py-4 rounded shadow">
            <h2 className="text-3xl md:text-5xl font-sans">oui</h2> {/* Augmenté de 4px */}
          </div>

          {/* Grid */}
          <ul className="grid grid-cols-1 gap-4">
            <GridItem
              area=""
              icon={<User className="h-4 w-4 text-white" />}
              title="Qui suis-je ?"
              description={
                <>
                  <p className="text-base md:text-lg">
                    👋 Salut, moi c’est <span className="text-galaxy">Benoit VANHOENACKER</span>.
                    Actuellement en 2e année de <span className="text-galaxy">BTS SIO</span> option <span className="text-galaxy">SLAM</span>, je me passionne pour le développement <span className="text-galaxy">web</span> et <span className="text-galaxy">mobile</span>. J’aime donner vie à des idées en code, que ce soit avec <span className="text-galaxy">PHP</span> pour le back, JavaScript pour le front, ou <span className="text-galaxy">Flutter</span> pour créer des applis mobiles fluides et modernes.
                  </p>
                  <p className="text-base md:text-lg">
                    Curieux, autonome et toujours prêt à apprendre de nouvelles technos, je développe autant pour les projets d’école que pour mes propres défis perso. Mon objectif ? Monter en compétences, construire des projets concrets et évoluer dans un environnement où la tech rime avec passion.
                  </p>

                  <div className="w-full py-4 mt-8 rounded shadow">
                    <h2 className="text-3xl text-galaxy md:text-4xl h-12 font-sans">Langages</h2> {/* Augmenté de 4px */}
                    <p className="text-base md:text-lg mt-2">
                      Je suis à l'aise avec plusieurs langages de programmation, notamment <span className="text-galaxy">Java</span>, <span className="text-galaxy">PHP</span>, <span className="text-galaxy">JavaScript</span> et <span className="text-galaxy">Dart</span>. J'ai également une bonne maîtrise des frameworks tels que <span className="text-galaxy">React</span> et <span className="text-galaxy">Flutter</span>.
                    </p>

                    {/* Ajout des icônes */}
                    <div className="grid grid-cols-3 gap-8 mt-4">
                      <div className="flex flex-col items-center">
                        <a href="https://www.java.com" target="_blank" rel="noopener noreferrer">
                          <img src="/img/java.svg" alt="Java" className="h-16 w-16" />
                          <p className="text-center text-lg mt-2 text-galaxy hover:underline">Java</p>
                        </a>
                      </div>
                      <div className="flex flex-col items-center">
                        <a href="https://www.php.net" target="_blank" rel="noopener noreferrer">
                          <img src="/img/php.svg" alt="PHP" className="h-16 w-16" />
                          <p className="text-center text-lg mt-2 text-galaxy hover:underline">PHP</p>
                        </a>
                      </div>
                      <div className="flex flex-col items-center">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                          <img src="/img/js.png" alt="JavaScript" className="h-16 w-16" />
                          <p className="text-center text-lg mt-2 text-galaxy hover:underline">JavaScript</p>
                        </a>
                      </div>
                      <div className="flex flex-col items-center">
                        <a href="https://dart.dev" target="_blank" rel="noopener noreferrer">
                          <img src="/img/dart.png" alt="Dart" className="h-16 w-16" />
                          <p className="text-center text-lg mt-2 text-galaxy hover:underline">Dart</p>
                        </a>
                      </div>
                      <div className="flex flex-col items-center">
                        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                          <img src="/img/react.png" alt="React" className="h-16 w-16" />
                          <p className="text-center text-lg mt-2 text-galaxy hover:underline">React</p>
                        </a>
                      </div>
                      <div className="flex flex-col items-center">
                        <a href="https://flutter.dev" target="_blank" rel="noopener noreferrer">
                          <img src="/img/flutter.png" alt="Flutter" className="h-16 w-16" />
                          <p className="text-center text-lg mt-2 text-galaxy hover:underline">Flutter</p>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Ajout de la section TimelineDemo */}
                  <div className="mt-8">
                    <TimelineDemo />
                  </div>
                </>
              }
            />
            <GridItem
              area=""
              icon={<Box className="h-4 w-4 text-white dark:text-neutral-400" />}
              title="Veille technologique"
              description={
                <div className="mt-4">
                  {/* Appel au carrousel */}
                  <CarouselDemo />
                </div>
              }
            />
            <GridItem
              area=""
              icon={<Sparkles className="h-4 w-4 text-white dark:text-neutral-400" />}
              title="Liens utiles"
              description={
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cards.map((card, index) => (
                    <div key={index} className="relative">
                      <GlareCard>
                        <div className="p-4">
                          <h3 className="text-xl font-bold text-galaxy">{card.title}</h3>
                          <p className="mt-2 text-sm text-white">{card.description}</p>
                          <a
                            href={card.ctaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block text-galaxy hover:underline"
                          >
                            {card.ctaText}
                          </a>
                        </div>
                      </GlareCard>
                    </div>
                  ))}
                </div>
              }
            />
          </ul>
        </section>
      </AuroraBackground>
    </div>
  );
}

const Page = () => {
  return <AuroraBackgroundDemo />;
};

export default Page;

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0 text-xl/[1.375rem] font-sans -tracking-4 md:text-4xl/[3rem] text-balance text-galaxy">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem] text-white"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export function TimelineDemo() {
  const data = [
    {
      title: "2024-2025",
      content: (
        <div>
          <p className="mb-8 text- font-sans md:text-sm ">
            2ème années de BTS - Création d'application web et mobile.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/img/gsb.png"
              alt=""
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <HoverBorderGradient
            containerClassName="rounded-full mx-auto mt-23"
            as="button"
            className="dark:bg-black text-white dark:text-white flex items-center space-x-2 "
          >
            <span className="text-lg md:text-2xl">En savoir plus</span>
          </HoverBorderGradient>
            <img
              src="/img/m2l.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <div>
            <HoverBorderGradient
            containerClassName="rounded-full mx-auto mt-23"
            as="button"
            className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-2"
          >
            <span className="text-lg md:text-2xl">En savoir plus</span>
          </HoverBorderGradient>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023-2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-sans  md:text-sm dark:text-neutral-200">
            
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/img/gsb.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            {/* Fond derrière la carte avec effet de fondu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/70 z-[-1] sm:rounded-3xl"
            />

            {/* Carte agrandie */}
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                {active.image}
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto w-full">
        {cards.map((card, index) => (
          <HoverBorderGradient
            key={`card-${card.title}-${index}`}
            containerClassName="rounded-xl"
            as="div"
            className="p-4 flex flex-col justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            onClick={() => setActive(card)}
          >
            <motion.div
              layoutId={`card-${card.title}-${index}`}
              className="flex flex-col justify-between items-center"
            >
              <div className="flex gap-4 flex-col md:flex-row">
                {/* Affichage de l'image */}
                <motion.div layoutId={`image-${card.title}-${index}`} className="h-20 w-20">
                  {card.image}
                </motion.div>
                <div>
                  <motion.h3
                    layoutId={`title-${card.title}-${index}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${index}`}
                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
              <motion.button
                layoutId={`button-${card.title}-${index}`}
                className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
              >
                {card.ctaText}
              </motion.button>
            </motion.div>
          </HoverBorderGradient>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
 
const cards = [
  {
    description: "Next js c'est quoi etc... ta capté",
    title: "Next js",
    image: (
      <Image
        src="/img/gsb.png"
        alt="zdzdz"
        width={160}
        height={160}
        className="rounded-lg object-cover object-top"
      />
    ),
    ctaText: "Plus d'info...",
    ctaLink: "https://nextjs.org/",
    content: () => {
      return <p>Next.js est un framework gratuit et open source s'appuyant sur la bibliothèque JavaScript React et sur la technologie Node.js.</p>;
    },
  },
  {
    description: "aaaaaaaaaa",
    title: "zdzdz",
    image: (
      <Image
        src="/img/gsb.png"
        alt="zdzdz"
        width={160}
        height={160}
        className="rounded-lg object-cover object-top"
      />
    ),
    ctaText: "Plus d'info...",
    ctaLink: "https://nextjs.org/",
    content: () => {
      return (
        <p>
          test
        </p>
      );
    },
  },
 
  {
    description: "bbbbbbbbbb",
    title: "zdzdzd",
    image: (
      <Image
        src="/img/gsb.png"
        alt="zdzdz"
        width={160}
        height={160}
        className="rounded-lg object-cover object-top"
      />
    ),
    ctaText: "Plus d'info...",
    ctaLink: "https://nextjs.org/",
    content: () => {
      return (
        <p>
          test
        </p>
      );
    },
  },
  {
    description: "adaffdddad",
    title: "adadadad",
    image: (
      <Image
        src="/img/gsb.png"
        alt="zdzdz"
        width={160}
        height={160}
        className="rounded-lg object-cover object-top"
      />
    ),
    ctaText: "Plus d'info...",
    ctaLink: "https://nextjs.org/",
    content: () => {
      return (
        <p>
          test
        </p>
      );
    },
  },
  {
    description: "adfadad",
    title: "adadadffdad",
    image: (
      <Image
        src="/img/gsb.png"
        alt="zdzdz"
        width={160}
        height={160}
        className="rounded-lg object-cover object-top"
      />
    ),
    ctaText: "Plus d'info...",
    ctaLink: "https://nextjs.org/",
    content: () => {
      return (
        <p>
          test
        </p>
      );
    },
  },
];

export function CarouselDemo() {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}