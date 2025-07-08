import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import { ServicesMenu } from "@/components/ServicesMenu";
import { Service } from "@/data/services";

const mockCategories: Record<string, Record<string, Service[]>> = {
  QA: {
    "Manual Testing": [
      { title: "Service 1", description: "Desc", cost: "TBD", category: "QA", subCategory: "Manual Testing" },
    ],
    "Automated Testing": [
      { title: "Service 3", description: "Desc", cost: "TBD", category: "QA", subCategory: "Automated Testing" },
    ],
  },
  Development: {
    "Web Development": [
      { title: "Service 4", description: "Desc", cost: "TBD", category: "Development", subCategory: "Web Development" },
    ],
  },
};

const mockOnSelect = jest.fn();

describe("ServicesMenu", () => {
  beforeEach(() => {
    mockOnSelect.mockClear();
  });

  it("renders all categories and subcategory buttons", () => {
    render(
      <ServicesMenu
        categories={mockCategories}
        selectedCategory="QA"
        selectedSubCategory="Manual Testing"
        onSelect={mockOnSelect}
      />
    );

    // Category headings
    expect(screen.getByTestId("category-QA")).toBeInTheDocument();
    expect(screen.getByTestId("category-Development")).toBeInTheDocument();

    // Subcategory buttons
    expect(screen.getByTestId("service-Manual Testing")).toBeInTheDocument();
    expect(screen.getByTestId("service-Automated Testing")).toBeInTheDocument();
    expect(screen.getByTestId("service-Web Development")).toBeInTheDocument();
  });

  it("highlights the selected subcategory correctly", () => {
    render(
      <ServicesMenu
        categories={mockCategories}
        selectedCategory="QA"
        selectedSubCategory="Automated Testing"
        onSelect={mockOnSelect}
      />
    );

    const selectedBtn = screen.getByTestId("service-Automated Testing");

    expect(selectedBtn).toHaveClass("bg-white");
    expect(selectedBtn).toHaveClass("text-black");
    expect(selectedBtn).toHaveClass("font-semibold");
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

    const targetButton = screen.getByTestId("service-Automated Testing");
    fireEvent.click(targetButton);

    expect(mockOnSelect).toHaveBeenCalledWith("QA", "Automated Testing");
  });
});
