import "./App.css";
import { AuthContextProvider } from "./Components/context/AuthContext";
import Mainroutes from "./Components/Routes/MainRoutes";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Mainroutes/>
        </BrowserRouter>
      

      </AuthContextProvider>
    
    </div>
  );
}
export default App;

