export default function PortfolioSection() {
  return (
    <>
      <section id="portfolio" className="pt-32 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-14">
              <h4 className="font-semibold text-xl text-primary mb-2">Portfolio</h4>
              {/* Only for new projects */}
              {/* <h2 className="font-bold text-dark text-3xl mb-4">New Projects</h2>
              <p className="font-medium text-medium text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis impedit consequuntur, optio ut earum quod numquam ullam nisi necessitatibus est.</p> */}
            </div>
          </div>

          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src="/assets/images/portfolio/waysbeans.png" alt="E-Commerce" className="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3"><a href="https://waysbeans-by-yadi.netlify.app/" target="_blank" rel="noreferrer" className="thickness-link">WaysBeans</a></h3>
              <p className="font-medium text-base text-secondary text-justify">This is my task result from <a href="https://dumbways.id/" target="_blank" rel="noreferrer" className="text-blue-600">Dumbways Id</a>. - E-Commerce Web App</p>
            </div>
            
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src="/assets/images/portfolio/npm.png" alt="npm" className="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3"><a href="https://www.npmjs.com/package/expostsql-queries" target="_blank" rel="noreferrer" className="thickness-link">expostsql-queries</a></h3>
              <p className="font-medium text-base text-secondary text-justify">My First Package Manager Project, this is a package module for querying the postgresql database in Framework EXPRESSjs such a eloquent orm in Laravel.</p>
            </div>

            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src="/assets/images/portfolio/jewel.jpg" alt="Landing Page" className="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3"><a href="https://codepen.io/yadbro/full/ExQarJx" target="_blank" rel="noreferrer" className="thickness-link">Jewel - Landing Page</a></h3>
              <p className="font-medium text-base text-secondary text-justify">This is a landing page that I made without using any framework, and is also a challenge from Responsive Web Design FreeCodeCamp.
However, the challenge looks different because something has to be added to complete the test.</p>
            </div>

            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src="/assets/images/portfolio/mobile-app.png" alt="Mobile App Image" className="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3"><a href="https://drive.google.com/file/d/1RiIW9FKMNFHVo1swDvKwzgGLedmkT4YB/view?usp=sharing" target="_blank" rel="noreferrer" className="thickness-link">Dumbways (Mobile App)</a></h3>
              <p className="font-medium text-base text-secondary text-justify">This is my task result from <a href="https://dumbways.id/" target="_blank" rel="noreferrer" className="text-blue-600">Dumbways Id</a>. - Mobile App</p>
            </div>

            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src="/assets/images/portfolio/css-layout.png" alt="Technical Document Page Image" className="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3"><a href="https://codepen.io/yadbro/full/NWyPyMY" target="_blank" rel="noreferrer" className="thickness-link">Technical Document Page</a></h3>
              <p className="font-medium text-base text-secondary text-justify">This is a Technical document page that I made without using any framework, and is also a challenge from Responsive Web Design FreeCodeCamp.</p>
            </div>

          </div>
          <div className="flex justify-center thickness-link">
            <a href="https://www.linkedin.com/in/yadi-apriyadi/details/featured/" target="_blank" rel="noreferrer" className="text-blue-600">More...</a>
          </div>
        </div>
      </section>
    </>
  )
}