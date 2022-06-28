import { LearnMoreButton } from ".";

describe("Learn More Button", () => {
  it("Should show 'Learn more'", () => {
    cy.mount(<LearnMoreButton onClick={() => void 0} data-test />);

    const GET_BUTTON = cy.get("[data-test]");

    GET_BUTTON.contains("Learn more");
  });
});
