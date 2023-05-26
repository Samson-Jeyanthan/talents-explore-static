import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  TremsCondition,
  PrivacyPolicy,
  CommunityGuide,
  Intellectual,
} from "./Pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/terms-and-conditions" element={<TremsCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/community-guidelines" element={<CommunityGuide />} />
        <Route
          path="/intellectual-property-policy"
          element={<Intellectual />}
        />
      </Routes>
    </Router>
  );
}

export default App;
