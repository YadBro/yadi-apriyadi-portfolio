import BlobBackground from "../BlobBackground";

export default function HeroSection() {
  return (
    <>
      <section id="home" className="pt-32">
        <div className="container">
          <div className="flex flex-wrap relative lg:p-12">
            <div className="w-full self-center px-4 lg:w-1/2 absolute z-10 -bottom-10 md:bottom-0 md:static md:z-0">
              <h1 className="text-base font-extrabold drop-shadow-lg text-primary md:text-xl md:font-semibold md:drop-shadow-none">Hello Everyone 👋, I'am <span className="font-extrabold drop-shadow-lg block md:font-bold md:drop-shadow-none text-dark text-4xl mt-1 lg:text-5xl">Yadi Apriyadi</span></h1>
              <h2 className="font-extrabold drop-shadow-lg md:drop-shadow-none md:font-medium text-secondary text-lg mt-1 mb-5 lg:text-xl">Frontend Developer</h2>
              <p className="font-extrabold drop-shadow-lg md:drop-shadow-none md:font-medium text-slate-200 md:text-slate-400 mb-10 leading-relaxed">Coding, Eat, <span className="text-dark font-bold">Pray,</span> Learn, Sleep and Repeat.</p>

              <a href="#contact" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-md hover:opacity-80 hover:shadow-teal-400 transition duration-300 ease-in-out">Contact Me</a>
            </div>

            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-0 lg:right-6">
                <img src="/assets/images/yadi.png" alt="Yadi Apriyadi" className="max-w-full mx-auto scale-125 lg:scale-100" />

                <img src="/assets/images/yb_fanart.png" alt="Yadi Apriyadi" className="max-w-full absolute mx-auto -top-48 -right-24 scale-90 -z-[1] lg:scale-75 lg:-top-64 lg:-right-36" />
                <span className="absolute -bottom-5 -z-10 left-1/2 -translate-x-1/2 lg:bottom-32 md:scale-100 scale-100 lg:scale-150">
                  <BlobBackground widthBlob={400} heightBlob={400} transformBlob="scale(1.4)" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}