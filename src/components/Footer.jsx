import Reveal from "./Reveal";
import { useLang } from "../i18n/context";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <Reveal className="footer__cta">
          <p className="footer__sub">
            {t("footer.connect")}
          </p>
        </Reveal>

        <p className="footer__copy">© {new Date().getFullYear()} Beatriz Nascimento</p>
      </div>
    </footer>
  );
}
