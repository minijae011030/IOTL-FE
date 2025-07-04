import "bootstrap-icons/font/bootstrap-icons.css";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./shared/styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);
