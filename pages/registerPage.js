import { Selector as $, Selector, t } from 'testcafe';
import faker from 'faker'
import basePage from './basePage';

const registerPage = {
firstName: $('#input-firstname'),
lastName: $('#input-lastname'),
email: $('#input-email'),
telephone: $('#input-telephone'),
addressLine: $('#input-address-1'),
city: $('#input-city'),
postcode: $('#input-postcode'),
country: $('#input-country'),
region: $('#input-zone'),
password: $('#input-password'),
confirmPassword: $('#input-confirm'),
consentCheckbox: $(`[name="agree"]`),
continueButton: $('[value="Continue"]'),

async registerUser() {
  await t
    .typeText(this.firstName, faker.name.firstName())
    .typeText(this.lastName, faker.name.lastName())
    .typeText(this.email, faker.internet.email())
    .typeText(this.telephone, faker.phone.phoneNumber())
    .typeText(this.addressLine, faker.address.streetAddress())
    .typeText(this.city, faker.address.city())
    .typeText(this.postcode, faker.address.zipCode())
    .click(this.country)
    .click($('option').withText('Sweden'))  
    .click(this.region)
    .click($('option').withText('Stockholm'))
    .typeText(this.password, 'password')
    .typeText(this. confirmPassword, 'password')
    .click(this.consentCheckbox)
    .click(this.continueButton)
},
};

export default {...registerPage, ...basePage};