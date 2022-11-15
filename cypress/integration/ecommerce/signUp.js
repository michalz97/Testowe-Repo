/// <reference types="cypress" />

import SignUpPOM from "../../support/page-object/signUpPOM"

const name = Cypress.env("name")
const email = Cypress.env("email")

describe("E2E - SignUp", () => {
    it("Account creation", () => {
        cy.visit("/")
        cy.get('[href="/login"]').click()
        //make custom commands

        cy.get(".signup-form").should("contain", "New User Signup!")

        SignUpPOM.typeInNameField(name)
        SignUpPOM.typeInEmailAdressField(email)
        SignUpPOM.clickOnSignUpButton();

    })

    it("Enter account information", () => {
        SignUpPOM.verifyTextRegistrationForm()
        cy.get("#id_gender1").check().should('be.checked')
        SignUpPOM.verifyNameAndEmail(name, email)

        SignUpPOM.typePassword()
        SignUpPOM.DayOfBirth(7)
        SignUpPOM.MonthOfBirth("January")
        SignUpPOM.YearOfBirth("1997")

        SignUpPOM.checkNewsletterCheckbox(true)
        SignUpPOM.checkSpecialOffersCheckbox(true)

        SignUpPOM.typeFirstName("Michal")
        SignUpPOM.typeLastName("Retek")
        SignUpPOM.typeAddress("ul. Kłodzka 16")
        SignUpPOM.chooseCountry("Canada")
        SignUpPOM.typeState("Malopolska")
        SignUpPOM.typeCity("Krakow")
        SignUpPOM.typeZipcode("30-072")
        SignUpPOM.typeMobileNumber("123 465 789")

        SignUpPOM.clickCreateAccount();

    })
})