import type { PortfolioItemData } from "@/types/portfolio";

export const portfolioItems: PortfolioItemData[] = [
  {
    img: "/assets/images/portfolio/waysbeans.png",
    width: 945,
    height: 531,
    altImg: "Waysbeans Capture",
    project: {
      title: "Waysbeans",
      link: "https://waysbeans-by-yadi.netlify.app/",
    },
    description: (
      <>
        This is my task result from{" "}
        <a
          href="https://dumbways.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600"
        >
          Dumbways Id
        </a>
        . - E-Commerce Web App
      </>
    ),
    techStacks: [
      "javascript",
      "react",
      "express",
      "socketIO",
      "nodejs",
      "axios",
    ],
  },
  {
    img: "/assets/images/portfolio/npm.png",
    width: 695,
    height: 391,
    altImg: "NPM Exposql-Queries Capture",
    project: {
      title: "expostsql-queries",
      link: "https://www.npmjs.com/package/expostsql-queries",
    },
    description: (
      <>
        My First Package Manager Project, this is a package module for querying
        the postgresql database in Framework EXPRESSjs such a eloquent orm in
        Laravel.
      </>
    ),
    techStacks: ["javascript", "postgresql", "nodejs"],
  },
  {
    img: "/assets/images/portfolio/jewel.jpg",
    width: 800,
    height: 450,
    altImg: "Jewel Capture",
    project: {
      title: "Jewel - Landing Page",
      link: "https://codepen.io/yadbro/full/ExQarJx",
    },
    description: (
      <>
        This is a landing page that I made without using any framework, and is
        also a challenge from Responsive Web Design FreeCodeCamp. However, the
        challenge looks different because something has to be added to complete
        the test.
      </>
    ),
    techStacks: ["html", "css", "javascript"],
  },
  {
    img: "/assets/images/portfolio/mobile-app.png",
    width: 1280,
    height: 720,
    altImg: "Mobile App Dumbways Capture",
    project: {
      title: "Dumbways (Mobile App)",
      link: "https://drive.google.com/file/d/1RiIW9FKMNFHVo1swDvKwzgGLedmkT4YB/view?usp=sharing",
    },
    description: (
      <>
        This is my task result from{" "}
        <a
          href="https://dumbways.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600"
        >
          Dumbways Id
        </a>
        . - Mobile App
      </>
    ),
    techStacks: ["javascript", "reactNative", "axios"],
  },
  {
    img: "/assets/images/portfolio/css-layout.png",
    width: 1268,
    height: 713,
    altImg: "Technical Documentation Capture",
    project: {
      title: "Technical Document Page",
      link: "https://codepen.io/yadbro/full/NWyPyMY",
    },
    description: (
      <>
        This is a Technical document page that I made without using any
        framework, and is also a challenge from Responsive Web Design
        FreeCodeCamp.
      </>
    ),
    techStacks: ["html", "css", "javascript"],
  },
  {
    img: "/assets/images/portfolio/logo-jiep.png",
    width: 284,
    height: 178,
    altImg: "JIEP Capture",
    project: {
      title: "JIEP",
      link: "https://jiep.co.id/",
    },
    description: (
      <>
        (Vue 3, Nuxt 3) This is main website from JIEP, we rebuild each element
        of JIEP with fresh or modern website.
      </>
    ),
    techStacks: [
      "javascript",
      "vue",
      "nuxt",
      "bootstrap",
      "pinia",
      "tanstack-query",
    ],
  },
  {
    img: "/assets/images/portfolio/logo-jiep.png",
    width: 284,
    height: 178,
    altImg: "PPID JIEP Capture",
    project: {
      title: "PPID JIEP",
      link: "https://ppid.jiep.co.id/",
    },
    description: (
      <>
        (Vue 3, Nuxt 3) This is ppid website from JIEP, we rebuild each element
        of PPID JIEP with fresh or modern website.
      </>
    ),
    techStacks: [
      "javascript",
      "vue",
      "nuxt",
      "bootstrap",
      "pinia",
      "tanstack-query",
    ],
  },
  {
    img: "/assets/images/portfolio/logo-jiep.png",
    width: 284,
    height: 178,
    altImg: "Jiep Record Center Admin Capture",
    project: {
      title: "JIEP Record Center",
      link: "https://recordcenter.jiep.co.id",
    },
    description: (
      <>
        (Vue 2) Helps create features (Pemusnahan, Otorisasi), debungging, etc.
      </>
    ),
    techStacks: ["javascript", "vue", "vuelidate", "bootstrap", "axios"],
  },
  {
    img: "/assets/images/portfolio/logo-jiep.png",
    width: 284,
    height: 178,
    altImg: "Jiep Record Center Customer Capture",
    project: {
      title: "JIEP Record Center (Customer)",
      link: "https://internal-rc.jiep.co.id",
    },
    description: (
      <>
        (Vue 2) Helps create features (Pemusnahan, Otorisasi), debungging, etc.
      </>
    ),
    techStacks: ["javascript", "vue", "vuelidate", "bootstrap", "axios"],
  },
  {
    img: "/assets/images/portfolio/pintar-edu.png",
    width: 768,
    height: 218,
    altImg: "LMS Pintar Edu Capture",
    project: {
      title: "LMS Pintar Edu (LMS)",
      link: "https://lms.pintaredu.id/",
    },
    description: (
      <>Maintanance (Add feature, bug fixing, improvement). This is V1</>
    ),
    techStacks: ["javascript", "react", "redux", "bootstrap", "axios"],
  },
  {
    img: "/assets/images/portfolio/pintar-edu.png",
    width: 768,
    height: 218,
    altImg: "Siswa Pintar Edu Capture",
    project: {
      title: "Siswa Pintar Edu (LMS)",
      link: "https://siswa.pintaredu.id/",
    },
    description: <>(Vue 3, Nuxt 3)Rebuild website to V2 and add more features</>,
    techStacks: [
      "javascript",
      "vue",
      "nuxt",
      "vuelidate",
      "bootstrap",
      "tanstack-query",
    ],
  },
  {
    img: "/assets/images/portfolio/pintar-edu-mobile.png",
    width: 416,
    height: 203,
    altImg: "Pintar Edu Mobile",
    project: {
      title: "PintarEdu (Mobile)",
      link: "https://play.google.com/store/apps/details?id=com.pintaredu.lms&hl=id",
    },
    description: <>This is mobile app version for LMS Siswa Pintar Edu</>,
    techStacks: ["javascript", "redux", "css", "reactNative"],
  },
  {
    img: "/assets/images/portfolio/jrku-ifg-logo.svg",
    width: 184,
    height: 64,
    unoptimized: true,
    altImg: "JRku Partner Logo",
    cardImgClassName: "bg-dark!",
    project: {
      title: "JRku Partner",
      link: "https://jrku-app.jasaraharja.co.id/partner",
    },
    description: (
      <>
        Help development cms project:
        <ul>
          <li>- Create New Feature</li>
          <li>- Bug Fixing</li>
          <li>- Improvement</li>
        </ul>
      </>
    ),
    techStacks: [
      "javascript",
      "react",
      "nextjs",
      "formik",
      "tailwindcss",
      "material-tailwindcss",
      "nanostores",
      "axios",
    ],
  },
  {
    img: "/assets/images/portfolio/tlx.jpg",
    width: 2560,
    height: 1097,
    altImg: "TLX Logo",
    cardImgClassName: "bg-dark!",
    project: {
      title: "TLX",
      link: "https://tlx.co.id/",
    },
    description: (
      <>
        Help development cms project:
        <ul>
          <li>- Create New Feature</li>
          <li>- Bug Fixing</li>
          <li>- Improvement</li>
        </ul>
      </>
    ),
    techStacks: [
      "javascript",
      "php",
      "laravel",
      "postgresql",
      "tailwindcss",
      "filamentphp",
      "alpine-js",
      "livewire",
    ],
  },
  {
    img: "/assets/images/portfolio/pnm.png",
    width: 1280,
    height: 521,
    altImg: "PNM Logo",
    project: {
      title: "PNM",
      link: "https://www.pnm.co.id/",
    },
    description: (
      <>
        Help development cms project:
        <ul>
          <li>- Create New Feature</li>
          <li>- Bug Fixing</li>
          <li>- Improvement</li>
        </ul>
      </>
    ),
    techStacks: ["javascript", "nextjs", "tailwindcss", "react"],
  },
  // {
  //   img: "/assets/images/portfolio/CJS-Team.png",
  //   width: 1280,
  //   height: 720,
  //   altImg: "Creativity Jannah Studio Capture",
  //   project: {
  //     title: "Creativity Jannah Studio",
  //     link: "https://creativity-jannah-studio.vercel.app/",
  //   },
  //   description: (
  //     <>
  //       This is my studio community with the aim of combining technology, art,
  //       and gaming to create something beautiful <strong>(jannah)</strong>.
  //     </>
  //   ),
  //   techStacks: ["lua", "robloxStudio"],
  // },
  // {
  //   img: "/assets/images/portfolio/beaconcream-escape-2.webp",
  //   width: 800,
  //   height: 450,
  //   altImg: "Beaconcream Escape 2 Capture",
  //   project: {
  //     title: "Beaconcream Escape 2",
  //     link: "https://www.roblox.com/id/games/8246593290/Beaconcream-Escape-2"
  //   },
  //   description: <>
  //     Making websites every day is boring. I needed something new, so I tried other development, and ended up making a Roblox obby story game.
  //   </>,
  //   techStacks: ['lua', 'robloxStudio'],
  // },
];
