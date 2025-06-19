import { SiTestcafe } from "react-icons/si";

export const ServiceCard = ({ title, description, cost }: {
  title: string;
  description: string;
  cost: string;
  key: number;
}) => {
  return (
    <article className="bg-black border border-accent border-opacity-10 rounded-lg p-6">
      <header className="flex items-center">
        <span className="material-symbols-outlined"><SiTestcafe /></span>
        <h3 className="text-white text-xl font-bold ml-4">{title}</h3>
      </header>
      <p className="mt-4 text-sm text-white opacity-80">{description}</p>
      <p className="mt-4 text-lg text-white">{cost}</p>
    </article>
  );
};
