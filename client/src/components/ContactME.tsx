
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export const ContactMe = () => {
   
    return(
        <>
        <div className="mt-30">
            <span className="text-blue-600 font-bold">LET'S CONNECT</span>
            <h1 className="font-bold text-4xl mt-5">CONTACT ME</h1>
            <p className="mt-5 text-black-600 text-lg">Let's work together on your next project</p>
        </div>
      <div className="flex flex-col gap-20">
 <div className="border border-white shadow-2xl ring-1 ring-black/10 w-[480px] h-[400px] rounded-lg mt-10 ml-100 p-6 ">
  <span className="block mt-2 font-bold text-2xl">GET IN TOUCH</span>

  <p className="mt-5 text-gray-800">
    Feel free to reach out. I'm always open to <br />
    discussing new projects and opportunities.
  </p>

  {/* Contact Info with Icons */}
  <div className="mt-6 space-y-4">

    <div className="flex items-center gap-3">
      <MdEmail className="text-xl text-red-500" />
      <p>muskancharak165@gmail.com</p>
    </div>

    <div className="flex items-center gap-3">
      <FaPhoneAlt className="text-xl text-green-500" />
      <p>+91 7626952810</p>
    </div>

    <div className="flex items-start gap-3">
      <FaLinkedin className="text-xl text-blue-500 mt-1" />
      <a
        href="https://www.linkedin.com/in/muskan-67421b365"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline break-all"
      >
        https://www.linkedin.com/in/muskan-67421b365
      </a>
    </div>

    <div className="flex items-start gap-3">
      <FaGithub className="text-xl mt-1" />
      <div className="flex flex-col break-all">
        <a
          href="https://github.com/muskancharak/goodEats.git"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          https://github.com/muskancharak/goodEats.git
        </a>
        <a
          href="https://github.com/muskancharak/FirebaseChatWeb.git"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          https://github.com/muskancharak/FirebaseChatWeb.git
        </a>
      </div>
    </div>

  </div>
</div>
</div>



        </>
    )
}