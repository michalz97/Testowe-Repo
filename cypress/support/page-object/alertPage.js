class AlertPage {
    get btnAlert1() {
        return cy.get("#alert");
    }

    get btnAlert2() {
        return cy.get("#alert-confirm");
    }

    clickOnButtonAlert1() {
        this.btnAlert1.click();
    }

    clickOnButtonAlert2() {
        this.btnAlert2.click();
    }

    verifyAlertText(tekst) {
        cy.on("window:alert", tresc => {
            expect(tresc).to.equal(tekst)
        })
    }

    verifyAlertConfirmText() {
        cy.on("window:confirm", tresc => {
            expect(tresc).to.equal("Zaakceptuj aby kontynuować!")
        })
    }   

    rejectAlert() {
        cy.on("window:confirm", tresc => false)
    }

    acceptAlert() {
        cy.on("window:confirm", tresc => true)
    }
}

export default new AlertPage();