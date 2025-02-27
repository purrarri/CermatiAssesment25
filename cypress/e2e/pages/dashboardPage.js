import { faker } from '@faker-js/faker';

const EMAIL_FORM = '#email';
const PHONE_FORM = '#mobilePhone';
const PASSWORD_FORM = '#password';
const PASSWORD_FORM2 = '#confirmPassword';
const LOGIN_BTN = '.RegistrationForm_form-container__button-text__k6N8W';
const REG_BTN = '.btn--action_kallT';
const NAME1_FIELD = '#firstName';
const NAME2_FIELD = '#lastName';
const DOM_FIELD = '#cityAndProvince';
const CHECK_FORM = '.TermsAndConditions_checkbox__text__ZPxfq';
const ALRT_CHECK = '.m-t-4';

class DashboardPage {

    visit() {
        const url = Cypress.env("/");
        cy.visit("/");
    }

    emailField() {
        return cy.get(EMAIL_FORM);
    }
    phoneField() {
        return cy.get(PHONE_FORM);
    }

    passwordForm() {
        return cy.get(PASSWORD_FORM);
    }
    passwordForm2() {
        return cy.get(PASSWORD_FORM2);
    }
    nameForm1() {
        return cy.get(NAME1_FIELD);
    }
    nameForm2() {
        return cy.get(NAME2_FIELD);
    }

    loginButton() {
        return cy.get(LOGIN_BTN);
    }

    profileDropdown() {
        return cy.get(PROFILE_DROPDOWN);
    }

    logoutButton() {
        return cy.get(LOGOUT_BTN);
    }
    regButton() {
        return cy.get(REG_BTN);
    }

    inputValidEmail() {
        // this.passwordForm().type(Cypress.env("dashboard_password"));
        this.emailField().type(("sanggamx@mailinator.com"));
    }
    inputValidPhone() {
        // this.passwordForm().type(Cypress.env("dashboard_password"));
        this.phoneField().type(("6282329073110"));
    }
    
    inputValidPassword() {
        this.passwordForm().type(("Testing21!"));
    }
    inputValidPassword2() {
        this.passwordForm2().type(("Testing21!"));
    }

    inputValidName() {
        this.nameForm1().type(("Sanggam"));
    }
    inputValidName2() {
        this.nameForm2().type(("Assesment"));
    }
    inputValidkota() {
        return cy.get(DOM_FIELD).type('KOTA JAKARTA BARAT', { timeout: 10000 }).type('{downarrow}')
        .type('{enter}');
    }


    clickValidCheck() {
        //return cy.get(CHECK_FORM);
        cy.get('.ALRT_CHECK').then(($element) => {
            if ($element.length > 0) {
              cy.contains('CHECK_FORM').click();
            } else {
              cy.log('ALRT_CHECK element not found. Skipping the check on CHECK_FORM.');
            }
          });
        
    }

    clickRegButton() {
        // this.navigateValidkota({ timeout: 10000 }).click();
        
        this.nameForm1().click();
        cy.get('#cityAndProvince').click()
        this.nameForm2().click();
        this.regButton().click();


    }
    validateHomepage(){
        cy.url().should('eq', 'https://www.cermati.com/app/gabung'); 
    }

    validateForm(){
        cy.get('.btn--action_kallT').should('exist');
    }

    registerWithCredentials(){
        this.inputValidEmail();
        this.inputValidPhone();
        this.inputValidPassword();
        this.inputValidPassword2();
        this.inputValidName();
        this.inputValidkota();

    }
    
    registerGo(){
        cy.wait(2000);
        this.inputValidName2();
        // this.clickValidCheck()
        this.clickRegButton();
    }
    validateOTPPage(){
        cy.url().should('eq', 'https://www.cermati.com/app/verification-methods');
    }
    
    inputInvalidPassword(){
        const invalidPassword = faker.internet.password(8);
        this.passwordForm().type(invalidPassword);
    }

    inputInvalidUsername(){
        const invalidUsername = faker.internet.userName('Automation', 'Agent');
        this.emailField().type(invalidUsername);
    }

    clickLoginButton() {
        this.loginButton().click();
    }

    isOnDashboardHomePage() {
        cy.contains("Home Page");
    }

    clickProfileDropdown() {
        this.profileDropdown().click();
    }

    clickLogoutButton() {
        this.logoutButton().click();
    }

    isLoggedOutSuccessfully() {
        cy.contains('You are now successfully sign out.');
    }

    credentialIsInvalid() {
        cy.contains('Please enter a correct username and password. Note that both fields may be case-sensitive.');
    }


    
}

const dashboardPage = new DashboardPage();
export default dashboardPage;