

export const Skills = () => {
    const cardStyle = "border border-white shadow-2xl ring-1 ring-black/10 w-35 h-35 rounded-2xl mt-15 ml-20 flex flex-col items-center justify-center";
    return(
        <>
        <div className="mt-30">
            <span className="text-blue-600 font-bold">MY TOOLKIT</span>
            <h1 className="font-bold text-6xl">Skills</h1>
        </div>
        <div className="flex flex-wrap">

  {/* JavaScript */}
  <div className={cardStyle}>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-12" />
    <p className="mt-2">JavaScript</p>
  </div>

  {/* React */}
  <div className={cardStyle}>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-12" />
    <p className="mt-2">React</p>
  </div>

  {/* Express */}
  <div className={cardStyle}>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-12 bg-white rounded" />
    <p className="mt-2">Express</p>
  </div>

  {/* MongoDB */}
  <div className={cardStyle}>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-12" />
    <p className="mt-2">MongoDB</p>
  </div>

  {/* Tailwind CSS */}
  <div className={cardStyle}>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" className="w-12" />
    <p className="mt-2">Tailwind CSS</p>
  </div>

  {/* Material UI */}
  <div className={cardStyle}>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" className="w-12" />
    <p className="mt-2">Material UI</p>
  </div>

  {/* Git */}
  <div className={cardStyle}>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="w-12" />
    <p className="mt-2">Git</p>
  </div>

  {/* Postman */}
  <div className={cardStyle}>
    <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" className="w-12" />
    <p className="mt-2">Postman</p>
  </div>

  {/* REST API */}
  <div className={cardStyle}>
    <img src="https://cdn-icons-png.flaticon.com/512/2165/2165004.png" className="w-12" />
    <p className="mt-2">REST API</p>
  </div>

</div>
        
        </>
    )
}