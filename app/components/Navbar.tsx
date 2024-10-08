"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/app/contex/ThemeContex";
import { poppins } from "@/app/fonts";
import Button from "@/app/components/Button";
import { gitHubLink, twitterLink, instagramLink } from "../data";

const Navbar = () => {
  const navLinks = [
    {
      title: "Home",
      link: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 "
        >
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
      ),
    },
    {
      title: "About",
      link: "/about",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 "
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Projects",
      link: "/projects",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 "
        >
          <path
            fillRule="evenodd"
            d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
          <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
        </svg>
      ),
    },
    {
      title: "Tech Stack",
      link: "/techstack",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 "
        >
          <path
            fillRule="evenodd"
            d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
            clipRule="evenodd"
          />
          <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
          <path
            fillRule="evenodd"
            d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Contact",
      link: "/contact",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 "
        >
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      ),
    },
  ];

  const currentPath = usePathname();
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.style.background = "#0D0D0D";
      document.body.style.color = "#fbfbfb";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.background = "#fbfbfb";
      document.body.style.color = "#0D0D0D";
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <header
        className={`hidden sm:block bg-white/25 border-white/50 rounded-xl border backdrop-blur-md dark:bg-primary-900/30 dark:border-white/20 `}
      >
        <nav className="flex items-center justify-between  p-4">
          <div className="flex items-center gap-8">
            <Button
              link="/"
              variant="icon"
              title="Smart Young Dev"
              className={`!text-2xl !p-0 dark:text-white !font-bold ${poppins.className} `}
            >
              {"<SMDV>"}
            </Button>
            <div className="flex items-center gap-4">
              {navLinks.map((navLink, index) => (
                <Link
                  key={index}
                  href={navLink.link}
                  title={navLink.title}
                  className="text-primary-600 dark:text-primary-50  hover:text-primary-900"
                >
                  {navLink.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 text-primary-600 dark:text-primary-50">
            <div className="flex items-center border-r border-primary-700">
              <Button
                link={instagramLink}
                variant="icon"
                title="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />{" "}
                </svg>
              </Button>
              <Button
                link={twitterLink}
                variant="icon"
                title="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z" />{" "}
                </svg>
              </Button>
              <Button
                link={gitHubLink}
                variant="icon"
                title="Github"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M 24 4 C 19.963209 4 16.192498 5.2011807 13.046875 7.2636719 A 1.50015 1.50015 0 1 0 14.691406 9.7714844 C 17.365783 8.0179755 20.556791 7 24 7 C 33.406292 7 41 14.593708 41 24 C 41 26.707746 40.36968 29.257322 39.248047 31.525391 A 1.5001887 1.5001887 0 0 0 41.9375 32.855469 C 43.257867 30.185538 44 27.174254 44 24 C 44 12.972292 35.027708 4 24 4 z M 15.800781 13.076172 C 14.472781 15.202172 15.273563 17.527813 15.726562 18.507812 C 14.637562 19.788813 14 21.334 14 23 C 14 26.78 17.280547 29.939391 21.685547 30.775391 C 20.376547 31.448391 19.399609 32.67225 19.099609 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043156 38.12245 7 31.665102 7 24 C 7 21.314402 7.6195896 18.783427 8.7246094 16.529297 A 1.50015 1.50015 0 0 0 7.4492188 14.351562 A 1.50015 1.50015 0 0 0 6.03125 15.208984 C 4.7302698 17.862854 4 20.851598 4 24 C 4 35.027708 12.972292 44 24 44 C 28.472909 44 32.618147 42.525863 35.951172 40.039062 A 1.5009817 1.5009817 0 1 0 34.15625 37.632812 C 32.617628 38.780793 30.876119 39.662932 29 40.240234 L 29 35.136719 C 29 33.228719 27.902453 31.591391 26.314453 30.775391 C 30.719453 29.939391 34 26.78 34 23 C 34 21.426 33.423406 19.961609 32.441406 18.724609 C 32.883406 17.356609 33.371219 14.953172 32.199219 13.076172 C 29.948219 13.076172 28.469672 14.622797 27.763672 15.591797 C 26.601672 15.213797 25.333 15 24 15 C 22.667 15 21.398328 15.213797 20.236328 15.591797 C 19.530328 14.622797 18.052781 13.076172 15.800781 13.076172 z"/>{" "}
                </svg>
              </Button>
            </div>
            <Button
              type="button"
              variant="icon"
              title="Change Theme"
              onClick={() =>
                setTheme((prev) => (prev === "light" ? "dark" : "light"))
              }
              className="transition"
            >
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
            </Button>
          </div>
        </nav>
      </header>
      {/* for mobile navigation */}
      <nav className=" sm:hidden block w-full fixed bottom-0 right-0 z-10">
        <div className="flex items-center justify-evenly gap-2 p-2 bg-primary-600/30 dark:bg-primary-900/60  rounded-xl border border-white/50 backdrop-blur-md mx-4 mb-2">
          {navLinks.map((item, index) => (
            <Button
              key={index}
              link={item.link}
              variant="icon"
              title={item.title}
              className={`!rounded-lg  dark:text-primary-300 ${currentPath === item.link ? "bg-primary-600 !text-white" : ""
                }`}
            >
              {item.icon}
            </Button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
