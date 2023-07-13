import React from "react";

function Rules() {
  return (
    <div className="homePage min-h-screen bg-[#f5f1ed] w-screen pt-20 flex flex-col justify-center snap-start">
      <h1 className="text-8xl font-bold mt-30 ml-96">Rules</h1>

      <div className = 'ruleBox text-left mx-96'>
        <h3>SYSTEM:</h3>
        <p>
          Roll a d10, add your relevant trait, and try to beat the task number.
          6 - Simple 7 - Basic 8 - Challenging 9 - Difficult 10 - Nearly
          impossible
        </p>
        <p>
          GM: remember to divide tasks into smaller parts. Some tasks remain
          impossible, as you’re animals. You can talk to other animals of the
          same or similar species.
        </p>
        <p>
          Take turns to act. You can’t act twice in a row. Enemies don’t roll
          dice – they force you to roll dice.
        </p>
        <p>
          {" "}
          If the task is dangerous, you are gain a point of danger if you fail.
          Using magic is always dangerous. If you roll equal to or under your
          current danger, you’re out of the game. You can lower your danger by
          running away or solving the problem.
        </p>
      </div>
    </div>
  );
}

export default Rules;
