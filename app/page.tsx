"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState, useRef, useId } from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { FlipWords } from "../components/ui/flip-words";
import { Box, Sparkles, User } from "lucide-react";
import { GlowingEffect } from "../components/ui/glowing-effect";
import { Timeline } from "../components/ui/timeline";
import { useOutsideClick } from "../components/hooks/use-outside-click";
import { GlareCard } from "../components/ui/glare-card";
import Image from "next/image";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";



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
                <>
                  {/* Texte visible sous le titre */}
                  <p className="mt-2 text-base md:text-lg text-white">
                    La veille technologique permet de rester informé des dernières tendances et outils dans le domaine du développement.
                  </p>
                  <div>
                    {/* Contenu principal */}
                    <CarouselDemo />
                  </div>
                </>
              }
            />
            <GridItem
              area=""
              icon={<Sparkles className="h-4 w-4 text-white dark:text-neutral-400" />}
              title="Liens utiles"
              description={
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Premier élément cliquable */}
                  <a href="https://example.com/cv" target="_blank" rel="noopener noreferrer">
                    <GlareCard className="flex flex-col items-center justify-center">
                      <img
                        className="h-full w-full absolute inset-0 object-cover"
                        src="/img/cv.png"
                        alt="CV"
                      />
                    </GlareCard>
                  </a>

                  {/* Deuxième élément cliquable */}
                  <a href="https://example.com/grille" target="_blank" rel="noopener noreferrer">
                    <GlareCard className="flex flex-col items-center justify-center">
                      <img
                        className="h-full w-full absolute inset-0 object-cover"
                        src="/img/grille.png"
                        alt="Grille"
                      />
                    </GlareCard>
                  </a>
                </div>
              }
            />
          </ul>
        </section>

        {/* Section "Footer" */}
        <section
          id="footer-section"
          className="w-full bg-black dark:bg-white flex flex-col items-center justify-center py-10 shadow-b-lg mt-10"
        >
          <div className="text-3xl md:text-5xl font-bold text-center text-galaxy mb-4">
            Merci de votre visite !
          </div>
          <p className="text-lg md:text-xl text-neutral-300 dark:text-neutral-600 text-center max-w-2xl">
            Retrouvez-moi sur mes réseaux ou contactez-moi pour en savoir plus sur mes projets.
          </p>
          <div className="flex gap-6 mt-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-galaxy hover:underline text-lg"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-galaxy hover:underline text-lg"
            >
              LinkedIn
            </a>
            <a
              href="mailto:contact@benoitvanhoenacker.com"
              className="text-galaxy hover:underline text-lg"
            >
              Email
            </a>
          </div>
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
            <img
              src="/img/pnvm.png"
              alt=""
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            
            />
            
          </div>
        </div>
        
      ),
    },
    {
      title: "2023-2024",
      content: (
        <div>
          <p className="mb-8 text- font-sans md:text-sm ">
            1ère années de BTS - Création d'une application en javaFX
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/img/m2l.png"
              alt=""
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/img/dafy.jpg"
              alt=""
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />

            {/* <HoverBorderGradient
            containerClassName="rounded-full mx-auto mt-23"
            as="button"
            className="dark:bg-black text-white dark:text-white flex items-center space-x-2 "
            onClick={() => window.location.href = "http://btssiogap.com/uploads/images/gallery/2022-01/image-1642585801938.png"}
            
            
          >
            <span className="text-lg md:text-2xl">En savoir plus</span>
          </HoverBorderGradient> */}
          
            
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
        src="/img/cv.png"
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
    // 2023
    {
      title: "Janvier 2023 – Lancement de Google Cloud Hyperlocal",
      button: "En savoir plus...",
      src: "https://storage.googleapis.com/gweb-cloudblog-publish/images/RSAC_2025_rollup_hero.max-1000x1000.jpg",
      link: "https://cloud.google.com/blog",
    },
    {
      title: "Février 2023 – Microsoft Azure AI Services",
      button: "En savoir plus...",
      src: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1022443-desktop-3-up-media-card-featured-news-card-1-416x178?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=832&hei=357&qlt=100&fmt=png-alpha&fit=constrain",
      link: "https://azure.microsoft.com/",
    },
    {
      title: "Mars 2023 – AWS Graviton3",
      button: "En savoir plus...",
      src: "https://d1.awsstatic.com/Tab-4_aws-library_illustration_expertise_6_1200.41c428a850e9348f3386227fa4f2ccf96186c2fe.png",
      link: "https://aws.amazon.com/",
    },
    {
      title: "Mai 2023 – Adoption du Cloud Hybride par le Gouvernement Français",
      button: "En savoir plus...",
      src: "https://www.info.gouv.fr/upload/media/content/0001/13/c82912aca14215fed79ab26f6f1ca0a2119b4360.png",
      link: "https://www.gouvernement.fr/",
    },
    {
      title: "Juin 2023 – Cloud Gaming avec Microsoft xCloud",
      button: "En savoir plus...",
      src: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-AI-11Ed-Sapphire-MC001-3000x1682:VP5-1920x600",
      link: "https://www.microsoft.com/",
    },
    {
      title: "Juillet 2023 – Lancement de l’infrastructure serverless de Google Cloud",
      button: "En savoir plus...",
      src: "https://storage.googleapis.com/gweb-cloudblog-publish/images/Agenspace_delivers_AI.max-2500x2500.jpg",
      link: "https://cloud.google.com/",
    },
    {
      title: "Août 2023 – Transition Green Cloud d'AWS",
      button: "En savoir plus...",
      src: "https://d1.awsstatic.com/Tab-5_aws-library_illustration_expertise_4_1200.c6a386fca4b89988e73707acbf1d6f72a6d81de9.png",
      link: "https://aws.amazon.com/",
    },
    {
      title: "Septembre 2023 – Kubernetes 1.25",
      button: "En savoir plus...",
      src: "https://kubernetes.io/images/community/kubernetes-community-final-02.jpg",
      link: "https://kubernetes.io/",
    },
    {
      title: "Octobre 2023 – Accélération des Microservices avec AWS Lambda",
      button: "En savoir plus...",
      src: "https://d1.awsstatic.com/Tab-2_aws-library_illustration_connect_2_1200.01e92eb7518394f283baf913f26f5dda1bbd75e3.png",
      link: "https://aws.amazon.com/lambda/",
    },
    {
      title: "Décembre 2023 – Expansion du Cloud en Afrique",
      button: "En savoir plus...",
      src: "https://www.itforbusiness.fr/wp-content/uploads/2019/03/4e8ed8605ea3329dd24acebe731baa6a.jpg",
      link: "https://www.itforbusiness.fr/expansion-des-clouds-les-nuages-arrivent-en-afrique-19600",
    },

    // 2024
    {
      title: "Janvier 2024 – Expansion d'Azure OpenAI Service",
      button: "En savoir plus...",
      src: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/361349-desktop-full-screen-banner-azure-regions-bg-1600x372?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=3200&hei=744&qlt=100&fmt=png-alpha&fit=constrain",
      link: "https://azure.microsoft.com/",
    },
    {
      title: "Février 2024 – Développement du Cloud Quantique",
      button: "En savoir plus...",
      src: "https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/s-migr/ul/g/8a/b8/cfo-fnance-transformation-leadspace.component.crop-5by4-xl.ts=1745254671332.png/content/adobe-cms/fr/fr/homepage/jcr:content/root/leadspace_container/leadspace_expanded",
      link: "https://www.ibm.com/",
    },
    {
      title: "Mars 2024 – Cloud Healthcare by AWS",
      button: "En savoir plus...",
      src: "https://d2908q01vomqb2.cloudfront.net/c5b76da3e608d34edb07244cd9b875ee86906328/2024/12/11/RIV-Header.jpg",
      link: "https://aws.amazon.com/fr/blogs/industries/healthcare-and-life-sciences-top-10-announcements-from-aws-reinvent-2024/",
    },
    {
      title: "Mai 2024 – Cloud Hybride et 5G",
      button: "En savoir plus...",
      src: "https://pictures.latribune.fr/cdn-cgi/image/width=1920,format=auto,quality=80/379/2403379.jpg?twic=v1/cover=1200x675",
      link: "https://www.latribune.fr/technos-medias/paris-2024-un-parcours-100-cloud-et-5g-privee-pour-suivre-la-flamme-olympique-1001597.html",
    },
    {
      title: "Juin 2024 – Blockchain et Cloud Computing",
      button: "En savoir plus...",
      src: "https://imgs.search.brave.com/vQkKfJ-HC36gtrmmrIkofxOYFnU6kaWN5cEPCBmUgU8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTUz/NDk5MDEwL2ZyL3Bo/b3RvL2Jsb2NrY2hh/aW4tdGVjaG5vbG9n/aWUtc3RydWN0dXJl/LXBhc2FudGUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXdl/RVRNVlNxQloydFlF/ODlNT01EVGdmRDJD/Qnd0RkljWk5zZzhm/QXppS2c9",
      link: "https://www.blockchain.com/",
    },
    {
      title: "Juillet 2024 – Accélération de la Migration Cloud",
      button: "En savoir plus...",
      src: "https://cdn.gminsights.com/image/rd/sustainable-and-smart-technologies/cloud-migration-services-market-2025-2034.webp",
      link: "https://www.gminsights.com/fr/industry-analysis/cloud-migration-services-market",
    },
    {
      title: "Août 2024 – Cloud et Intelligence Artificielle",
      button: "En savoir plus...",
      src: "https://www.banque-france.fr/system/files/styles/rectangle_600x520/private/2025-03/Denis-Beau_intervention.jpg?h=b7a36548&itok=KFeCB0Ed",
      link: "https://www.banque-france.fr/fr/interventions-gouverneur/artificial-intelligence-evolution-and-outcomes-digital-trust-data-and-cloud",
    },
    {
      title: "Septembre 2024 – Cloud dans l’Éducation",
      button: "En savoir plus...",
      src: "https://imgs.search.brave.com/VLNhu-NgJc0ekgpopVS1x4hlttdRqzeZy-2UUl23mz0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXkuY29tL2Fkb2Jl/L2R5bmFtaWNtZWRp/YS9kZWxpdmVyL2Rt/LWFpZC0tNTlhYTk4/NjgtNDRkMS00M2Rh/LTkxODQtNTYxYTI1/MGU3Nzk5L2V5LWVk/dGVjaC1mcmFuY2Fp/c2UtMjAyMjAzMTEu/anBnP3F1YWxpdHk9/ODUmcHJlZmVyd2Vi/cD10cnVl",
      link: "https://www.edtechmagazine.com/",
    },
    {
      title: "Novembre 2024 – Cloud et Edge Computing",
      button: "En savoir plus...",
      src: "https://edgecomputing.com/wp-content/uploads/2024/05/discussion-1.png",
      link: "https://www.edgecomputing.com/",
    },
    {
      title: "Décembre 2024 – Réalité Augmentée et Cloud",
      button: "En savoir plus...",
      src: "https://cdn.prod.website-files.com/670f5c004e9bfff84affff01/67c945eaa8218a0c4fe9ffbc_67c595066f8870d1c8900e22_67c3c832aae04b2cda55f0fc_67c170bed9d61e80b24a6c5c_Blog-Thumbnail-what-is-VR-training-1.webp",
      link: "https://www.arvrblog.com/",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <AnimatePresence>
          {slideData.map((slide, index) => {
            if (!showAll && index >= 5) return null;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center p-4 bg-black rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              >
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="mt-4 text-lg font-bold text-white">{slide.title}</h3>
                <a
                  href={slide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-600"
                >
                  {slide.button}
                </a>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          {showAll ? "Afficher moins" : "Afficher plus"}
        </button>
      </div>
    </div>
  );
}

export function AnimatedTooltipPreview() {
  const people = [
    {
      id: 1,
      name: "AWS",
      designation: "Documentation",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xQcwKitRgXfqdi34DYlocPSEXD2G2zZipg&s",
    },
    {
      id: 2,
      name: "Youtube",
      designation: "Video",
      image:
        "https://img.freepik.com/vecteurs-premium/logo-rond-youtube-isole-fond-blanc_469489-983.jpg?semt=ais_hybrid&w=740",
    },
    {
      id: 3,
      name: "ChatGPT",
      designation: "IA",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdM9MEQ0ExL1PmInT3U5I8v63YXBEdoIT0Q&s",
    },
    {
      id: 4,
      name: "GitHub",
      designation: "Code Repository",
      image:
        "https://yt3.googleusercontent.com/PKRBxhCiGa8Y0vPmHa1E2cdjpLhUq2Pl-gESwP7kk2plGgxLdsbjyTd9VjcJwBMiY0HQ8bvx5Q=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 5,
      name: "X",
      designation: "Reseaux sociaux",
      image:
        "https://www.internetmatters.org/wp-content/uploads/2024/08/x-formerly-twitter-article-hero.webp",
    },
    {
      id: 6,
      name: "React Status",
      designation: "NewLetter",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAchwXzctzezPSzQA7e-deh5OVLHKtQjUpHw&s",
    },
    {
      id: 6,
      name: "React Status",
      designation: "NewLetter",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAchwXzctzezPSzQA7e-deh5OVLHKtQjUpHw&s",
    },
    {
      id: 6,
      name: "React Status",
      designation: "NewLetter",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAchwXzctzezPSzQA7e-deh5OVLHKtQjUpHw&s",
    },
    {
      id: 7,
      name: "React Status",
      designation: "NewLetter",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAchwXzctzezPSzQA7e-deh5OVLHKtQjUpHw&s",
    },
    
  ];

  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

{/* <GlareCard className="flex flex-col items-center justify-center">
        <img
          className="h-full w-full absolute inset-0 object-cover"
          src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </GlareCard> 
      



import { GlareCard } from "../ui/glare-card";

export function GlareCardDemo() {
  return (
    <GlareCard className="flex flex-col items-center justify-center">
      <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
      >
        <path
          d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
          stroke="currentColor"
          strokeWidth="15"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
        />
      </svg>
      <p className="text-white font-bold text-xl mt-4">Aceternity</p>
    </GlareCard>
  );
} */}