import AboutContainer from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { fetchAbouts } from '@/utils/fetchAbout'
import { fetchExperiences } from '@/utils/fetchExperience'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchSocials } from '@/utils/fetchSocials'
import { motion } from 'framer-motion'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { About, Experience, Project, Skill, Social } from 'typings'

type Props = {
  about: About[];
  projects: Project[];
  experiences: Experience[];
  skills: Skill[];
  socials: Social[];
}

export default function Home({ about, experiences, skills, projects, socials }: Props) {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const mouseMove = (e: { clientX: any; clientY: any; }) => {
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
      // setMousePosition({
      //   x: e.clientX,
      //   y: e.clientY
      // })
    }

    // when mouse moves then run the mouseMove function
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#242424",
      mixBlendMode: "screen"
    },
    link: {
      height: 60,
      width: 60,
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      borderWidth: "4px",
      mixBlendMode: "screen"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const linkEnter = () => setCursorVariant("link");

  const imgHover = (e: any) => {
    setHoverText(e.target.getAttribute("data-hover"));
  };

  const imgHoverLeave = (e: any) => {
    setHoverText("");
  };

  // props for components
  const heroProps = {
    about: about,
    textEnter: textEnter,
    textLeave: textLeave,
    linkEnter: linkEnter,
    imgHover: imgHover,
    imgHoverLeave: imgHoverLeave
  };

  const headerProps = {
    socials: socials,
    textLeave: textLeave,
    linkEnter: linkEnter,
    imgHover: imgHover,
    imgHoverLeave: imgHoverLeave
  };

  const aboutProps = {
    about: about,
    linkEnter: linkEnter,
    textLeave: textLeave,
    imgHover: imgHover,
    imgHoverLeave: imgHoverLeave
  };

  const contactProps = {
    linkEnter: linkEnter,
    textLeave: textLeave,
    imgHover: imgHover,
    imgHoverLeave: imgHoverLeave
  };

  const skillsProps = {
    experiences: experiences,
    skills: skills,
    linkEnter: linkEnter,
    textLeave: textLeave,
  };

  return (
    <div className="bg-[#242424] text-white h-screen snap-y overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-thin scrollbar-track-[#222222] scrollbar-thumb-[#f26c4f]">
      <Head>
        <title>Saksham Gupta</title>
      </Head>

      {/* Cursor */}
      <motion.div
        className="cursor border-[#f26c4f] hero__ring"
        variants={variants as any}
        animate={cursorVariant}
      >
        <span className="absolute top-0 left-10 w-[230px] font-light text-xs text-[#ffffff]">{hoverText}</span>
      </motion.div>

      <Header {...headerProps} />

      <section id='hero' className="snap-start">
        <Hero {...heroProps} />
      </section>

      <section id='about' className="snap-center">
        <AboutContainer {...aboutProps} />
      </section>
      
      <section id='skills' className="snap-start">
        <Skills {...skillsProps} />
      </section>

      <section id='projects' className="snap-start">
        <Projects projects={projects}/>
      </section>

      <section id='contact' className="snap-start">
        <ContactMe {...contactProps} />
      </section>
      {/* Footer */}
      {/* <Link href='#hero'>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className='flex items-center justify-center'>
            <img
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src='https://i.postimg.cc/4d1rf88Y/resume-photo.png' />
          </div>
        </footer>
      </Link> */}
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const about: About[] = await fetchAbouts();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  if (!about) {
    throw new Error('About data is undefined');
  }

  return {
    props: {
      about,
      experiences,
      skills,
      projects,
      socials,
    },
    // next js will attemp to regenerate the page:
    // - when a req comes in
    // - at most once every 10 
    revalidate: 10,
  };
};