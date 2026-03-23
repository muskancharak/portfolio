
import myImage from "../assets/img.jpeg";


export const AboutMe = () => {
  
    return(
        <><div className="mt-10">
          
            <span className=" text-xl text-blue-700">Get To Know Me </span>
            <h1 className="text-6xl font-bold mt-5">About Me</h1>
        </div>
        <div className="flex items-center rounded-xl mt-10 max-w-6xl mx-auto overflow-hidden h-200
        border border-white shadow-lg ring-1 ring-black/10 text-center">

  {/* Left - Image */}
  <div className="w-2/5">
    <img
      src={myImage}
      alt="profile"
      className="w-full h-[800px] object-cover w-50"
    />
  </div>

  {/* Right - Text */}
  <div className="w-3/5 p-8 mt-10">
   <div className="bg-blue-200 text-blue-700 text-sm px-3 py-4 rounded-full w-fit mb-10 font-2xl">
  Available for opportunities
</div>

    <h1 className="text-3xl font-bold mb-8 mr-130">Hello!</h1>

    <p className="text-gray-600 text-lg leading-relaxed">
      My name is Muskan, and I have around one year of experience working with modern web technologies including Node.js, Express.js, MongoDB, and React.js.
      <br /><br />
      I have experience building RESTful APIs using Node.js and Express and implementing secure authentication using JWT. I have also worked in a Linux environment and have hands-on experience developing full-stack applications using the MERN stack.
      <br /><br />
      Currently, I am looking for an opportunity as a MERN Stack Developer or Node.js Developer where I can apply my skills and continue growing as a developer.
      <br/><br/>
      Keep scrolling to see my past projects, skills and experience.
    </p>
    <div className="mt-10">
      <a href = "../../public/Muskan CV - MERN Stack (1) (1) (1).pdf">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl h-15
            w-50 mr-10">
            Download CV
            </button>
      </a>
            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl mt-5 h-15
            w-50">
            Get In touch
            </button> */}
    </div>
  </div>
   
</div>

       </>
    )
}