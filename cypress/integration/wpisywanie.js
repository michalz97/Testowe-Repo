/// <reference types="cypress" />

describe("E2E - Akcja wpisywania", () => {
    it("Wpisywanie wartości w pole", () => {
        cy.visit("/")
        cy.searchPhrase("Nowy tekst{backspace}", 1200);
        //cy.get("#search_query_top").type("Przykładowy produkt{backspace}", {delay: 500})
    })

    it("Czyszczenie wartości z polu input", () => {
        cy.get("#search_query_top").clear();
    })
})