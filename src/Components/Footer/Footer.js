import React from "react";
import { Link } from "react-router-dom";
import Scroll from "react-scroll";
// import style from './Footer.module.css'
// import { div } from 'react-router-dom'

function Footer() {
  const goToAbout = async () => {
    var scroller = Scroll.scroller;
    await new Promise((r) => setTimeout(r, 500));
    scroller.scrollTo("about", { smooth: true, offset: -80, duration: 200 });
  };
  return (
    <footer className="dark:bg-opacity-60 backdrop-blur-lg backdrop-filter bg-neutral-900 dark:bg-neutral-900 w-screen">
      <div className="md:grid grid-cols-3 gap-5 py-8 px-5 md:grid-cols-3">
        {/* Social media handles */}
        <div className="block md:hidden mb-12">
          <div classNameName="md:flex md:items-center md:justify-center">
            <div className="text-white mx-auto mb-5 mt-7">Follow Us</div>
          </div>
          <div className="flex md:space-x-4 space-x-3 justify-center md:justify-center md:mt-0">
            <a
              href="https://www.facebook.com/codingninjasSRM/"
              className="text-orange-700 hover:text-white"
            >
              <svg
                className="md:w-8 md:h-8 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://medium.com/@cnsrm"
              className="text-orange-700 hover:text-white"
            >
             <svg
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-8 md:h-8 w-6 h-6"
          fill="currentColor"
          viewBox="0 0 50 50"
          aria-hidden="true"
        >
          <path d="M15 14c6.065 0 11 4.935 11 11s-4.935 11-11 11S4 31.065 4 25 8.935 14 15 14M15 12C7.82 12 2 17.82 2 25s5.82 13 13 13 13-5.82 13-13S22.18 12 15 12L15 12zM35.5 15c2.124 0 4.5 4.277 4.5 10s-2.376 10-4.5 10S31 30.723 31 25 33.376 15 35.5 15M35.5 13c-3.59 0-6.5 5.373-6.5 12s2.91 12 6.5 12S42 31.627 42 25 39.09 13 35.5 13L35.5 13zM46.377 15.667h.005H46.377M45.5 18.577C45.78 20.158 46 22.327 46 25s-.22 4.842-.5 6.423C45.22 29.842 45 27.673 45 25S45.22 20.158 45.5 18.577M45.5 14c-1.381 0-2.5 4.925-2.5 11s1.119 11 2.5 11S48 31.075 48 25 46.881 14 45.5 14L45.5 14z"></path>
        </svg>
              <span className="sr-only">Medium page</span>
            </a>
            <a
              href="https://mobile.twitter.com/ninjassrm"
              className="text-orange-700 hover:text-white"
            >
              <svg
                className="md:w-8 md:h-8 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="https://in.linkedin.com/company/coding-ninjas-club-srm"
              className="text-orange-700 hover:text-white"
            >
              <svg
                fill="currentColor"
                className=" md:w-8 md:h-8 w-6 h-6 bi bi-divedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
              <span className="sr-only">LinkedIn page</span>
            </a>
          </div>
        </div>
        {/* Useful divs */}
        <div>
          <h2 className="mb-6 text-sm font-bold text-orange-700  dark:text-orange-700">
            Useful Links
          </h2>
          <ul className="text-white dark:text-white">
            <li className="mb-4">
              <Link to="/" className="" onClick={goToAbout}>
                About
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/domains">Domains</Link>
            </li>
            <li className="mb-4">
              <Link to="/team" className="">
                Team
              </Link>
            </li>
            <li className="mb-4">
              <a href="https://medium.com/@cnsrm" className="">
                Medium
              </a>
            </li>
          </ul>
        </div>
        {/* Social media handles */}
        <div className="hidden md:block">
          <div classNameName="md:flex md:items-center md:justify-center">
            <div className="text-white mx-auto mb-5 mt-7">Follow Us</div>
          </div>
          <div className="flex md:space-x-4 space-x-3 justify-center md:justify-center md:mt-0">
            <a
              href="https://www.facebook.com/codingninjasSRM/"
              className="text-orange-700 hover:text-white"
            >
              <svg
                className="md:w-8 md:h-8 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://medium.com/@cnsrm"
              className="text-orange-700 hover:text-white"
            >
             <svg
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-8 md:h-8 w-6 h-6"
          fill="currentColor"
          viewBox="0 0 50 50"
          aria-hidden="true"
        >
          <path d="M15 14c6.065 0 11 4.935 11 11s-4.935 11-11 11S4 31.065 4 25 8.935 14 15 14M15 12C7.82 12 2 17.82 2 25s5.82 13 13 13 13-5.82 13-13S22.18 12 15 12L15 12zM35.5 15c2.124 0 4.5 4.277 4.5 10s-2.376 10-4.5 10S31 30.723 31 25 33.376 15 35.5 15M35.5 13c-3.59 0-6.5 5.373-6.5 12s2.91 12 6.5 12S42 31.627 42 25 39.09 13 35.5 13L35.5 13zM46.377 15.667h.005H46.377M45.5 18.577C45.78 20.158 46 22.327 46 25s-.22 4.842-.5 6.423C45.22 29.842 45 27.673 45 25S45.22 20.158 45.5 18.577M45.5 14c-1.381 0-2.5 4.925-2.5 11s1.119 11 2.5 11S48 31.075 48 25 46.881 14 45.5 14L45.5 14z"></path>
        </svg>
              <span className="sr-only">Medium Page</span>
            </a>
            <a
              href="https://mobile.twitter.com/ninjassrm"
              className="text-orange-700 hover:text-white"
            >
              <svg
                className="md:w-8 md:h-8 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="https://in.linkedin.com/company/coding-ninjas-club-srm"
              className="text-orange-700 hover:text-white"
            >
              <svg
                fill="currentColor"
                className=" md:w-8 md:h-8 w-6 h-6 bi bi-divedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
              <span className="sr-only">LinkedIn page</span>
            </a>
          </div>
        </div>
        {/* Services */}
        <div>
          <h2 className="mb-6 text-sm font-bold text-gray-500  dark:text-orange-700">
            Domains
          </h2>
          <div className="flex items-center justify-center gap-10 ">
            <ul className="text-white dark:text-white">
              <li className="mb-4">
                <Link to="/technical/aiml" className="">
                  AI/ML
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/technical/appdev" className="">
                  App Dev
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/technical/webdev" className="">
                  Web Dev
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/technical/webdev" className="">
                  CP
                </Link>
              </li>

            </ul>
            <ul className="text-white dark:text-white">
              <li className="mb-4">
                <Link to="/nontechnical/corporate" className="">
                  Corporate
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/nontechnical/creative" className="">
                  Creative
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/nontechnical/editorial" className="">
                  Editorial
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/nontechnical/sponsorship" className="">
                  Sponsorship
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>

      {/* Copyrights */}
      <div classNameName="dark:bg-neutral-800 dark:bg-opacity-30">
        <div className="mt-7 pt-4 pb-4 text-sm text-white dark:text-stone-200 sm:text-center text-light">
          © 2023 <a href="/">Coding Ninjas SRM™</a>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
