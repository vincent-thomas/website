import { TextNormal } from ".";
const TEXT = "This is the test text";

describe("Text - Normal", () => {
  it("Renders correctly", () => {
    cy.mount(<TextNormal data-test>{TEXT}</TextNormal>);

    const text = cy.get("[data-test]");

    text.should("be.visible");
    text.should("not.be.undefined");
    text.should("not.be.null");
  });
  it("Should have correct css", () => {
    cy.mount(<TextNormal data-test>{TEXT}</TextNormal>);
    const text = cy.get("[data-test]");
    text.should("not.have.css", "color", "#000000");
  });
  it("Should pass props correctly", () => {
    cy.mount(
      <TextNormal data-test data-other-test='TESTING'>
        {TEXT}
      </TextNormal>
    );
    const text = cy.get("[data-test]");
    const text2 = cy.get("[data-other-test='TESTING']");

    text.should("be.visible");
    text2.should("be.visible");
  });
  it("Should pass props with className", () => {
    cy.mount(
      <TextNormal data-test className='testing'>
        {TEXT}
      </TextNormal>
    );
    const text = cy.get("[data-test]");
    const text2 = cy.get(".testing");

    text.should("be.visible");
    text2.should("be.visible");
    text2.should("not.have.css", "color", "rgb(0, 0, 0)");
  });
});
