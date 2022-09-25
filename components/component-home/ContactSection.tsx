import { useState } from "react";


interface IEvent {
  preventDefault(): void,
}

export default function ContactSection() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const ButtonMailto = (e: IEvent) => {
    if (name === '' || subject === '' || message === '' || email === '') {
      e.preventDefault();
      return setError('Please input required field!');
    }else {
      e.preventDefault();
      window.location.href = `mailto:yadiapriyadi676@gmail.com?subject=${subject}&body=Hello my name is ${name}, ${message}`;
    }
  };

  return (
    <>
      <section id="contact" className="pt-36 pb-32">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-xl text-primary mb-2">Contact</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Contact Me</h2>
            </div>
          </div>

          <form>
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full mb-8 px-4">
                <label htmlFor="name" className="text-base text-primary font-bold">Name<span className="text-red-600">*</span></label>
                <input onChange={(e) => {setName(e.target.value); setError('')}} autoComplete="off" type="text" id="name" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="w-full mb-8 px-4">
                <label htmlFor="email" className="text-base text-primary font-bold">Email<span className="text-red-600">*</span></label>
                <input onChange={(e) => {setEmail(e.target.value); setError('')}} autoComplete="off" type="email" id="email" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="w-full mb-8 px-4">
                <label htmlFor="subject" className="text-base text-primary font-bold">Subject<span className="text-red-600">*</span></label>
                <input onChange={(e) => {setSubject(e.target.value); setError('')}} autoComplete="off" type="text" id="subject" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
              </div>
              <div className="w-full mb-8 px-4">
                <label htmlFor="message" className="text-base text-primary font-bold">Message<span className="text-red-600">*</span></label>
                <textarea onChange={(e) => {setMessage(e.target.value); setError('')}} autoComplete="off" id="message" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"></textarea>
              </div>
              {/* Submit */}
              <div className="w-full px-4">
                {error && <p className="text-red-600">{error}</p> }
                <button className="w-full text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:opacity-80 hover:shadow-lg transition duration-500" type="submit" onClick={ButtonMailto}>
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