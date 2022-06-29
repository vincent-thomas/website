import { Link } from "..";

const TEST_TEXT = "Testing Button";

describe("Link - Not Styled", () => {
  it("Should Display", () => {
    cy.mount(
      <Link type='not-styled' to='#' data-test='link'>
        {TEST_TEXT}
      </Link>
    );
    const BUTTON = cy.get("[data-test='link']");
    BUTTON.should("contain.text", TEST_TEXT);
    BUTTON.should("be.visible");
    BUTTON.should("not.be.hidden");
  });
  it("Should pass down props", () => {
    cy.mount(
      <Link to='#' type='not-styled' data-test='link' data-testing-props>
        {TEST_TEXT}
      </Link>
    );
    const BUTTON = cy.get("[data-testing-props]");
    BUTTON.should("be.visible");
    BUTTON.should("not.be.undefined");
    const BUTTON2 = cy.get("[data-test='link']");
    BUTTON2.should("contain.text", TEST_TEXT);
    BUTTON2.should("be.visible");
    BUTTON2.should("not.be.hidden");
  });
  it("Should have same styling with className passed down", () => {
    cy.mount(
      <Link to='#' type='not-styled' data-testing-props className={"testing"}>
        {TEST_TEXT}
      </Link>
    );
    const BUTTON = cy.get("a");
    BUTTON.should("have.class", "testing");
    BUTTON.should("not.have.css", "background-color", "rgb(239, 239, 239)");
  });
  it("Should pass down props with className", () => {
    cy.mount(
      <Link
        to='#'
        type='not-styled'
        data-test='link'
        data-testing-props
        className={"testing"}
      >
        {TEST_TEXT}
      </Link>
    );
    let BUTTON = cy.get("[data-test='link']");
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
});
