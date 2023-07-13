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
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";

function App() {

    return (   
      <div>
        <Home/>
        <Routes >
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

  );
}

export default App;

