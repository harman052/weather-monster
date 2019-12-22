describe("Weather monster", () => {
  it("should visit weather monster", () => {
    cy.visit("/");
  });

  it("should find the search field, type in and select some cities", () => {
    cy.get(".city-input-field")
      .type("Bir")
      .should("have.value", "Bir");

    cy.get(".suggested-city-list-item")
      .contains("Bir")
      .click();

    cy.get(".city-input-field")
      .type("new")
      .should("have.value", "new");

    cy.get(".suggested-city-list-item")
      .contains("New York")
      .click();
  });

  it("should remove one city from active list", () => {
    cy.get(".card")
      .contains("Bir")
      .click();
  });
});
