import { useState } from "react";

import TruthAndDare from "./component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TruthAndDare />
    </>
  );
}

export default App;
