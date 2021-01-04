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


async setPassword() {
  const password = faker.internet.password()
  await t
      .typeText(this.password, password)
      .typeText(this. confirmPassword, password)
}
,
async registerUser(name, lastName, email, telephone, adress, city, postcode, password) {
  await t
    .typeText(this.firstName, name)
    .typeText(this.lastName, lastName)
    .typeText(this.email, email)
    .typeText(this.telephone, telephone)
    .typeText(this.addressLine, adress)
    .typeText(this.city, city)
    .typeText(this.postcode, postcode)
    .click(this.country)
    .click($('[value="2"]'))
    .click(this.region)
    .click($('[value=2]'))
    .typeText(this.password, password)
    .typeText(this. confirmPassword, password)
    .click(this.consentCheckbox)
    .click(this.continueButton)
},
async fakerRegistr() {
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
}

export default {...registerPage, ...basePage};