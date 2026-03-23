

// export const NavBar = ({ scrollToSection, refs }: any) => {
//   return (
//   <nav className="top-0 bg-gradient-to-r from-pink-100 via-orange-100 to-yellow-100 max-w-md mx-auto text-[#64748b] p-2 flex justify-between rounded-2xl shadow-lg text-center mb-5">

//       <ul className="flex gap-4 items-center text-sm">

//         <li>
//           <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
//             m
//           </div>
//         </li>

//         <li onClick={() => scrollToSection(refs.aboutRef)} className="cursor-pointer ml-3">
//           About
//         </li>

//         <li onClick={() => scrollToSection(refs.experienceRef)} className="cursor-pointer">
//           Experience
//         </li>

//         <li onClick={() => scrollToSection(refs.projectsRef)} className="cursor-pointer">
//           Projects
//         </li>

//         <li onClick={() => scrollToSection(refs.skillRef)} className="cursor-pointer">
//           Skills
//         </li>

//         <li onClick={() => scrollToSection(refs.contactRef)} className="cursor-pointer">
//           Contact
//         </li>

//       </ul>
//     </nav>
//   );
// };

import { useState } from "react";

export const NavBar = ({ scrollToSection, refs }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (ref: any) => {
    scrollToSection(ref);
    setIsOpen(false); // close menu on mobile after click
  };

  return (
    <nav className="top-0 bg-gradient-to-r from-pink-100 via-orange-100 to-yellow-100 max-w-md mx-auto text-[#64748b] p-2 flex justify-between items-center rounded-2xl shadow-lg mb-5 relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
          m
        </div>
        <span className="font-semibold text-sm md:hidden">Menu</span>
      </div>

      {/* Hamburger for mobile */}
      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="w-6 h-6 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </div>

      {/* Menu items */}
      <ul
        className={`flex flex-col md:flex-row gap-4 items-center text-sm absolute md:static top-full left-0 w-full md:w-auto bg-gradient-to-r from-pink-100 via-orange-100 to-yellow-100 md:bg-transparent p-4 md:p-0 rounded-b-2xl shadow-md md:shadow-none transition-all duration-300 ${
          isOpen ? "block" : "hidden md:flex"
        }`}
      >
        <li onClick={() => handleClick(refs.aboutRef)} className="cursor-pointer">
          About
        </li>
        <li onClick={() => handleClick(refs.experienceRef)} className="cursor-pointer">
          Experience
        </li>
        <li onClick={() => handleClick(refs.projectsRef)} className="cursor-pointer">
          Projects
        </li>
        <li onClick={() => handleClick(refs.skillRef)} className="cursor-pointer">
          Skills
        </li>
        <li onClick={() => handleClick(refs.contactRef)} className="cursor-pointer">
          Contact
        </li>
      </ul>
    </nav>
  );
};