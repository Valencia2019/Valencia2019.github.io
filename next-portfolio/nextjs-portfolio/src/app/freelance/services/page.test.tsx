import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import ServicesPage from "@/app/freelance/services/page";
import * as servicesData from "@/data/services";

// Mock shared components
jest.mock("@/components/Navbar", () => ({
  Navbar: () => <nav data-testid="navbar">Navbar</nav>,
}));
jest.mock("@/components/Footer", () => ({
  Footer: () => <footer data-testid="footer">Footer</footer>,
}));
jest.mock("@/components/ServiceCard", () => ({
  ServiceCard: ({ title }: { title: string }) => <div>{title}</div>,
}));
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    pathname: "/",
  }),
}));
jest.mock("@/components/ServicesMenu", () => ({
  ServicesMenu: ({
    categories,
    onSelect,
  }: {
    categories: Record<string, Record<string, string[]>>;
    selectedCategory: string;
    selectedSubCategory: string;
    onSelect: (cat: string, sub: string) => void;
  }) => (
    <div>
      {Object.entries(categories).map(([cat, subs]) => (
        <div key={cat}>
          <h2>{cat}</h2>
          {Object.keys(subs).map((sub) => (
            <button key={sub} onClick={() => onSelect(cat, sub)}>
              {sub}
            </button>
          ))}
        </div>
      ))}
    </div>
  ),
}));

describe("Validating the Services Page", () => {
  it("renders the initial set of services", () => {
    render(<ServicesPage />);
    const services = servicesData.services.filter(
      (s) => s.category === "QA" && s.subCategory === "Manual Testing"
    );
    services.slice(0, 3).forEach((service) => {
      const h3 = screen.getByRole("heading", { name: service.title, level: 3 });
      expect(h3).toBeInTheDocument();
    });
  });

  it("shows more services when 'Show More' is clicked", () => {
    render(<ServicesPage />);

    // First switch to "Development" > "Web Development"
    const button = screen.getByText("Web Development");
    fireEvent.click(button);

    const showMoreBtn = screen.getByRole("button", { name: /show more/i });
    fireEvent.click(showMoreBtn);

    const devServices = servicesData.services.filter(
      (s) => s.category === "Development" && s.subCategory === "Web Development"
    );
    devServices.slice(0, 6).forEach((service) => {
      expect(screen.getByText(service.title)).toBeInTheDocument();
    });
  });

  it("changes category and subcategory correctly", async () => {
    render(<ServicesPage />);

    const subCategoryBtn = screen.getByText("Web Development");
    fireEvent.click(subCategoryBtn);

    const devServices = servicesData.services.filter(
      (s) => s.category === "Development" && s.subCategory === "Web Development"
    );
    for (const service of devServices.slice(0, 3)) {
      await waitFor(() => {
        expect(screen.getByText(service.title)).toBeInTheDocument();
      });
    }
  });
});

afterEach(() => {
  jest.resetAllMocks();
});