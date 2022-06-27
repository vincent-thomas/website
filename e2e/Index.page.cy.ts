/// <reference types="cypress" />

describe("Index Page (/)", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Hero displays correctly", () => {
    cy.get("[data-test='hero-title-header']").should("be.visible");
    cy.get("[data-test='hero-title']").should("be.visible");

    cy.get("[data-test='button-contact']").should("be.visible");
    cy.get("[data-test='button-about']").should("be.visible");
    cy.get("[data-test='image-me']").should("be.visible");
  });

  it("Socialbar displays correctly", () => {
    const socialBar = cy.get("[data-test='social-bar']");
    const quickLinks = socialBar.first();
    const socialMediaIcons = socialBar.last();

    socialBar.should("be.visible");
    quickLinks.should("be.visible").children().should("be.visible");
    socialMediaIcons.should("be.visible").children().should("be.visible");
  });
  it("Colorlines should be visible", () => {
    const colorbar = cy.get("[data-test='color-lines']");
    colorbar.should("be.visible");
  });

  it("About Me should be visible", () => {
    const aboutMeWrapper = cy.get("[data-test='about-me-wrapper'");
    aboutMeWrapper.scrollIntoView().should("be.visible");

    const aboutMeContainer = cy.get("[data-test='about-me-container']");
    aboutMeContainer.should("be.visible");

    const aboutMeTitle = cy.get("[data-test='about-me-title']");
    aboutMeTitle.should("be.visible");

    const aboutMeIntrests = cy.get("[data-test='about-me-intrests']");
    aboutMeIntrests.should("be.visible");

    const aboutMeIam = aboutMeContainer.get("[data-test='about-me-iam']");
    aboutMeIam.scrollIntoView().should("be.visible");
  });
});
