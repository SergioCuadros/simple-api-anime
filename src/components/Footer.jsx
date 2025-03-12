import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
    return (
        <>
            <footer className="footer sm:footer-horizontal bg-slate-100/5 text-neutral-content items-center p-4 center-container">
                <aside className="grid-flow-col items-center">
                    <p>Made by   <a href="https://sergiocuadrosdev.netlify.app/" className="badge badge-ghost">Sergio Cuadros 🟫</a></p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href="https://github.com/SergioCuadros" target="_blank">
                        <FaGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/sergio-cuadros-benitez-5199581bb/" target="_blank">
                        <FaLinkedin />
                    </a>
                </nav>
            </footer>
        </>
    );
};
