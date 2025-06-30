import { render, screen, fireEvent } from "@testing-library/react";
import { ServicesMenu } from "@/components/ServicesMenu";
import { Service } from "@/data/services";

const mockCategories: Record<string, Record<string, Service[]>> = {
  QA: {
    "Manual Testing": [],
    "Automated Testing": [],
  },
  Development: {
    "Web Development": [],
  },
};

const mockOnSelect = jest.fn();

describe("ServicesMenu", () => {
  beforeEach(() => {
    mockOnSelect.mockClear();
  });

  it("renders all categories and subcategories", () => {
    render(
      <ServicesMenu
        categories={mockCategories}
        selectedCategory="QA"
        selectedSubCategory="Manual Testing"
        onSelect={mockOnSelect}
      />
    );

    // Top-level category headers
    expect(screen.getByText("QA")).toBeInTheDocument();
    expect(screen.getByText("Development")).toBeInTheDocument();

    // Subcategories
    expect(screen.getByText("Manual Testing")).toBeInTheDocument();
    expect(screen.getByText("Automated Testing")).toBeInTheDocument();
    expect(screen.getByText("Web Development")).toBeInTheDocument();
  });

  it("highlights the selected subcategory button", () => {
    render(
      <ServicesMenu
        categories={mockCategories}
        selectedCategory="QA"
        selectedSubCategory="Automated Testing"
        onSelect={mockOnSelect}
      />
    );

    const selectedButton = screen.getByText("Automated Testing");
    expect(selectedButton).toHaveClass("bg-white");
    expect(selectedButton).toHaveClass("text-black");
  });

  it("calls onSelect when a subcategory is clicked", () => {
    render(
      <ServicesMenu
        categories={mockCategories}
        selectedCategory="QA"
        selectedSubCategory="Manual Testing"
        onSelect={mockOnSelect}
      />
    );

    const button = screen.getByText("Web Development");
    fireEvent.click(button);

    expect(mockOnSelect).toHaveBeenCalledWith("Development", "Web Development");
  });
});
