import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const domNode = document.getElementById("root");
const root = createRoot(domNode).render(<App />);

//Challenge. Render all the notes inside notes.js as a seperate Note
//component.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
