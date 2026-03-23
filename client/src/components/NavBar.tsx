

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


// import { useState } from "react";

// export const NavBar = ({ scrollToSection, refs }: any) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = (ref: any) => {
//     scrollToSection(ref); // scroll to section
//     setIsOpen(false); // close mobile menu after click
//   };

//   return (
//     <nav className="sticky top-0 z-50 max-w-md mx-auto bg-gradient-to-r from-pink-100 via-orange-100 to-yellow-100 p-2 flex justify-between items-center rounded-2xl shadow-lg mb-5">

//       {/* Logo */}
//       <div className="flex items-center gap-2">
//         <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
//           m
//         </div>
//       </div>

//       {/* Hamburger for mobile */}
//       <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//         <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//             d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//         </svg>
//       </div>

//       {/* Menu */}
//       <ul className={`flex flex-col md:flex-row gap-4 items-center text-sm md:flex ${isOpen ? "block" : "hidden md:flex"} absolute md:static top-full left-0 w-full md:w-auto bg-gradient-to-r from-pink-100 via-orange-100 to-yellow-100 md:bg-transparent p-4 md:p-0 rounded-b-2xl md:rounded-none shadow-md md:shadow-none transition-all duration-300`}>
//         <li onClick={() => handleClick(refs.aboutRef)} className="cursor-pointer ml-3 hover:text-pink-600">
//           About
//         </li>
//         <li onClick={() => handleClick(refs.experienceRef)} className="cursor-pointer hover:text-orange-600">
//           Experience
//         </li>
//         <li onClick={() => handleClick(refs.projectsRef)} className="cursor-pointer hover:text-yellow-600">
//           Projects
//         </li>
//         <li onClick={() => handleClick(refs.skillRef)} className="cursor-pointer hover:text-purple-600">
//           Skills
//         </li>
//         <li onClick={() => handleClick(refs.contactRef)} className="cursor-pointer hover:text-pink-600">
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
    setIsOpen(false); // close menu on click
  };

  return (
    <nav className="top-0 bg-gradient-to-r from-pink-100 via-orange-100 to-yellow-100 max-w-md mx-auto text-[#64748b] p-2 flex justify-between items-center rounded-2xl shadow-lg text-center mb-5 relative">

      {/* Logo */}
      <div className="flex items-center">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
          m
        </div>
      </div>

      {/* Hamburger for mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-700"></div>
        </button>
      </div>

      {/* Menu Items */}
      <ul className={`flex-col md:flex-row md:flex gap-4 items-center mr-12 text-sm absolute md:static top-full left-0 w-full md:w-auto bg-gradient-to-r from-pink-100 via-orange-100 to-yellow-100 md:bg-transparent rounded-2xl md:rounded-none p-4 md:p-0 transition-all duration-300 ease-in ${
        isOpen ? "flex" : "hidden md:flex"
      }`}>
        <li onClick={() => handleClick(refs.aboutRef)} className="cursor-pointer">About</li>
        <li onClick={() => handleClick(refs.experienceRef)} className="cursor-pointer">Experience</li>
        <li onClick={() => handleClick(refs.projectsRef)} className="cursor-pointer">Projects</li>
        <li onClick={() => handleClick(refs.skillRef)} className="cursor-pointer">Skills</li>
        <li onClick={() => handleClick(refs.contactRef)} className="cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};