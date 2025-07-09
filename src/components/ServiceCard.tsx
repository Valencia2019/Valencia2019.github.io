'use client';
import { SiTestcafe } from "react-icons/si";
import { useState } from "react";
import { useRouter } from 'next/navigation';


interface ServiceCardProps {
  title: string;
  description: string;
  cost: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, cost }) => {
  const email = "valencia.mcmurray@gmail.com";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(title)} Consultation Inquiry`;
  const [showFollowUpPrompt, setShowFollowUpPrompt] = useState(false);
  const router = useRouter();

  const handleEmailClick = () => {
    setShowFollowUpPrompt(true);
  };


  return (
    <article className="bg-black border border-accent border-opacity-10 rounded-lg p-6">
      <header className="flex items-center">
        <span className="material-symbols-outlined" data-testid="testcafe-icon"><SiTestcafe /></span>
        <h3 className="text-white text-lg font-bold ml-4" data-testid={`title-${title}`}>{title}</h3>
      </header>

      <p className="mt-4 text-sm text-white opacity-80" data-testid={`description-${title}`}>{description}</p>
      <p className="mt-4 text-md text-white" data-testid={`cost-${title}`}>Starting at ${cost}</p>

      <div className="flex gap-4 mt-6">
        <a href={mailtoLink}
          onClick={handleEmailClick}
          className="rounded-lg bg-white bg-opacity-10 px-4 py-2 text-sm font-medium text-black transition-all hover:bg-opacity-20"
        >
          Email Me
        </a>

        {showFollowUpPrompt && ( <div className="fixed bottom-4 right-4 bg-white text-black px-6 py-4 rounded-xl shadow-lg z-50 animate-fade-in">
            <p className="text-sm font-medium">Want to schedule a call to start your project?</p>
            <button
              onClick={() => {
                setShowFollowUpPrompt(false);
                router.push('/contact?schedule=true');
              }}
              className="mt-2 text-sm underline text-accent cursor-pointer"
            >
              Yes, schedule a call
            </button>
          </div>
        )}

      </div>
    </article>
  );
};
