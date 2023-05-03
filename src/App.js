import React, { useState } from "react";
import Counter from "./counter.js";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const TextButton = styled(Button)`
  text-transform: none;
  `;


function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <Counter text={text} />
    </div>
  );
}

export default App;