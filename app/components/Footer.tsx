"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

import { ThemeContext } from "@/app/contex/ThemeContex";
import Button from "@/app/components/Button";
import Typography from "@/app/components/Typography";
import { poppins } from "@/app/fonts";

import { gitHubLink, instagramLink, twitterLink } from "../data";
import footerGradient from "@/public/footerGradient.svg";

const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const navLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "TechStack",
      link: "/techstack",
    },
  ];
  const socialLinks = [
    {
      title: "Github",
      link: gitHubLink,
    },
    {
      title: "Twitter",
      link: twitterLink,
    },
    {
      title: "Instagram",
      link: instagramLink,
    },
  ];

  const currentPath = usePathname();

  return (
    <footer className="relative mt-8 pb-8 ">
      <span className="w-full block border border-primary-300 mb-10"></span>

      <div className="container">
        <div className="flex justify-between gap-2">
          <div className="hidden sm:block">
            {/* logo */}
            <Button
              link="/"
              variant="icon"
              title="Smart Yound Dev"
              className={`!text-3xl dark:text-white !p-0 !font-bold ${poppins.className}`}
            >
              {"<SMDV>"}
            </Button>
          </div>
          {/* footer links */}
          <div className="flex justify-between flex-col sm:flex-row gap-4 sm:gap-20 mr-4">
            <div className="flex flex-col gap-4">
              <Typography size="body1/semi-bold">Link</Typography>
              <ul className="flex flex-col gap-2">
                {navLinks.map((navLink, index) => (
                  <li key={index}>
                    <Link
                      href={navLink.link}
                      title={navLink.title}
                      className="text-primary-600 dark:text-primary-500 font-medium hover:text-primary-900 dark:hover:text-primary-300"
                    >
                      {navLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <Typography size="body1/semi-bold">Social</Typography>
              <ul className="flex flex-col gap-2">
                {socialLinks.map((socialLink, index) => (
                  <li key={index}>
                    <Link
                      href={socialLink.link}
                      title={socialLink.title}
                      className="text-primary-600 dark:text-primary-500 font-medium hover:text-primary-900 dark:hover:text-primary-300"
                    >
                      {socialLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start sm:hidden my-8">
          <Button
            type="button"
            variant="icon"
            title="Toggle Theme"
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
            className="gap-1 items-center capitalize !font-normal !p-0 text-primary-600 dark:text-primary-50 transition"
          >
            toggle mode
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 block dark:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 hidden dark:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
          </Button>
          {/* logo */}
          <Button
            link="/"
            variant="icon"
            title="Smart Young Dev"
            className={`!text-3xl dark:text-white !p-0 !font-bold ${poppins.className}`}
          >
            {"<SMDV>"}
          </Button>
        </div>
        <Typography
          size="small/normal"
          variant="secondary"
          className="mb-16 sm:mb-0 text-center"
        >
          © 2024 Maxwell H. All Rights Reserved.
        </Typography>
      </div>

      {/* background gradient */}
      <div className="w-full h-[500px] absolute bottom-0 right-0 -z-10 ">
        <Image
          src={footerGradient}
          alt="gradient"
          quality={100}
          fill
          sizes="100vw"
          priority
          className="w-full object-cover blur-2xl"
        />
      </div>
    </footer>
  );
};

export default Footer;
