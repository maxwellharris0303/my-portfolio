"use client";
import { ChangeEvent, useRef, useState, useContext } from "react";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Textbox from "@/app/components/Textbox";
import Typography from "@/app/components/Typography";
import { ThemeContext } from "@/app/contex/ThemeContex";
import { twitterLink, gitHubLink, instagramLink } from "../data";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    variant: "error" | "success";
    message: string;
  } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { theme, setTheme } = useContext(ThemeContext);

  const socialLinks = [
    {
      title: "Instagram",
      link: instagramLink,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
        </svg>
      ),
    },
    {
      title: "Twitter",
      link: twitterLink,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z" />
        </svg>
      ),
    },
    {
      title: "Github",
      link: gitHubLink,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M 24 4 C 19.963209 4 16.192498 5.2011807 13.046875 7.2636719 A 1.50015 1.50015 0 1 0 14.691406 9.7714844 C 17.365783 8.0179755 20.556791 7 24 7 C 33.406292 7 41 14.593708 41 24 C 41 26.707746 40.36968 29.257322 39.248047 31.525391 A 1.5001887 1.5001887 0 0 0 41.9375 32.855469 C 43.257867 30.185538 44 27.174254 44 24 C 44 12.972292 35.027708 4 24 4 z M 15.800781 13.076172 C 14.472781 15.202172 15.273563 17.527813 15.726562 18.507812 C 14.637562 19.788813 14 21.334 14 23 C 14 26.78 17.280547 29.939391 21.685547 30.775391 C 20.376547 31.448391 19.399609 32.67225 19.099609 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043156 38.12245 7 31.665102 7 24 C 7 21.314402 7.6195896 18.783427 8.7246094 16.529297 A 1.50015 1.50015 0 0 0 7.4492188 14.351562 A 1.50015 1.50015 0 0 0 6.03125 15.208984 C 4.7302698 17.862854 4 20.851598 4 24 C 4 35.027708 12.972292 44 24 44 C 28.472909 44 32.618147 42.525863 35.951172 40.039062 A 1.5009817 1.5009817 0 1 0 34.15625 37.632812 C 32.617628 38.780793 30.876119 39.662932 29 40.240234 L 29 35.136719 C 29 33.228719 27.902453 31.591391 26.314453 30.775391 C 30.719453 29.939391 34 26.78 34 23 C 34 21.426 33.423406 19.961609 32.441406 18.724609 C 32.883406 17.356609 33.371219 14.953172 32.199219 13.076172 C 29.948219 13.076172 28.469672 14.622797 27.763672 15.591797 C 26.601672 15.213797 25.333 15 24 15 C 22.667 15 21.398328 15.213797 20.236328 15.591797 C 19.530328 14.622797 18.052781 13.076172 15.800781 13.076172 z" />
        </svg>
      ),
    },
  ];

  const handleSend = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage(null);
    try {
      if (formRef.current) {
        const formData = new FormData(formRef.current);
        const formDataObj = Object.fromEntries(formData.entries());
        const { name, email, subject, message } = formDataObj;
        // const response = await fetch("/api/contact", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     name,
        //     email,
        //     subject,
        //     message,
        //   }),
        // });
        // const data = await response.json();

        // if (response.status !== 200) {
        //   throw new Error("Failed to send mail");
        // }
        setStatusMessage({
          variant: "success",
          message: "Mail send successfully",
        });
        e.target?.reset();
      }
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        setStatusMessage({ variant: "error", message: error.message });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="container">
      <div className="flex flex-col gap-2  my-12">
        <Typography size="h3/semi-bold" className="!text-3xl sm:text-4xl">
          Get in touch
        </Typography>
        <Typography size="body2/normal" variant="secondary">
          Let’s build something awesome.
        </Typography>
      </div>
      <span className="w-full block border border-primary-300 absolute right-0"></span>
      <section className="flex flex-col  gap-4  mt-20 my-4 p-4 bg-primary-100 dark:bg-primary-800 shadow-lg rounded-2xl">
        <Typography
          size="body1/semi-bold"
          className="text-center border-b border-primary-400 pb-2"
        >
          New message
        </Typography>
        <form
          method="POST"
          className="flex flex-col gap-2"
          ref={formRef}
          onSubmit={handleSend}
        >
          <div className="flex justify-between gap-4 flex-col sm:flex-row items-center">
            <Input
              name="name"
              type="text"
              label="Name"
              minLength={3}
              required
            />
            <Input
              name="email"
              type="email"
              label="Email"
              minLength={3}
              required
            />
          </div>
          <Input
            name="subject"
            type="text"
            label="Subject"
            minLength={5}
            required
          />
          <Textbox label="Message" name="message" minLength={10} required />
          <div className="flex justify-end gap-4 items-center mt-4">
            <Button type="reset" title="Reset" variant="danger">
              Reset
            </Button>
            <Button
              type="submit"
              title="Send"
              variant={"primary"}
              disabled={isLoading}
              className="!bg-primary-700"
            >
              {isLoading ? "Please wait..." : "Send"}
            </Button>
          </div>
          {statusMessage ? (
            <Typography
              variant={statusMessage.variant}
              className="my-4 text-center dark:bg-primary-200"
            >
              {statusMessage.variant === "error" ? "❌" : "✅"}{" "}
              {statusMessage.message}
            </Typography>
          ) : null}
        </form>
      </section>
      <div className="flex justify-center items-center gap-4 my-4 text-primary-600 dark:text-primary-400">
        {socialLinks.map((social, index) => (
          <Button
            key={index}
            link={social.link}
            variant="icon"
            title={social.title}
            className="hover:bg-primary-800 p-3 transition hover:text-gray-400"
          >
            {social.icon}
          </Button>
        ))}
      </div>
    </main>
  );
};

export default Contact;
