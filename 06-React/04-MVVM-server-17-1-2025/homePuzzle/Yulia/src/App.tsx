import React, { useEffect, useState } from "react";
import AccordionView from "./view/components/accordion/Accordion";

const sampleItems = [
  { id: 1, title: "Section 1", content: "Content for section 1" },
  { id: 2, title: "Section 2", content: "Content for section 2" },
];

const App: React.FC = () => {
  const [pseudoCode, setPseudoCode] = useState("");

  useEffect(() => {
    fetch("/pseudoCode.md")
      .then((response) => response.text())
      .then((text) => setPseudoCode(text));
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <AccordionView items={sampleItems} />
      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2>Pseudocode</h2>
        <pre style={{ textAlign: "left" }}>{pseudoCode}</pre>
      </div>
    </div>
  );
};

export default App;
