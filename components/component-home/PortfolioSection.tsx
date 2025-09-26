import PortfolioItem, { PortfolioItemProps } from "../PortfolioItem";

export default function PortfolioSection() {
  const portfolio: Array<PortfolioItemProps> = [
    {
      img: "/assets/images/portfolio/waysbeans.png",
      altImg: "Waysbeans Capture",
      project: {
        title: "Waysbeans",
        link: "https://waysbeans-by-yadi.netlify.app/",
      },
      children: (
        <>
          This is my task result from{" "}
          <a
            href="https://dumbways.id/"
            target="_blank"
            rel="noreferrer"
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
      altImg: "NPM Exposql-Queries Capture",
      project: {
        title: "expostsql-queries",
        link: "https://www.npmjs.com/package/expostsql-queries",
      },
      children: (
        <>
          My First Package Manager Project, this is a package module for
          querying the postgresql database in Framework EXPRESSjs such a
          eloquent orm in Laravel.
        </>
      ),
      techStacks: ["javascript", "postgresql", "nodejs"],
    },
    {
      img: "/assets/images/portfolio/jewel.jpg",
      altImg: "Jewel Capture",
      project: {
        title: "Jewel - Landing Page",
        link: "https://codepen.io/yadbro/full/ExQarJx",
      },
      children: (
        <>
          This is a landing page that I made without using any framework, and is
          also a challenge from Responsive Web Design FreeCodeCamp. However, the
          challenge looks different because something has to be added to
          complete the test.
        </>
      ),
      techStacks: ["html", "css", "javascript"],
    },
    {
      img: "/assets/images/portfolio/mobile-app.png",
      altImg: "Mobile App Dumbways Capture",
      project: {
        title: "Dumbways (Mobile App)",
        link: "https://drive.google.com/file/d/1RiIW9FKMNFHVo1swDvKwzgGLedmkT4YB/view?usp=sharing",
      },
      children: (
        <>
          This is my task result from{" "}
          <a
            href="https://dumbways.id/"
            target="_blank"
            rel="noreferrer"
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
      altImg: "Technical Documentation Capture",
      project: {
        title: "Technical Document Page",
        link: "https://codepen.io/yadbro/full/NWyPyMY",
      },
      children: (
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
      altImg: "JIEP Capture",
      project: {
        title: "JIEP",
        link: "https://jiep.co.id/",
      },
      children: (
        <>
          (Vue 3, Nuxt 3) This is main website from JIEP, we rebuild each
          element of JIEP with fresh or modern website.
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
      altImg: "PPID JIEP Capture",
      project: {
        title: "PPID JIEP",
        link: "https://ppid.jiep.co.id/",
      },
      children: (
        <>
          (Vue 3, Nuxt 3) This is ppid website from JIEP, we rebuild each
          element of PPID JIEP with fresh or modern website.
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
      altImg: "Jiep Record Center Admin Capture",
      project: {
        title: "JIEP Record Center",
        link: "https://recordcenter.jiep.co.id",
      },
      children: (
        <>
          (Vue 2) Helps create features (Pemusnahan, Otorisasi), debungging,
          etc.
        </>
      ),
      techStacks: ["javascript", "vue", "vuelidate", "bootstrap", "axios"],
    },
    {
      img: "/assets/images/portfolio/logo-jiep.png",
      altImg: "Jiep Record Center Customer Capture",
      project: {
        title: "JIEP Record Center (Customer)",
        link: "https://internal-rc.jiep.co.id",
      },
      children: (
        <>
          (Vue 2) Helps create features (Pemusnahan, Otorisasi), debungging,
          etc.
        </>
      ),
      techStacks: ["javascript", "vue", "vuelidate", "bootstrap", "axios"],
    },
    {
      img: "/assets/images/portfolio/pintar-edu.png",
      altImg: "LMS Pintar Edu Capture",
      project: {
        title: "LMS Pintar Edu (LMS)",
        link: "https://lms.pintaredu.id/",
      },
      children: (
        <>Maintanance (Add feature, bug fixing, improvement). This is V1</>
      ),
      techStacks: ["javascript", "react", "redux", "bootstrap", "axios"],
    },
    {
      img: "/assets/images/portfolio/pintar-edu.png",
      altImg: "Siswa Pintar Edu Capture",
      project: {
        title: "Siswa Pintar Edu (LMS)",
        link: "https://siswa.pintaredu.id/",
      },
      children: <>(Vue 3, Nuxt 3)Rebuild website to V2 and add more features</>,
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
      altImg: "Pintar Edu Mobile",
      project: {
        title: "PintarEdu (Mobile)",
        link: "https://play.google.com/store/apps/details?id=com.pintaredu.lms&hl=id",
      },
      children: <>This is mobile app version for LMS Siswa Pintar Edu</>,
      techStacks: ["javascript", "redux", "css", "reactNative"],
    },
    {
      img: "/assets/images/portfolio/jrku-ifg-logo.svg",
      altImg: "JRku Partner Logo",
      cardImgClassName: "!bg-dark",
      project: {
        title: "JRku Partner",
        link: "https://jrku-app.jasaraharja.co.id/partner",
      },
      children: (
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
      altImg: "TLX Logo",
      cardImgClassName: "!bg-dark",
      project: {
        title: "TLX",
        link: "https://tlx.co.id/",
      },
      children: (
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
      img: "/assets/images/portfolio/CJS-Team.png",
      altImg: "Creativity Jannah Studio Capture",
      project: {
        title: "Creativity Jannah Studio",
        link: "https://creativity-jannah-studio.vercel.app/",
      },
      children: (
        <>
          This is my studio community with the aim of combining technology, art,
          and gaming to create something beautiful <strong>(jannah)</strong>.
        </>
      ),
      techStacks: ["lua", "robloxStudio"],
    },
    // {
    //   img: "/assets/images/portfolio/beaconcream-escape-2.webp",
    //   altImg: "Beaconcream Escape 2 Capture",
    //   project: {
    //     title: "Beaconcream Escape 2",
    //     link: "https://www.roblox.com/id/games/8246593290/Beaconcream-Escape-2"
    //   },
    //   children: <>
    //     Making websites every day is boring. I needed something new, so I tried other development, and ended up making a Roblox obby story game.
    //   </>,
    //   techStacks: ['lua', 'robloxStudio'],
    // },
  ];

  return (
    <>
      <section id="portfolio" className="pt-32 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-14">
              <h4 className="font-semibold text-xl text-primary mb-2">
                Portfolio
              </h4>
              {/* Only for new projects */}
              {/* <h2 className="font-bold text-dark text-3xl mb-4">New Projects</h2>
              <p className="font-medium text-medium text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis impedit consequuntur, optio ut earum quod numquam ullam nisi necessitatibus est.</p> */}
            </div>
          </div>

          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            {portfolio.map((p, i) => (
              <PortfolioItem
                key={`porfolio-item-${i}`}
                img={p.img}
                project={p.project}
                altImg={p.altImg}
                techStacks={p.techStacks}
                cardImgClassName={p?.cardImgClassName}
              >
                {p.children}
              </PortfolioItem>
            ))}
          </div>
          <div className="flex justify-center thickness-link">
            <a
              href="https://www.linkedin.com/in/yadi-apriyadi/details/featured/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600"
            >
              More...
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
