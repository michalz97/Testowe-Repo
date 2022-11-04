/// <reference types="cypress" />

import AlertPage from "../support/page-object/alertPage";

describe("E2E - Alerty", () => {
    it("Alert", () => {
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/index.html")
       AlertPage.clickOnButtonAlert1();
       AlertPage.verifyAlertText("Przykładowa treść alertu");
        // cy.get("#alert").click();
        // cy.on("window:alert", tresc => {
        //     expect(tresc).to.equal("Przykładowa treść alertu")
        // })
    })

    it("Alert confirm", () => {
       AlertPage.clickOnButtonAlert2();
       AlertPage.verifyAlertConfirmText();
       AlertPage.acceptAlert();
        //cy.get("#alert-confirm").click();
        // cy.on("window:confirm", tresc => {
        //     expect(tresc).to.equal("Zaakceptuj aby kontynuować!")
        // })

        // cy.on("window:confirm", () => false)
    })
})