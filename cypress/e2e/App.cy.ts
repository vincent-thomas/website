// https://on.cypress.io/introduction-to-cypress

describe("App (/*)", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Banner displays properly", () => {
    cy.get("[data-test='banner-pureforms']").should("be.visible");
  });
});
