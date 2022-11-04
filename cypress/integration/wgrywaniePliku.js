/// <reference types="cypress" />

describe("E2E - Wgrywanie pliku", () => {
    it("Wgrywanie pliku do inputa w Contact Us", () => {
        cy.visit("/index.php?controller=contact")
        cy.get("#fileUpload").attachFile("../fixtures/zarowki.jpg");
        cy.get("span.filename").should("contain", "zarowki.jpg")

    })
} )