import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import dashboardPage from "../../e2e/pages/dashboardPage";

Given("User navigate to Cermati-gabung page", ()=>{
    dashboardPage.visit();
});

When("User navigate to homepage Cermati-Daftar", ()=>{
    dashboardPage.validateHomepage();
});

Then("User should land on dashboard homepage", ()=>{
    dashboardPage.validateForm();
});

When("User complete the following form", ()=>{
    dashboardPage.registerWithCredentials();
});

And("Procced the Register button", ()=>{
    dashboardPage.registerGo();
});
Then("Navigate to OTP Page", ()=>{
    dashboardPage.validateOTPPage();
}); 
