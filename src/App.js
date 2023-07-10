// import React from 'react'

// function App() {
//   return (
//     <div className="Main" >
//     <div className="text-8xl font-bold text-center "> The Witch is Dead App </div>
//       <div className="textboxes">
//         <div className="HomeScreen flex justify-center mx-80 ">
//           <p3> The witch is dead app
// Once upon a time, there was a kind and wise and beautiful witch who lived in the forest with her familiars, and her life was
// peaceful and happy until a FUCKING WITCH-HUNTER broke into her cottage and dragged her our and FUCKING
// MURDERED HER and now she’s DEAD. But if you get revenge and kill him and bring his EYES to her corpse within a week
// she’ll come back to life. Or so you’ve heard. Even if it doesn’t work, at least he’s dead. The Witch-Hunter has retreated to the
// village, the FUCKING COWARD. Get him. 
// Answer these questions!</p3>
//         </div>
//       </div>
//     </div>
    
//   )
// }

// export default App

import React from "react";

function App() {

    return (
        <section className="bg-[#f5f1ed]">


        <div className= "snap-y snap-mandatory h-screen w-screen overflow-scroll">
          <div className="homePage min-h-screen bg-[#f5f1ed] w-screen pt-20 flex flex-col justify-center snap-start">
          
            <h1 className="text-8xl font-bold mt-30 ml-96">The Witch is Dead App</h1>
            <div className = "container mr-96 flex flex-row ">
              <div className= " w-3/5">
                <p className=" text-2xl mt-40 mr-40 text-right ">A DM helper tool!</p>
              </div>
            </div>
          </div>
          
          <div className="StoryPage min-h-screen bg-[#a1a485] w-screen flex flex-col justify-center snap-start">
            <h1 className="text-6xl font-bold underline underline-offset-8  text-center">The Story</h1>
            <div className = "descriptionAndCover container mx-auto flex flex-row ">
              <div className= " w-4/5 "> 
                <p className=" container my-60 text-2xl pl-10  ">Once upon a time, there was a kind and wise and beautiful witch who lived in the forest with her familiars, and her life was
 peaceful and happy until a FUCKING WITCH-HUNTER broke into her cottage and dragged her our and FUCKING
 MURDERED HER and now she’s DEAD. But if you get revenge and kill him and bring his EYES to her corpse within a week
 she’ll come back to life. Or so you’ve heard. Even if it doesn’t work, at least he’s dead. The Witch-Hunter has retreated to the
 village, the FUCKING COWARD. Get him. </p>
              </div>
              <div className="coverImage">
                <img className="flex-1 w-30 my-40 align-middle" src="https://i.ytimg.com/vi/hHKygQ2cgUo/maxresdefault.jpg" alt=""></img>
              </div>
            </div>
          </div>
          
          
          <div className="min-h-screen bg-[#4a5240] w-screen pt-20 flex flex-col justify-center snap-start">
            <h1 className="text-6xl font-bold underline mt-40 ml-96 text-[#f5f1ed]">What is it?</h1>
            <div className= "container mr-96 flex flex-row ">
          
              <div className= " w-3/5">
                <p className="text-left text-2xl pt-6 pr-10 text-[#f5f1ed]" >Welcome to our creative community! We are a website designed for artists who want to stay motivated and productive.
                    We believe that procrastination can be a major obstacle to achieving your goals as an artist, and that's why we offer a space where you can showcase your work,
                    get feedback from fellow artists, and stay accountable to your creative projects. </p>
                <p className="text-left text-2xl pt-6 pr-10 text-[#f5f1ed]">Our platform provides you with the tools you need to track your progress, share updates on your projects, and receive support from like-minded individuals.
                    We encourage you to use this space as a place of inspiration, collaboration, and celebration of your artistic endeavors.</p>
                <p className="text-left text-2xl pt-6 pr-10 text-[#f5f1ed]">So, whether you're a painter, sculptor, musician, writer, or any other type of artist, we invite you to join our community and start sharing your work today.
                    Let's create something beautiful together!</p>
              </div>
              <div>
                <img className="flex-1 w-auto" src="https://i.pinimg.com/originals/3a/80/36/3a80363ad681b4f6a79276c85f81ccb0.jpg" alt=""></img>
              </div>
            </div>
          </div>
          
          <div className="snap-start w-screen h-screen overflow-scroll">
            {/* <Embed
              id='qdZF5yJA8b4'
              placeholder='https://steamuserimages-a.akamaihd.net/ugc/1675862552388648329/82113D1A5E258A3A4638B892E4CED1AA1035083D/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
              source='youtube'
            /> */}
          </div>
        </div>
        
        </section>

    )
}

export default App;
