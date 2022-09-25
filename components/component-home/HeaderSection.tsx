import { useEffect, useRef, useState } from "react";


export default function HeaderSection() {

  const [on, setOn] = useState(true);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const hamburgerToggle = () => {
    const buttonNode = hamburgerButtonRef.current;
    const navNode = navRef.current;
    setOn(!on);

    if (on) {
      buttonNode !== null && buttonNode.classList.add('hamburger-active');
      navNode !== null && navNode.classList.remove('hidden');
    }else {
      buttonNode !== null && buttonNode.classList.remove('hamburger-active');
      navNode !== null && navNode.classList.add('hidden');
    }
  }

  return (
    <>
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-8">
              <a href="#home" className="font-bold text-lg text-primary block py-6"><img src="/assets/images/maskot.png" width={40} alt="maskot" /></a>
            </div>
            <div className="flex items-center px-4">
              <button id="hamburger" ref={hamburgerButtonRef} type="button" className="block absolute right-4 lg:hidden" onClick={hamburgerToggle}>
                <span className="hamburger-line origin-top-left"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line origin-bottom-left"></span>
              </button>

              <nav id="nav-menu" className="hidden absolute bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none" ref={navRef}>
                <ul className="block lg:flex">
                  <li className="group py-3 mx-8">
                    <a href="#home" className="text-base text-dark group-hover:text-primary">Home</a>
                  </li>
                  <li className="group py-3 mx-8">
                    <a href="#about" className="text-base text-dark group-hover:text-primary">About</a>
                  </li>
                  <li className="group py-3 mx-8">
                    <a href="#portfolio" className="text-base text-dark group-hover:text-primary">Portfolio</a>
                  </li>
                  <li className="group py-3 mx-8">
                    <a href="https://www.linkedin.com/in/yadi-apriyadi/details/certifications/" target="_blank" rel="noreferrer" className="text-base text-dark group-hover:text-primary">Certifications</a>
                  </li>
                  <li className="group py-3 mx-8">
                    <a href="#skills" className="text-base text-dark group-hover:text-primary">Skills</a>
                  </li>
                  <li className="group py-3 mx-8">
                    <a href="#achievement" className="text-base text-dark group-hover:text-primary">Achievement</a>
                  </li>
                  <li className="group py-3 mx-8">
                    <a href="#contact" className="text-base text-dark group-hover:text-primary">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}