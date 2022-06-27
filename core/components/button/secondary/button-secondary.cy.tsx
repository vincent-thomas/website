import { ButtonSecondary } from ".";

const TEST_TEXT = "Testing Button";

describe("Button - Secondary", () => {
  it("Should Display", () => {
    cy.mount(<ButtonSecondary data-test='button'>{TEST_TEXT}</ButtonSecondary>);

    const BUTTON = cy.get("[data-test='button']");
    BUTTON.should("contain.text", TEST_TEXT);
    BUTTON.should("be.visible");
    BUTTON.should("not.be.hidden");
  });
});
