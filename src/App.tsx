import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import { Router } from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserContextProvider>
          <Router />
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
