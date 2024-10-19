import { TProject } from "./project"

export const gitHubLink = "https://github.com/maxwellharris0303"
export const twitterLink = "https://x.com/maxwell_h0303"
export const instagramLink = "https://www.instagram.com/maxwellharris303"
export const name = "Maxwell Harris"
export const country = "Canada"

export const professionalProjects: TProject[] = [
  {
    _id: "1",
    logo: "/projects/logo/qoves.png",
    title: "Qoves",
    description: "QOVES offers facial assessments and recommendations grounded in sophisticated aesthetic research. Qoves aim to deliver general information and should not be considered a replacement for professional medical advice, diagnosis, or treatment. It is essential to consult user's physician or a qualified health provider for any questions, or before undertaking any treatment or procedure.",
    techUsed: "Next.js, Gsap, Scss, Lottie, HTML5, TypeScript",
    thumbnail: "/projects/thumbnail/qoves.png",
    githubLink: `${gitHubLink}/qoves`,
    demoLink: "https://qoves-gold.vercel.app/",
    tag: "professional",
    createdAt: "2024-08"
  },
  {
    _id: "2",
    logo: "/projects/logo/blackalgo.png",
    title: "Blackalgo",
    description: "The investing information provided on this page is for educational purposes only. Blackalgo does not offer advisory or brokerage services, nor does it recommend or advise investors to buy or sell particular cryptocurrencies, stocks, securities or other investments. Past performance is no guarantee of future results.",
    techUsed: "Next.js, Gsap, TailwindCSS, Chart.js, Lottie, JavaScript, Socket.io, Three.js, Python",
    thumbnail: "/projects/thumbnail/blackalgo.png",
    githubLink: `${gitHubLink}/Blackalgo`,
    demoLink: "https://blackalgo-frontend.vercel.app/",
    tag: "professional",
    createdAt: "2024-04"
  },
  {
    _id: "3",
    logo: "/projects/logo/skinstric.png",
    title: "SkinStric",
    description: "Skinstric carefully analyzes your facial features to offer targeted skincare solutions designed specifically for you. By examining the unique characteristics of your skin, Skinstric delivers personalized skincare advice to help you achieve the best results. Skinstric uses advanced facial analysis to recommend skincare methods that align with your skin’s individual needs and conditions.",
    techUsed: "Next.js, Gsap, TailwindCSS, Saas, TypeScript, Three.js, OpenAI",
    thumbnail: "/projects/thumbnail/skinstric.png",
    githubLink: `${gitHubLink}/skinstric`,
    demoLink: "https://skinstric-swart.vercel.app/",
    tag: "professional",
    createdAt: "2024-02"
  }
]

export const personalProjects: TProject[] = [
  {
    _id: "1",
    logo: "/projects/logo/plinko.svg",
    title: "Plinko",
    description: 'Plinko is a popular pricing game from the television game show The Price is Right. In Plinko, contestants drop a small disc (the "Plinko chip") down a large pegboard, hoping it lands in a slot at the bottom of the board with a high cash value.',
    techUsed: "Vue.js, Pixi.js, Matter.js, Tween.js, HTML5, JavaScript",
    thumbnail: "/projects/thumbnail/plinko.png",
    githubLink: `${gitHubLink}/vueplinko`,
    demoLink: "https://plinko-jade.vercel.app/",
    tag: "personal",
    createdAt: "2023-11"
  },
  {
    _id: "2",
    logo: "/projects/logo/mines.svg",
    title: "Mines",
    description: 'The Mines betting game is a popular online casino game that is often categorized under "crash" or "instant win" games. The game is inspired by the classic "Minesweeper" video game, where players must avoid mines on a grid while trying to uncover as many safe tiles as possible.',
    techUsed: "Vue.js, HTML5, TypeScript",
    thumbnail: "/projects/thumbnail/mines.png",
    githubLink: `${gitHubLink}/mines`,
    demoLink: "https://mines-rho-weld.vercel.app/",
    tag: "personal",
    createdAt: "2023-09"
  },
  {
    _id: "3",
    logo: "/projects/logo/whiteboard.svg",
    title: "WhiteBoard",
    description: "The React virtual whiteboard allows users to draw freely, create shapes, and add text, similar to a paint application. Users can drag and drop images onto the whiteboard for annotation, resizing, and positioning. The whiteboard includes a save feature, enabling users to export their creations as image files for easy sharing.",
    techUsed: "React.js, Sass, Styled-Component, JavaScript",
    thumbnail: "/projects/thumbnail/whiteboard.png",
    githubLink: `${gitHubLink}/react-whiteboard-pdf`,
    demoLink: "https://react-whiteboard-pdf.vercel.app/",
    tag: "personal",
    createdAt: "2023-02"
  },
  {
    _id: "4",
    logo: "/projects/logo/nft.png",
    title: "NFT Market",
    description: " A 3D in-browser gallery that allows users to look at their Bitcoin Ordinals or NFTs on Rootstock & Stacks in a new, interactive and entertaining way.",
    techUsed: "React.js, React-Bootstrap, BitCoin, TypeScript",
    thumbnail: "/projects/thumbnail/nft.png",
    githubLink: `${gitHubLink}/3DNFT_gallery`,
    demoLink: "https://3-dnft-gallery-zeta.vercel.app/",
    tag: "personal",
    createdAt: "2023-02"
  }
]