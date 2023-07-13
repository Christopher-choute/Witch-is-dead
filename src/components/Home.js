import React from "react";

function Home() {

  

  return (
    <section className="bg-[#f5f1ed]">
      <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
        <div className="homePage min-h-screen bg-[#f5f1ed] w-screen pt-20 flex flex-col justify-center snap-start">
          <h1 className="text-8xl font-bold mt-30 ml-96">
            The Witch is Dead App
          </h1>
          <div className="container mr-96 flex flex-row ">
            <div className=" w-3/5">
              <p className=" text-2xl mt-40 mr-40 text-right ">
                A DM helper tool!
              </p>
            </div>
          </div>
        </div>

        <div className="StoryPage min-h-screen bg-[#77867F] w-screen flex flex-col justify-center snap-start">
          <h1 className="text-6xl font-bold underline underline-offset-8  text-center">
            The Story
          </h1>
          <div className="descriptionAndCover container mx-auto flex flex-row ">
            <div className=" w-4/5 ">
              <p className=" container my-60 text-2xl pl-10  ">
                Once upon a time, there was a kind and wise and beautiful witch
                who lived in the forest with her familiars, and her life was
                peaceful and happy until a FUCKING WITCH-HUNTER broke into her
                cottage and dragged her our and FUCKING MURDERED HER and now
                she’s DEAD. But if you get revenge and kill him and bring his
                EYES to her corpse within a week she’ll come back to life. Or so
                you’ve heard. Even if it doesn’t work, at least he’s dead. The
                Witch-Hunter has retreated to the village, the FUCKING COWARD.
                Get him.{" "}
              </p>
            </div>
            <div className="coverImage">
              <img
                className="flex-1 w-30 my-40 align-middle"
                src="https://i.ytimg.com/vi/hHKygQ2cgUo/maxresdefault.jpg"
                alt=""
              ></img>
            </div>
          </div>
        </div>

        <div className="min-h-screen bg-[#4a5240] w-screen pt-20 flex flex-col justify-center snap-start">
          <button className="text-6xl font-bold text-[#f5f1ed]">
            Start Your Game!
          </button>
          <div className="container mr-96 flex flex-row "></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
