import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t mt-12" data-testid="footer">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Valencia McMurray
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/Valencia2019"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            data-testid="footer-github"
          >
            <Github className="text-gray-600 hover:text-white" />
          </a>
          <a
            href="https://linkedin.com/in/valenciamcm/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            data-testid="footer-linkedin"
          >
            <Linkedin className="text-gray-600 hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};
