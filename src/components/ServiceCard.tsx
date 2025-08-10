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
    <article className="bg-black border border-accent border-opacity-10 rounded-lg p-6 sm:p-4 ml-4 sm:ml-1">
      <header className="flex items-center">
        <span className="material-symbols-outlined" data-testid="testcafe-icon"><SiTestcafe /></span>
        <h3 className="text-white sm:text-md font-bold ml-4" data-testid={`title-${title}`}>{title}</h3>
      </header>

      <p className="mt-4 text-md sm:text-xs text-white opacity-80" data-testid={`description-${title}`}>{description}</p>
      <p className="mt-4 text-lg sm:text-sm md:text-md text-white" data-testid={`cost-${title}`}>Starting at ${cost}</p>

      <div className="flex gap-4 mt-6 w-max-[150px] sm:flex-col">
        <a href={mailtoLink}
          onClick={handleEmailClick}
          className="rounded-lg bg-white bg-opacity-10 px-4 py-2 text-sm md:text-lg font-medium text-black transition-all hover:bg-opacity-20"
        >
          Email Me
        </a>

        {showFollowUpPrompt && ( <div className="fixed bottom-4 right-4 bg-white text-black px-6 py-4 rounded-xl shadow-lg z-50 animate-fade-in sm:static sm:pb-0">
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
