import Typography from "@/app/components/Typography";
import { name, country } from "../data";

export const aboutMeData = {
  certifications: [
    {
      imageSrc: "/certifications/frontend.png",
      liveLink: "https://www.hackerrank.com/certificates/1efc747f5351"
    },
    {
      imageSrc: "/certifications/software.png",
      liveLink: "https://www.hackerrank.com/certificates/5018d505463f"
    },
    {
      imageSrc: "/certifications/javascript.png",
      liveLink: "https://www.hackerrank.com/certificates/a77aded4ab59"
    },
    {
      imageSrc: "/certifications/problemsolving.png",
      liveLink: "https://www.hackerrank.com/certificates/45960266ada3"
    },
    {
      imageSrc: "/certifications/sql.png",
      liveLink: "https://www.hackerrank.com/certificates/81c49c0e27d4"
    },
    {
      imageSrc: "/certifications/css.png",
      liveLink: "https://www.hackerrank.com/certificates/baec0ca8f6b9"
    },
    {
      imageSrc: "/certifications/go.png",
      liveLink: "https://www.hackerrank.com/certificates/4cae924ab973"
    },
    {
      imageSrc: "/certifications/restapi.png",
      liveLink: "https://www.hackerrank.com/certificates/51161ac544d0"
    },
    {
      imageSrc: "/certifications/nodejs.png",
      liveLink: "https://www.hackerrank.com/certificates/f5aa000cdab4"
    },
  ],
  aboutMe: [
    {
      title: (
        <Typography size="body1/semi-bold" className="uppercase">
          WHO I AM
        </Typography>),
      content: (
        <Typography size="body2/normal">
          I am {name}, a Enthusiastic Full stack developer from {country}.
        </Typography>
      )
    },
    {
      title: (
        <Typography size="body1/semi-bold" className="uppercase">
          WHAT I DO
        </Typography>),
      content: (
        <>
          <Typography size="body2/normal">
            With over 5+ years of experience as an adept front-end developer, I partner with emerging businesses to fulfill their digital goals, specializing in the craft of modern web applications. My expertise encompasses responsive design, user experience optimization, and implementing the latest web technologies to ensure dynamic and engaging online platforms.
          </Typography>
          <Typography size="body2/normal">
            My understanding of backend technologies such as Node.js, Express, MongoDB, and RESTful APIs complements my front-end expertise, enabling me to grasp the full spectrum of web development and collaborate effectively with fellow developers.
          </Typography>
        </>
      )
    },
    {
      title: (
        <Typography size="body1/semi-bold" className="uppercase">
          WHAT I DID
        </Typography>),
      content: (
        <>
          <Typography size="body2/normal">
            With over 5 years of invaluable experience as a freelancer, I have honed my expertise in JavaScript frameworks such as Next.js, Vue.js, and Angular, alongside comprehensive knowledge of CSS3, SCSS, TailwindCSS, and Bootstrap. My frontend skills are further enhanced by proficiency in cutting-edge JavaScript libraries like GSAP, Lottie, Three.js, Pixi.js, Chart.js, Phaser.js, and Socket.io. Additionally, I have extensive experience with component libraries like Ant Design (AntD) and Material-UI (MUI), allowing me to create polished and professional user interfaces.
          </Typography>
          <Typography size="body2/normal">
            On the backend, I have developed robust server-side applications using frameworks like Express.js, Django, Flask, and Laravel, enabling me to build scalable and efficient web applications. My diverse skill set and hands-on experience have equipped me to tackle complex projects, delivering high-quality, seamless, and interactive user experiences across both the frontend and backend.
          </Typography>
          <Typography size="body2/normal">
            These tools have empowered me to create dynamic, visually compelling, and highly interactive web applications.
            I am enthusiastic about pushing the boundaries of web development to deliver seamless and engaging user experiences.
          </Typography>
          <Typography size="body2/normal">
            During my time as a freelancer, I led the development of several significant projects, including QOVES, Blackalgo, Skinstric, Plinko, Mines, and Whiteboard. These projects allowed me to apply and expand my technical skills, from creating facial assessment tools and investment information platforms to developing interactive games and collaborative tools. Each project presented unique challenges and opportunities, further refining my ability to deliver high-quality, innovative solutions that meet the needs of diverse users.
          </Typography>
          <Typography size="body2/normal">
            QOVES offers facial assessments and recommendations grounded in sophisticated aesthetic research.
            Blackalgo provides educational investment information, explicitly avoiding any financial advisory services.
            Skinstric analyzes facial features to recommend effective skincare methods.
          </Typography>
          <Typography size="body2/normal">
            I am enthusiastic about pushing the boundaries of web development to deliver seamless and engaging user experiences.
          </Typography>
        </>
      )
    },
  ]
}