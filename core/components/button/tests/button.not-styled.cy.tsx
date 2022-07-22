import { Button } from "..";

const TEST_TEXT = "Testing Button";

describe("Button - Not Styled", () => {
  it("Should Display", () => {
    cy.mount(
      <Button data-test='button' data-testing-props type='not-styled'>
        {TEST_TEXT}
      </Button>
    );
    const BUTTON = cy.get("[data-test='button']");
    BUTTON.should("contain.text", TEST_TEXT);
    BUTTON.should("be.visible");
    BUTTON.should("not.be.hidden");
  });
  it("Should pass down props", () => {
    cy.mount(
      <Button data-test='button' data-testing-props type='not-styled'>
        {TEST_TEXT}
      </Button>
    );
    const BUTTON = cy.get("[data-testing-props]");
    BUTTON.should("be.visible");
    BUTTON.should("not.be.undefined");
    const BUTTON2 = cy.get("[data-test='button']");
    BUTTON2.should("contain.text", TEST_TEXT);
    BUTTON2.should("be.visible");
    BUTTON2.should("not.be.hidden");
  });
  it("Should pass down props with className", () => {
    cy.mount(
      <Button
        data-test='button'
        data-testing-props
        className={"testing"}
        type='not-styled'
      >
        {TEST_TEXT}
      </Button>
    );
    let BUTTON = cy.get("[data-test='button']");
    BUTTON.should("contain.text", TEST_TEXT);
    BUTTON.should("be.visible");
    BUTTON.should("not.be.hidden");

    const BUTTON1 = cy.get("[data-testing-props]");
    BUTTON1.should("be.visible");
    BUTTON1.should("not.be.undefined");
    const BUTTON2 = cy.get(".testing");
    BUTTON2.should("be.visible");
    BUTTON2.should("not.be.undefined");
  });
  it("Should have same styling with className passed down", () => {
    cy.mount(
      <Button
        data-test='button'
        data-testing-props
        className={"testing"}
        type='not-styled'
      >
        {TEST_TEXT}
      </Button>
    );
    const BUTTON = cy.get("button");
    BUTTON.should("have.class", "testing");
    BUTTON.should("not.have.css", "background-color", "rgb(239, 239, 239)");
  });
});
