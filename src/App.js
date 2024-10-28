import ViewHeader from "./components/ViewHeader";
import ViewShow from "./components/ViewShow.js";
import ViewTopics from "./components/ViewTopics.js";
import ViewContact from "./components/ViewContact.js";
function App() {
  return (
    <div className="font-['Garamond'] bg-backgroundone">
      <ViewHeader />
      <ViewShow />
      <ViewTopics />
      <ViewContact />
    </div>
  );
}

export default App;
