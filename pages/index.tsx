import type { GetServerSideProps  } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import WorkExperience from "../components/WorkExperience";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

// const Home: NextPage<Props> = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar-thin md:scrollbar scrollbar-track-gray-400/5
    scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>{pageInfo?.name}</title>
        <meta name="description" content="AnkitLuthraPortfolio"/>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-always snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className=" snap-always snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-always snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-always snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-always snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-always snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <footer className="sticky bottom-5 w-full pr-10 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-end"
        >
          <Link href="#hero">
            <p className="flex items-center cursor-pointer rounded-full bg-[#F7AB07]/80 p-2 animate-bounce">
              <ChevronDoubleUpIcon className="h-8 w-8 font-bold text-white" />
            </p>
          </Link>
        </motion.div>
      </footer>
    </div>
  );
};

export default Home;

export const getServerSideProps : GetServerSideProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    // revalidate: 10,
  };
};
