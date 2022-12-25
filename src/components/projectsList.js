import audiophileImg from "../images/audiophile.png";
import countriesImg from "../images/countries.png";
import rockPaperScissorcImg from "../images/rock-paper-scissors.png";
import sneakersImg from "../images/sneakers.png";
import bookmarkImg from "../images/bookmark.png";

export const projectsList = [
  {
    title: "E-commerce page",
    description:
      "A fully functional e-commerce page (except the actual payment proccessing)",
    technologies: ["React.js", "React Router", "React Redux"],
    mobileVersion: true,
    tabletVersion: true,
    pageUrl: "https://stefani-josifovska.github.io/audiophile-ecommerce/",
    repoUrl: "https://github.com/stefani-josifovska/audiophile-ecommerce",
    img: audiophileImg,
  },
  {
    title: "Countries page",
    description:
      "A webpage displaying all of the world countries (data gathered from a REST API)",
    technologies: ["React.js", "React Router", "React Redux"],
    mobileVersion: true,
    tabletVersion: true,
    pageUrl: "https://stefani-josifovska.github.io/countries-api/",
    repoUrl: "https://github.com/stefani-josifovska/countries-api",
    img: countriesImg,
  },
  {
    title: "Rock, paper, scissors",
    description:
      "A web app that lets you play the 'Rock, Paper, Scissors' game against the computer.",
    technologies: ["React.js", "TypeScript", "React Context"],
    mobileVersion: true,
    tabletVersion: true,
    pageUrl: "https://stefani-josifovska.github.io/rock-paper-scissors/",
    repoUrl: "https://github.com/stefani-josifovska/rock-paper-scissors",
    img: rockPaperScissorcImg,
  },
  {
    title: "E-commerce - single product page",
    description:
      "A single product page that lets you browse the product and add it to the cart or delete it.",
    technologies: ["Vanilla JS"],
    mobileVersion: true,
    tabletVersion: true,
    pageUrl: "https://stefani-josifovska.github.io/ecommerce-product-page/",
    repoUrl: "https://github.com/stefani-josifovska/ecommerce-product-page",
    img: sneakersImg,
  },
  {
    title: "Product landing page",
    description: "A landing page for a company",
    technologies: ["React.js", "TailwindCSS"],
    mobileVersion: true,
    tabletVersion: true,
    pageUrl: "https://stefani-josifovska.github.io/bookmark-landing-page/",
    repoUrl: "https://github.com/stefani-josifovska/bookmark-landing-page",
    img: bookmarkImg,
  },
];
