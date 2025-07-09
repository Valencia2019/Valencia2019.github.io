import { Service } from "@/data/services";

type ServicesMenuProps = {
  categories: Record<string, Record<string, Service[]>>;
  selectedCategory: string;
  selectedSubCategory: string;
  onSelect: (category: string, subCategory: string) => void;
};

export const ServicesMenu = ({
  categories,
  selectedCategory,
  selectedSubCategory,
  onSelect,
}: ServicesMenuProps) => {
  return (
    <aside className="w-full md:w-64 space-y-6" data-testid="services-menu">
      <h1 className="text-xl font-semibold text-white">Service Categories</h1>
      <div className="space-y-4">
        {Object.entries(categories).map(([category, subMap]) => (
          <div key={category}>
            <h2 className="text-white font-semibold text-lg mb-2" data-testid={`category-${category}`}>{category}</h2>
            <div className="space-y-2 pl-2">
              {Object.keys(subMap).map((sub) => (
                <button
                  key={sub}
                  onClick={() => onSelect(category, sub)}
                  data-testid={`service-${sub}`}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm ${
                    selectedCategory === category && selectedSubCategory === sub
                      ? "bg-white text-black font-semibold"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
