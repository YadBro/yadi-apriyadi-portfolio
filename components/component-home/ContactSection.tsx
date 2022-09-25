export default function ContactSection() {
  return (
    <>
      <section id="contact" className="pt-36 pb-32">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-xl text-primary mb-2">Contact</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Contact Me</h2>
              {/* <p className="font-medium text-base text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis impedit consequuntur, optio ut earum quod numquam ullam nisi necessitatibus est.</p> */}
            </div>
          </div>

          <form>
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full mb-8 px-4">
                <label htmlFor="name" className="text-base text-primary font-bold">Name</label>
                <input autoComplete="on" type="text" id="name" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="w-full mb-8 px-4">
                <label htmlFor="email" className="text-base text-primary font-bold">Email</label>
                <input autoComplete="on" type="email" id="email" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="w-full mb-8 px-4">
                <label htmlFor="message" className="text-base text-primary font-bold">Message</label>
                <textarea autoComplete="on" id="message" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"></textarea>
              </div>
              {/* Submit */}
              <div className="w-full px-4">
                <button className="w-full text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:opacity-80 hover:shadow-lg transition duration-500">
                  Send
                </button>
              </div>
            </div>
          </form>

        </div>
      </section>
    </>
  )
}