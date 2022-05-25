import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import ProfileSelector from "./Components/ProfileSelector";
import HomePage from "./Components/HomePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/register" element={<SignUp/>} />
        <Route path='/profile' element={<ProfileSelector/>} />
        <Route path='/home' element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;
