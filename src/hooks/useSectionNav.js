import { useLocation, useNavigate } from "react-router-dom";

/** Scrolls to a section id when already on the home page, otherwise navigates home first. */
export function useSectionNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (id) => (e) => {
    e?.preventDefault();
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };
}
