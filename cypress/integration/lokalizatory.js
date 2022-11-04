/// <reference types="cypress" />

describe("E2E - lesson", () => {
    it("Lokalizatorach", () => {
        cy.visit("/")

        //Po znaczniku
        cy.get("a");

        //Identyfikator
        cy.get("#search_query_top")
    
        //Po klasie
        cy.get(".form-control")

        //Po atrybutach
        cy.get('[name="search_query"]')
        cy.get('[placeholder="Search"]')

        //Dokladniejszy atrybut wraz z podniesieniem znacznika
        cy.get('input[placeholder="Search"]')

        //Pobieranie elementow po kilku atrybutach
        cy.get('[src="http://automationpractice.com/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]')

        //ZALECANA praktyka pobierania elementow
        cy.get('[data-cy="wyszukiwarka"]')

    })

    it.only("Lokalizatory część 2", () => {
        cy.visit("/")
        cy.contains("Shop now !")
        cy.contains('[title="Contact Us"]','Contact us')

        cy.get("li").parents("#home-page-tabs").find("li").first()
        cy.get("li").parents("#home-page-tabs").find("li").contains("Best Sellers")
    })
})