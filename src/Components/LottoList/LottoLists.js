import Lotto4D from "./Lotto4D";
import Lotto6D from "./Lotto6D";
import Lotto642 from "./Lotto642";
import Lotto645 from "./Lotto645";
import Lotto649 from "./Lotto649";
import Lotto655 from "./Lotto655";
import Lotto658 from "./Lotto658";
import LottoSuertres from "./LottoSuertres";
import LottoEZ2 from "./LottoEZ2";
import Donate from "./Donate";
import React from "react";

function LottoLists() {
   return [
      { title: "EZ2", path: "LottoEZ2", name: <LottoEZ2 />, id: 1 },
      { title: "4D", path: "Lotto4D", name: <Lotto4D />, id: 2 },
      { title: "6D", path: "Lotto6D", name: <Lotto6D />, id: 3 },
      { title: "6/42", path: "Lotto642", name: <Lotto642 />, id: 4 },
      { title: "6/45", path: "Lotto645", name: <Lotto645 />, id: 5 },
      { title: "6/49", path: "Lotto649", name: <Lotto649 />, id: 6 },
      { title: "6/55", path: "Lotto655", name: <Lotto655 />, id: 7 },
      { title: "6/58", path: "Lotto658", name: <Lotto658 />, id: 8 },
      { title: "Suertres", path: "LottoSuertres", name: <LottoSuertres />, id: 9 },
      { title: "Donate", path: "Donate", name: <Donate />, id: 10 },
   ];
}

export default LottoLists;
