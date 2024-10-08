import Image from "next/image";
import Typography from "@/app/components/Typography";
import Button from "@/app/components/Button";
import Card from "@/app/components/Card";

import aboutVector from "@/public/aboutVector.png";
import techStack from "@/public/techStack.png";
import onamImg from "@/public/me.png";

import { professionalProjects as projectsData, name } from "./data";

const Home = () => {
  const widgetCards = [
    {
      id: "1",
      title: "About me",
      subtitle: "Who I am and what I do",
      icon: aboutVector,
      link: "/about",
    },
    {
      id: "2",
      title: "Tech Stack",
      subtitle: "The dev tools and tech stack I use",
      icon: techStack,
      link: "/techstack",
    },
  ];


  return (
    <main className="container flex flex-col gap-16">
      {/* hero section */}
      <section className="flex flex-col gap-4 mb-12">
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col gap-4 sm:w-10/12 md:w-full">
            <Typography
              tag="h1"
              size="h2/bold"
              variant={"secondary"}
              className="block sm:hidden"
            >
              Hi 👋
            </Typography>
            <Typography tag="h1" size="h2/bold">
              <span className="text-primary-500">I&apos;m</span> {name}
            </Typography>
            <Typography size="body1/normal" variant="secondary">
              As a full stack developer, I assist emerging businesses in
              achieving their digital aspirations. I specialize in developing
              modern web applications.
            </Typography>
          </div>
          {/* image */}
          <div className="hidden sm:block w-full h-80 relative">
            <div
              className="absolute -top-8 right-0 sm:w-[300px] sm:h-[300px]  lg:w-[400px] lg:h-[400px] rounded-b-[20%] cursor-pointer transition ease-in-out duration-500 hover:scale-110"
              style={{ filter: "drop-shadow(0px 11px 27px gray)" }}
            >
              <Image
                src={onamImg}
                alt="onam"
                quality={100}
                className="w-full h-full object-cover rounded-full "
              />
            </div>
          </div>
        </div>
        <Button
          link="/contact"
          title="Get in touch"
          className="!w-full sm:!w-fit hover:bg-primary-700"
        >
          Get in touch
        </Button>
      </section>
      {/* selected work */}
      <section className="flex flex-col gap-4 my-8 mt-16">
        <Typography size="h3/semi-bold">Selected Work</Typography>
        <div className="flex flex-col gap-8">
          {projectsData.length ? (
            projectsData.map(data => (
              <Card
                key={data._id}
                title={data.title}
                description={data.description}
                actionLink={data.demoLink}
                actionText="Visit Site"
                secondaryActionLink={data.githubLink}
                secondaryActiontext="Github"
                projectLogoSrc={data.logo}
                projectScreenshotSrc={data.thumbnail}
                techUsed={data.techUsed}
                variant="projectCard"
              />
            ))
          ) : (
            <Typography>No Data found</Typography>
          )}
        </div>
      </section>

      {/* know me */}
      <section className="flex flex-col gap-4 my-8">
        <Typography size="h3/semi-bold">Get to know me</Typography>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
          {widgetCards.map((widget) => (
            <Card
              key={widget.id}
              title={widget.title}
              description={widget.subtitle}
              widgetCardImg={widget.icon}
              variant="widgetCard"
              actionLink={widget.link}
            />
          ))}
        </div>
      </section>

      {/* let connect */}
      <section className="flex items-center justify-between flex-col sm:flex-row gap-4 my-8">
        <div className="flex flex-col gap-2">
          <Typography size="h3/semi-bold">Let’s work together</Typography>
          <Typography size="body1/normal" variant="secondary">
            Want to discuss an opportunity to create something great? I’m ready
            when you are.
          </Typography>
        </div>
        <Button
          link="/contact"
          title="connect"
          className="items-center gap-2 !w-full sm:!w-fit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
          Get in touch
        </Button>
      </section>
    </main>
  );
};

export default Home;
