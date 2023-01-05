export {};

describe("smoke test", () => {
  it("first test", () => {
    // given
    cy.visit("/");
    // when
    cy.get('[data-testid="email-newsletter-input"]').type("example@123.com");
    cy.get('[data-testid="email-newsletter-submit"]').click();
    // then
    cy.contains("success");
  });
});
