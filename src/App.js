import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Editor from "./Components/Editor";
import Alldata from "./Pages/ActiveSurvey";
import CreateUser from "./Pages/CreateSuryvey";
import Users from "./Components/Users";
import Takeservey from "./Components/Takeservey";
import Questionsurvey from "./Components/Questionsurvey";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Topics from "./Components/Topics";
import EachTopicquestions from "./Components/EachTopicquestions";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ProtectedRoute Component={Home} />} />
          <Route
            path="/topics"
            element={<ProtectedRoute Component={Topics} />}
          />
          <Route
            path="/EachTopicquestions"
            element={<ProtectedRoute Component={EachTopicquestions} />}
          />
          <Route
            path="/Editor"
            element={<ProtectedRoute Component={Editor} />}
          />
          <Route
            path="/Takeservey"
            element={<ProtectedRoute Component={Takeservey} />}
          />
          <Route
            path="/Questionsurvey/:id"
            element={<ProtectedRoute Component={Questionsurvey} />}
          />

          <Route path="Survey" element={<ProtectedRoute Component={Users} />}>
            <Route path="CreateSurvey" element={<CreateUser />} />
            <Route path="ActiveSurvey" element={<Alldata />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
