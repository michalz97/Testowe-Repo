class SignUpPOM {
 
get nameField() {
    return cy.get('input[placeholder="Name"]');
 }   

 get emailAdressField() {
    return cy.get('[placeholder="Email Address"]').parents('[action="/signup"]').find('[placeholder="Email Address"]').first();
 }

 get signUpButton() {
    return cy.contains('button[type="submit"]', 'Signup')
 }
 
typeInNameField(text) {
    this.nameField.should("be.visible").type(text);
}

typeInEmailAdressField(text) {
    this.emailAdressField.should("be.visible").type(text);
}

clickOnSignUpButton() {
    this.signUpButton.should("be.visible").click();
}

get RegistrationForm() {
    return cy.get(".login-form");
}

verifyTextRegistrationForm() {
    this.RegistrationForm.should("contain", "Enter Account Information").should("contain", "Address Information");
}

get Name() {
    return cy.get("#name");
}

get Email() {
    return cy.get("#email");
}


verifyNameAndEmail(text1, text2) {
    this.Name.invoke("prop", "value").then(value1 => {
        expect(value1).to.contain(text1)
}),
    this.Email.invoke("prop", "value").then(value2 => {
        expect(value2).to.contain(text2)
});
}

get password() {
    return cy.get("#password");
}

typePassword() {
    this.password.type("haslo123");
}

get dateOfBirthDay() {
    return cy.get("#days");
}

get dateOfBirthMonth() {
    return cy.get("#months");
}

get dateOfBirthYear() {
    return cy.get("#years");
}

DayOfBirth(day) {
    this.dateOfBirthDay.select(day);
}

MonthOfBirth(month) {
    this.dateOfBirthMonth.select(month);
}

YearOfBirth(year) {
    this.dateOfBirthYear.select(year);
}

get newsletterCheckbox() {
    return cy.get("#newsletter")
}

get newsletterCheckboxText() {
    return cy.get('[for="newsletter"]')
}

checkNewsletterCheckbox(boolean) {
   if(boolean == true) {
    this.newsletterCheckbox.check().should('be.checked'),
    this.newsletterCheckboxText.should("contain", "Sign up for our newsletter!")
   } else if(boolean == false) {
    this.newsletterCheckbox.should('not.be.checked'),
    this.newsletterCheckboxText.should("contain", "Sign up for our newsletter!")
   } else {
    cy.log("checkNewsletterCheckbox: Please write correct value: true or false")
   }
}

get specialOffersCheckbox() {
    return cy.get("#optin")
}

get specialOffersCheckboxText() {
    return cy.get('[for="optin"]')
}

checkSpecialOffersCheckbox(boolean) {
   if(boolean == true) {
    this.specialOffersCheckbox.check().should('be.checked'),
    this.specialOffersCheckboxText.should("contain", "Receive special offers from our partners!")
   } else if(boolean == false) {
    this.specialOffersCheckbox.should('not.be.checked'),
    this.specialOffersCheckboxText.should("contain", "Receive special offers from our partners!")
   } else {
    cy.log("checkSpecialOffersCheckbox: Please write correct value: true or false")
   }
}

get firstName() {
    return cy.get("#first_name")
}

typeFirstName(text) {
    this.firstName.type(text);
}

get lastName() {
    return cy.get("#last_name")
}

typeLastName(text) {
    this.lastName.type(text);
}

get address() {
    return cy.get("#address1")
}

typeAddress(text) {
    this.address.type(text);
}

get country() {
    return cy.get("#country");
}

chooseCountry(country) {
    this.country.select(country);
}

get state() {
    return cy.get("#state")
}

typeState(text) {
    this.state.type(text);
}

get city() {
    return cy.get("#city")
}

typeCity(text) {
    this.city.type(text);
}

get zipcode() {
    return cy.get("#zipcode")
}

typeZipcode(text) {
    this.zipcode.type(text);
}

get mobileNumber() {
    return cy.get("#mobile_number")
}

typeMobileNumber(text) {
    this.mobileNumber.type(text);
}

get createAccount() {
    return cy.get('button[data-qa="create-account"]')
}

clickCreateAccount() {
    this.createAccount.click();
}





}
export default new SignUpPOM();