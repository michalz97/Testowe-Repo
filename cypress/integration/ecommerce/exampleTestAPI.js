/// <reference types="cypress" />

describe("E2E - Testy Api", () => {
    beforeEach(function() {
        cy.fixture("example").then(data => {
            this.daneApi = data;
        })
    })

    it("Verification photo API", () => {
        cy.intercept("GET", "https://automationexercise.com/static/css/prettyPhoto.css").as("requestList");
        cy.visit("https://automationexercise.com/");
        cy.wait("@requestList")
        cy.get("@requestList").then(res =>{
            console.log(res)
            expect(res.response.statusCode).to.equal(200)
            expect(res.response.body).to.contain("div.pp_default")
            
        })
    })


    it("Verification font API", () => {
        cy.intercept("GET", "https://automationexercise.com/static/css/main.css").as("requestList");
        cy.visit("https://automationexercise.com/products");
        cy.wait("@requestList")
        cy.get("@requestList").then(res =>{
            console.log(res)
            expect(res.response.statusCode).to.equal(200)
            expect(res.response.body).to.contain("Roboto")
            
        })
    })


})