

export const NavBar = ({ scrollToSection, refs }: any) => {
  return (
  <nav className="top-0 bg-gradient-to-r from-pink-100 via-orange-100 to-yellow-100 max-w-md mx-auto text-[#64748b] p-2 flex justify-between rounded-2xl shadow-lg text-center mb-5">

      <ul className="flex gap-4 items-center text-sm">

        <li>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
            m
          </div>
        </li>

        <li onClick={() => scrollToSection(refs.aboutRef)} className="cursor-pointer ml-3">
          About
        </li>

        <li onClick={() => scrollToSection(refs.experienceRef)} className="cursor-pointer">
          Experience
        </li>

        <li onClick={() => scrollToSection(refs.projectsRef)} className="cursor-pointer">
          Projects
        </li>

        <li onClick={() => scrollToSection(refs.skillRef)} className="cursor-pointer">
          Skills
        </li>

        <li onClick={() => scrollToSection(refs.contactRef)} className="cursor-pointer">
          Contact
        </li>

      </ul>
    </nav>
  );
};