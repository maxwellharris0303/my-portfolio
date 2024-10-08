import Typography from "@/app/components/Typography";
import Image from "next/image";
import onamImg from "@/public/me.png";
import Link from "next/link";
import { Metadata } from "next";
import Button from "@/app/components/Button";
import { aboutMeData } from "./data";
export const metadata: Metadata = {
  title: "About | SMDV",
};

const About = async () => {
  return (
    <main className="container">
      <div className="flex flex-col gap-2  my-12">
        <Typography size="h3/semi-bold" className="!text-3xl sm:text-4xl">
          About me
        </Typography>
        <Typography size="body2/normal" variant="secondary">
          Who am I and what I do
        </Typography>
      </div>
      <span className="w-full block border border-primary-300 absolute right-0"></span>

      <section className="flex flex-col sm:flex-row gap-4  mt-20 my-4">
        {/* image on top in mobile view */}
        <div className="block sm:hidden w-48 h-fit bg-primary-800 rounded-3xl">
          <Image
            src={onamImg}
            alt="onam"
            width={300}
            height={200}
            quality={100}
            className="w-full h-full object-cover rounded-3xl"
            style={{ filter: "drop-shadow(2px 2px 5px gray)" }}
          />
        </div>
        <div className="flex flex-col gap-6 sm:w-3/4">
          {aboutMeData.aboutMe.map((item, index) => (
            <div className="flex flex-col gap-2" key={index}>
              {item.title}
              {item.content}
            </div>
          ))}
          <div className="flex flex-col gap-2">
            <Typography size="body1/semi-bold" className="uppercase">
              Certificates
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutMeData.certifications.map(item => (
                <Link
                  key={item.liveLink}
                  href={item.liveLink}
                  className="relative flex group"
                  target="_blank"
                >
                  <div className="w-full h-fit">
                    <Image
                      src={item.imageSrc}
                      alt="hackerRanck"
                      width={300}
                      height={200}
                      quality={100}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <span className="text-primary-50 underline absolute w-full h-full justify-center items-center bg-primary-900/60 hidden group-hover:flex">
                    View details
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center">
          {/* image on right side */}
          <div className="hidden sm:block w-72 h-fit bg-primary-800 rounded-3xl">
            <Image
              src={onamImg}
              alt="onam"
              width={300}
              height={200}
              quality={100}
              className="w-full h-full object-cover rounded-3xl"
              style={{ filter: "drop-shadow(2px 2px 5px gray)" }}
            />
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
        </div>
      </section>
    </main>
  );
};

export default About;
