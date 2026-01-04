import {
  YoutubeIcon,
  InstagramIcon,
  LinkedInIcon,
  GithubIcon,
  RobloxIcon,
} from "../component-icon";

export default function AboutSection() {
  return (
    <>
      <section id="about" className="pt-28 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-primary text-xl mb-3">
                About Me
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 max-w-md lg:text-4xl">
                More and more to learn!
              </h2>
              <p className="font-medium text-base text-secondary max-w-xl lg:text-lg text-justify">
                I am Yadi Apriyadi, a Mid To Senior Programmer with more than 3
                year experience. I am a hard worker with experience building
                simple web applications to complex web applications. With this
                experience I have succeeded in creating website-based
                applications such as e-commerce applications, student data
                management applications, etc.
              </p>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-11">
                Connect with me
              </h3>
              <p className="font-medium text-base text-secondary mb-6 lg:text-lg text-justify">
                These are my social media which you can connect by following
                this one.
              </p>
              <div className="flex items-center">
                {/* These icon by icon8 https://icons8.com */}
                <LinkedInIcon />
                <GithubIcon />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
