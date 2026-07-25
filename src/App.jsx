import { HashRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ExperienceDetail from "./components/ExperienceDetail";
import CareerDetail from "./components/CareerDetail";
import Footer from "./components/Footer";
import LanguageProvider from "./i18n/LanguageProvider";
import { useTheme } from "./hooks/useTheme";
import "./App.css";

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <LanguageProvider>
      <HashRouter>
        <div id="top" className="app">
          <Nav theme={theme} onToggleTheme={toggleTheme} />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience/:slug" element={<ExperienceDetail />} />
              <Route path="/career/:slug" element={<CareerDetail />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
}
