import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 pt-6 mt-20">
        <h2 className="center">Next Steps</h2>
        <p className="center">
          Where do we go from here? Seems, obvious, right? There are a few options for contacting me:
        </p>
        <div className="card-container">
          <a
            className="card"
            href="https://www.linkedin.com/in/valenciamcm/"
            target="_blank"
            rel="noopener"
          >
            <span className="material-symbols-outlined">forum</span>
            <span>Via LinkedIn</span>
            <svg
              className="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </a>

          <a
            className="card"
            href="mailto:valencia.mcmurray@gmail.com"
            target="_blank"
            rel="noopener"
          >
            <span className="material-symbols-outlined">send</span>
            <span>Via Email</span>
            <svg
              className="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </a>

          <button className="card">
            <span className="material-symbols-outlined">flutter_dash</span>
            <span>Via Messenger pigeon</span>
            <svg
              className="material-icons"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
