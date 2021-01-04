import {Selector as $, t} from 'testcafe';
import basePage from '../basePage';

const menu = {
  cartButton: $('#cart button'),
  cardTotal: $('#cart-total'),
  searchInput: $(`[name = 'search']`),
  searchButton: $('.input-group-btn button'),
  logo: $('#logo img'),
  currencyForm: $('#form-currency'),
  contactUsPage: $('div#top-links li:nth-child(1) > a > i'),
  shoppingCartPage: $('[title = "Shopping Cart"] '),
  chosenCurrency: $('strong'),
  emptyCartMsg: $('div#cart p'),
 
  /**
   * Search for goods
   * @param  {string}
   */

  async search(text) {
    await t
      .typeText(this.searchInput, text)
      .click(this.searchButton)
  },

  async changeCurrency(currency) {
    await t
     .click(this.currencyForm)
     .click($(`[name = ${currency}]`))
  },
 
 async chooseCategory(category) {
   await t
      .click($('ul.nav a').withText(`${category}`))
 }
}




export default { ...basePage, ...menu };