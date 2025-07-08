import { render, screen } from "@testing-library/react";
import FreelancePage from "@/app/freelance/page";
import "@testing-library/jest-dom";

// Mock HalfOval to isolate layout
jest.mock("@/components/HalfOval", () => ({
  HalfOval: ({ content }: { content: { text: string } }) => (
    <div data-testid="half-oval">{content.text}</div>
  ),
}));

// Tests
describe("FreelancePage", () => {
  it("renders the main heading", () => {
    render(<FreelancePage />);
    expect(
      screen.getByRole("heading", {
        name: /booking my freelance services/i,
        level: 1,
      })
    ).toBeInTheDocument();
  });

  it("renders all steps", () => {
    render(<FreelancePage />);
    const stepTitles = [
      "Send an Inquiry",
      "Schedule a Call",
      "Proposal & Timeline",
      "Contract Agreement",
      "Payment Terms",
      "Project Kickoff",
    ];

    stepTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("renders call-to-action links", () => {
    render(<FreelancePage />);

    const inquiryLink = screen.getByRole("link", { name: /send inquiry/i });
    const scheduleLink = screen.getByRole("link", { name: /schedule via calendly/i });
    const servicesLink = screen.getByRole("link", { name: /view my qa & web development services/i });

    expect(inquiryLink).toHaveAttribute("href", "/contact");
    expect(scheduleLink).toHaveAttribute("href", "/contact?schedule=true");
    expect(servicesLink).toHaveAttribute("href", "/freelance/services");
  });

  it("includes the HalfOval intro", () => {
    render(<FreelancePage />);
    expect(screen.getByTestId("half-oval")).toBeInTheDocument();
    expect(
      screen.getByText(/i'm currently available for freelance qa consulting or dev work/i)
    ).toBeInTheDocument();
  });

  it("renders all steps inside the section", () => {
    render(<FreelancePage />);
    const stepsSection = screen.getByTestId("steps");
    expect(stepsSection.querySelectorAll("h2").length).toBe(6);
  });
});
