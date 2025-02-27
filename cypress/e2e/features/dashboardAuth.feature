Feature: Cermati Gabung page

    As a superadmin, I want to be able to log into rukita superadmin Dashboard

    Background: navigate to cermati-gabung page
        Given User navigate to Cermati-gabung page

    Scenario: Perform register using valid credential
        When User navigate to homepage Cermati-Daftar
        Then User should land on dashboard homepage
        When User complete the following form
        And Procced the Register button
        Then Navigate to OTP Page

   