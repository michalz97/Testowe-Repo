/// <reference types="cypress" />

describe("Wykonywanie zapytania baepośrednio do API", () => {
    beforeEach(function() {
        cy.fixture("example").then(data => {
            this.daneApi = data;
        })
    })
})

    it("Autoryzacja + Dodawanie nowego artykułu", () => {
        const daneAutoryzacja = {
            "user": {
                "email": "michal.zietek.97@wp.pl",
                "password": "haslo123"
            }
        }

        const daneArtykul = {
            "article": {
                "tagList": [],
                "title": "testers",
                "description": "test",
                "body": "test"
            }
          }
        
        cy.request("POST", "https://api.realworld.io/api/users/login", daneAutoryzacja).its("body").then(res => {
            const authToken = res.user.token;

            cy.request({
                method: "POST",
                url: "https://api.realworld.io/api/articles/",
                body: daneArtykul,
                headers: {
                    'Authorization': 'Token ' + authToken
                }
            }).then(res => {
                expect(res.status).to.equal(200)
            })
    })
})