import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { NewsletterFormView } from "./NewsletterForm";

describe("Home", () => {
  it("shows success message when status is success", () => {
    const onSubmit = jest.fn();

    render(<NewsletterFormView onSubmit={onSubmit} status="success" />);

    const successMessage = screen.queryByText("submitted successfully");

    expect(successMessage).toBeInTheDocument();
  });
  it("doesn't show success message when status is error", () => {
    const onSubmit = jest.fn();

    render(<NewsletterFormView onSubmit={onSubmit} status="error" />);

    const successMessage = screen.queryByText("submitted successfully");

    expect(successMessage).not.toBeInTheDocument();
  });
  it("submit form when button is clicked and input is filled", async () => {
    const onSubmit = jest.fn();

    render(<NewsletterFormView onSubmit={onSubmit} status="error" />);

    const input = screen.getByLabelText("emailNewsletter");
    fireEvent.change(input, { target: { value: "example@example.com" } });

    const button = screen.getByText("Try and submit!");

    fireEvent.click(button);

    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  });
});
