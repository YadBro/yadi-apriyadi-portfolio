import PortfolioItem from "../PortfolioItem";
import { portfolioItems } from "@/lib/portfolio-data";

export default function PortfolioSection() {
  return (
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
          {portfolioItems.map((item, i) => (
            <PortfolioItem
              key={`portfolio-item-${i}`}
              img={item.img}
              width={item.width}
              height={item.height}
              unoptimized={item.unoptimized}
              project={item.project}
              altImg={item.altImg}
              techStacks={item.techStacks}
              cardImgClassName={item.cardImgClassName}
            >
              {item.description}
            </PortfolioItem>
          ))}
        </div>
        <div className="flex justify-center thickness-link">
          <a
            href="https://www.linkedin.com/in/yadi-apriyadi/details/featured/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            More...
          </a>
        </div>
      </div>
    </section>
  );
}
