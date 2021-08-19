import { v4 as uuidv4 } from "uuid";

// importing audio files
import Adekunle_Gold_Sinner from "./songs/Adekunle_Gold_Sinner.mp3";
import Buju_Outside from "./songs/Buju_Outside.mp3";
import Jail_Blues from "./songs/Jail_Blues.mp3";
import mrs_bubblegum from "./songs/mrs_bubblegum.mp3";
import myself from "./songs/myself.mp3";
import non_living_things from "./songs/non_living_things.mp3";
import peru_open_verse from "./songs/peru_open_verse.mp3";
import testimony from "./songs/testimony.mp3";

function songBank() {
  return [
    {
      name: "Non Living Things",
      cover:
        "https://assets.audiomack.com/ziikimedia/186ad253233103be629fee57443fb233e09f1cf864cd9078079e83730b57b4e3.jpeg?width=165&height=165&max=true",
      artist: "Sarkodie Feat. Oxlade",
      audio: non_living_things,
      id: uuidv4(),
      active: true,
    },
    {
      name: "Mrs. Bubblegum",
      cover:
        "https://assets.audiomack.com/tyga/d376886047ab8f320b15bc66024fcbad7cbddbc2f1f0bd194268953d38f7ed7a.jpeg?width=165&height=165&max=true",
      artist: "Tyga",
      audio: mrs_bubblegum,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Outside",
      cover:
        "https://assets.audiomack.com/bujutoyourears/a98ac584d45ba6a58420fcea1eedb68d82bdcbc37866123a8fb17f20c0f190d0.jpeg?width=165&height=165&max=true",
      artist: "Buju",
      audio: Buju_Outside,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Jail Blues",
      cover:
        "https://assets.audiomack.com/fredo-bang/9ea44d8c4dac3857fd7c339c63b9dad1dd8e92087de102aa8ec341ccaae16070.jpeg?width=165&height=165&max=true",
      artist: "Fredo Bang",
      audio: Jail_Blues,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Myself",
      cover:
        "https://assets.audiomack.com/luhsoldier/969f2baa734ba479dad0d0feffe9928498da0621c5c9c816a1376dc76fb7ab5e.jpeg?width=165&height=165&max=true",
      artist: "Luh Soldier",
      audio: myself,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sinner",
      cover:
        "https://assets.audiomack.com/adekunlegold/e34db1c6d4e72b2361c5fee2b364823800c5ff9f6169b867ee0e6cbf9a8d7919.png?width=165&height=165&max=true",
      artist: "Adekunle Gold Feat. Lucky Daye",
      audio: Adekunle_Gold_Sinner,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Testimony",
      cover:
        "https://assets.audiomack.com/bujutoyourears/2588e38c4eb95044accffa420dc0a127de606dda25d52f15977880b48359ef25.jpeg?width=165&height=165&max=true",
      artist: "Buju",
      audio: testimony,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Peru (Open Verse)",
      cover:
        "https://assets.audiomack.com/fireboydml/24aa01bcf1cc7e96a1127d741ca8e0be257696dbbc06ca8987af9ef251b86e4b.jpeg?width=165&height=165&max=true",
      artist: "Fireboy DML",
      audio: peru_open_verse,
      id: uuidv4(),
      active: false,
    },
  ];
}

export default songBank;
