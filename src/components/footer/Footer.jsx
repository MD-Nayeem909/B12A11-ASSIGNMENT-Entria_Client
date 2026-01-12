import React from "react";
import { Facebook } from "lucide-react";
import LogoIcon from "../common/LogoIcon";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-base-100 text-base-content p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4">
          <LogoIcon />
          <p className="text-sm leading-relaxed">
            Innovating for a better tomorrow. We are committed to delivering
            high-quality solutions that empower businesses and individuals.
          </p>
          <div className="flex space-x-5 pt-2">
            <a
              href="https://github.com/MD-Nayeem909"
              target="_blank"
              rel="noreferrer"
              className=" hover:text-blue-600 dark:text-gray-400 dark:hover:text-teal-400 transition-transform transform hover:scale-110"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.facebook.com/S.D.MD.Nayeem/"
              target="_blank"
              rel="noreferrer"
              className=" hover:text-blue-600 dark:text-gray-400 dark:hover:text-teal-400 transition-transform transform hover:scale-110"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-nayeem98/"
              target="_blank"
              rel="noreferrer"
              className=" hover:text-blue-600 dark:text-gray-400 dark:hover:text-teal-400 transition-transform transform hover:scale-110"
            >
              <FaLinkedinIn size={28} />
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="/"
                className=" hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Resources</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className=" hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="#faqs"
                className=" hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Contact Us</h3>
          <p className="">Chittagong, Bangladesh</p>
          <p className="">Email: mdnayeemuddin909@gmail.com</p>
          <p className="">Phone: +880 1518 966 045</p>
        </div>
      </div>
      <div className="text-center text-sm p-5 mt-10 border-t border-base-300">
        <p>
          &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
        </p>
        <p className="mt-1 font-medium">
          Designed with <span className="text-red-500">&hearts;</span> by ENTRIA
        </p>
      </div>
    </footer>
  );
};
export default Footer;
