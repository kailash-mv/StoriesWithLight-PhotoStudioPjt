import ViewHeader from "./components/ViewHeader";
import ViewShow from "./components/ViewShow.js";
import ViewTopics from "./components/ViewTopics.js";
import ViewContact from "./components/ViewContact.js";

function App() {
  return (
    <div style={{ fontFamily: "Lora, serif" }} className="bg-backgroundone">
      <ViewHeader />
      <ViewShow />
      <ViewTopics />
      <ViewContact />
    </div>
  );
}

export default App;
