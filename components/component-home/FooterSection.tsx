import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  RobloxIcon,
  YoutubeIcon,
} from '../component-icon';

export default function FooterSection() {
  return (
    <>
      <footer className="bg-dark pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap mx-auto w-full lg:w-4/5 justify-between pb-10">
            <div className="px-4 text-slate-300 font-medium leading-relaxed self-end">
              <h2 className="font-bold text-4xl text-white mb-5">
                Yadi Apriyadi
              </h2>
              <h3 className="font-bold text-2xl mb-2">Contact Me</h3>
              <p>yadi042003@gmail.com</p>
              <p>+62 812-8918-0522</p>
              <p>Indonesia, Cimahi City</p>
            </div>
            <div className="pt-24 lg:px-8 px-4 self-end text-white">
              <div className="flex justify-between mb-5">
                {/* These icon by icon8 https://icons8.com */}
                <YoutubeIcon />
                <InstagramIcon />
                <LinkedInIcon />
                <GithubIcon />
                <RobloxIcon />
              </div>
              <div className="text-left md:text-right">
                Made With 💖 By{' '}
                <span className="text-primary">Yadi Apriyadi</span>.<br /> and
                use tools{' '}
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600"
                >
                  NextJs
                </a>
                ,{' '}
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-500"
                >
                  TailwindCSS
                </a>
                ,{' '}
                <a
                  target="_blank"
                  className="text-green-600"
                  href="https://icons8.com"
                >
                  Icons8
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
