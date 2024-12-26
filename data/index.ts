import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize user-friendliness, fostering better interactions.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zones across the globe.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve every user's experiences",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on a SaaS project.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Got any questions?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Beatzly | Quality Music Streaming",
    des: "Enjoy high-quality music streaming with Beatzly. Listen to your favorite songs on the go.",
    img: "/p1.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "beatzly.vercel.app",
  },
  {
    id: 2,
    title: "Lurnix | AI Course Generator",
    des: "Discover your learning, reimagined. Lurnix generates personalized AI courses based on your preferences.",
    img: "/p2.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "lurnix.vercel.app",
  },
  {
    id: 3,
    title: "Blinkview | AI Media Sharing",
    des: "Discover hundreds of images on our platform in a blink of an eye. Blinkview is the future of media sharing.",
    img: "/p3.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "blinkview.vercel.app",
  },
  {
    id: 4,
    title: "BlinkCV | AI Resume Builder",
    des: "Highlight your skills and experience with BlinkCV. Our AI-powered resume builder will help you land your dream job.",
    img: "/p4.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "blinkcv.vercel.app",
  },
];

export const testimonials = [
  {
    quote:
      "I like how Aaryan truly cares about his users. He is always available to answer questions and provide guidance. He is very knowledgeable and professional. I highly recommend him.",
    name: "Vincent Cain",
    title: "User of BlinkCV since 2024",
  },
  {
    quote:
      "It's unbelievable how he makes his creations user-friendly and quality. I've used his various web-apps and I must say that I'm truly impressed...",
    name: "Matthew Perkins",
    title: "User of Beatzly since 2024",
  },
  {
    quote:
      "I justed used one of his most recent app, probably 'BlinkCV' and dang its amazing. It literally took me less than 5 mins to draft my resume. Really amazing ngl.",
    name: "Marilyn Riley",
    title: "User of BlinkCV since 2024",
  },
  {
    quote:
      "I saw everyone talking about AI apps from this guy and I decided to give it a try. Now to be honest, I must say that I'm not disappointed at all! He is truly amazing. Eagerly waiting for his next project.",
    name: "Joseph W. Hawkins",
    title: "User of Lurnix since 2024",
  },
  {
    quote:
      "What's funny is that how jaw-droppingly effectively this guy integrates AI with day-to-day tools. I've never thought that it'd be so easy to learn new skills all thanks to Lurnix by him. Thanks.",
    name: "Mary Clarke",
    title: "User of Lurnix since 2024",
  },
];

export const companies = [
  {
    id: 1,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 2,
    name: "strapi",
    img: "/strapi.png",
  },
  {
    id: 3,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developement",
    desc: "Plenty of experience in full stack development, from concept to deployment.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Leading Web Apps Development",
    desc: "Led the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a portfolio for a client, from initial concept to deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Rookie AI Engineering",
    desc: "Constantly experimenting with AI and ML and how to use them in web dev, learning new things every day.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Ryen-X",
  },
  {
    id: 2,
    img: "/wha.svg",
    link: "https://whatsapp.com/",
  },
  {
    id: 3,
    img: "/next.svg",
    link: "https://nextjs.org/",
  },
];
