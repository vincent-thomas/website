import { ButtonPrimary } from ".";

const TEST_TEXT = "Testing Button";

describe("Button - Primary", () => {
  it("Should Display", () => {
    cy.mount(<ButtonPrimary data-test='button'>{TEST_TEXT}</ButtonPrimary>);

    const BUTTON = cy.get("[data-test='button']");
    BUTTON.should("contain.text", TEST_TEXT);
    BUTTON.should("be.visible");
    BUTTON.should("not.be.hidden");
  });
});
