import { useRef } from "react";
import ViewHeader from "./components/ViewHeader";
import ViewShow from "./components/ViewShow.js";
import ViewTopics from "./components/ViewTopics.js";
import ViewContact from "./components/ViewContact.js";

function App() {
  const exploreRef = useRef(null);
  const contactRef = useRef(null);

  const explorehandleClick = () => {
    exploreRef.current.scrollIntoView({ behaviour: "smooth", block: "start" });
  };

  const contacthandleClick = () => {
    contactRef.current.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <div
      style={{ fontFamily: "Lora, serif" }}
      className="bg-backgroundone min-h-screen"
    >
      <ViewHeader onHandleContactClick={contacthandleClick} />
      <ViewShow onHandleClick={explorehandleClick} />
      <ViewTopics ref={exploreRef} />
      <ViewContact ref={contactRef} />
    </div>
  );
}

export default App;
