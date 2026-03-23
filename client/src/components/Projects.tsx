
import chat1 from "../assets/chatApp.png";
import img2 from "../assets/GoodEats.png";

export const Projects = () => {
    
//      return(
//         <><div className="mt-30">
//              <span className="text-blue-600 font-bold">WHAT I'VE BUILT</span>
//              <h1 className="font-bold text-6xl">Projects</h1>
//          </div>
//          <div className="flex flexDirection-column gap-20">
//             <div className="border border border-white shadow-2xl ring-1 ring-black/10 w-120 h-80 rounded-lg
//             mt-15 ml-20">
//             <span className="block mt-2 font-bold text-2xl">CHAT WEBSITE</span>
//                <p className="mt-5">This chat application demonstrates real-time<br/> communication
//                 using modern web technologies. <br/>React with TypeScript provides a scalable frontend,<br/> while Firebase Realtime Database handles
//                 <br/> authentication 
//                 and real-time data synchronization efficiently.
//             </p>

//             {/* project screenshot */}
//             <div className="mt-6 flex gap-4 flex-wrap">
//             <img src={chat1} className="w-60 rounded-xl shadow-lg" />
//             <img src={chat2} className="w-60 rounded-xl shadow-lg" />
//             <img src={chat3} className="w-60 rounded-xl shadow-lg" />
//             <img src={chat4} className="w-60 rounded-xl shadow-lg" />
//             <img src={chat5} className="w-60 rounded-xl shadow-lg" />
            
//             </div>
//             <div className="flex flexDirection-column">
//             <div className="bg-blue-600 rounded-lg w-20 ml-3 mt-5 h-10 flex items-center justify-center text-white">
//                 React js
//             </div>
//             <div className="bg-blue-600 rounded-lg w-20 ml-3 mt-5 h-10 flex items-center justify-center text-white">
//                 CSS
//             </div>
//                <div className="bg-blue-600 rounded-lg w-20 ml-3 mt-5 h-10 flex items-center justify-center text-white">
//                 Firebase
//             </div>
//             </div>
//             </div>
//             {/* //second project */}
//              <div className="border border border-white shadow-2xl ring-1 ring-black/10 w-120 h-80 rounded-lg
//             mt-15">
//             <span className="block mt-2 font-bold text-2xl">Good Eats</span>
//                <p className="mt-5">Good Eats is a food ordering platform with three roles:<br/> User, Seller, and Admin.<br/>
//                Sellers add restaurants and menus, which are approved<br/> by the Admin before being visible, and users can browse and <br/>add dishes from any restaurant to their cart.
//             </p>
//             <div className="flex flexDirection-column">
//             <div className="bg-blue-600 rounded-lg w-20 ml-3 mt-5 h-10 flex items-center justify-center text-white">
//                 React js
//             </div>
//             <div className="bg-blue-600 rounded-lg w-20 ml-3 mt-5 h-10 flex items-center justify-center text-white">
//                 Material UI
//             </div>
//                <div className="bg-blue-600 rounded-lg w-20 ml-3 mt-5 h-10 flex items-center justify-center text-white">
//                 Node JS
//             </div>
//             <div className="bg-blue-600 rounded-lg w-20 ml-3 mt-5 h-10 flex items-center justify-center text-white">
//                 Express
//             </div>
//             <div className="bg-blue-600 rounded-lg w-20 ml-3 mt-5 h-10 flex items-center justify-center text-white">
//                 MongoDB
//             </div>
//             </div>
//             </div>
//         </div>
//         </>
//      )
// }

return (
  <>
    {/* Section Header */}
    <div className="mt-20 text-center">
      <span className="text-blue-600 font-bold tracking-wide">
        WHAT I'VE BUILT
      </span>
      <h1 className="font-bold text-5xl mt-2">Projects</h1>
    </div>

    {/* Projects Container */}
    <div className="mt-12 grid md:grid-cols-2 gap-10 px-6 md:px-20">

      {/* Project 1 */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 hover:scale-105 transition duration-300">
        
        <h2 className="text-2xl font-bold">Chat Website</h2>

        <p className="mt-4 text-gray-600">
          Real-time chat application using React + TypeScript and Firebase.
          Supports authentication and live messaging.
        </p>

        {/* Screenshots */}
        <div className="mt-5 ml-4">
          <img src={chat1} className="rounded-lg shadow-md hover:scale-105 transition" />
          
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-5">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">React</span>
          <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">CSS</span>
          <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">Firebase</span>
        </div>
      </div>

      {/* Project 2 */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 hover:scale-105 transition duration-300">
        
        <h2 className="text-2xl font-bold">Good Eats</h2>

        <p className="mt-4 text-gray-600">
          Food ordering platform with User, Seller, and Admin roles.
          Admin approval system with restaurant and menu management.
        </p>

        <div className="mt-5 ml-4">
          <img src={img2} className="rounded-lg shadow-md hover:scale-105 transition" />
          
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-5">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">React</span>
          <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">MUI</span>
          <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">Node</span>
          <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">Express</span>
          <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">MongoDB</span>
        </div>
      </div>

    </div>
  </>
);
}