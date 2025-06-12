import React from "react";
import Heading from "./Heading";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
import Footer from "./Footer";

function createEmoji(emojipedia) {
  return (
    <Entry 
      id={emojipedia.id}
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Heading />
      <dl className="dictionary">
      {emojipedia.map(createEmoji)}
      </dl>

      {/* <Entry
        id="1"
        emoji="💪"
        name="Tense Biceps"
        meaning="“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
      />
      <Entry
        id="2"
        emoji="🙏"
        name="Person With Folded Hands"
        meaning="Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
      />
      <Entry
        id="3"
        emoji="🤣"
        name="Rolling On The Floor, Laughing"
        meaning="This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
      /> */}
      <Footer />
    </div>
  );
}

export default App;
