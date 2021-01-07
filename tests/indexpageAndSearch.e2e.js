import { ClientFunction } from 'testcafe';
import menu from '../pages/components/menu';
import indexPage from '../pages/indexPage';
import searchResultPage from '../pages/searchResult.page';
import categoryPage from '../pages/categoryPage';
import msg from '../data/pageMsg';
const currencyData = require('../data/currencies.json');

fixture('Tests related to the index page and menu').page('http://opencart.abstracta.us/');

currencyData.forEach(data => {
   test(`should change the currency ${data.name}`, async t => {
      await indexPage.menu.changeCurrency(data.name);
      await t
         .expect(menu.chosenCurrency.innerText).contains(data.symbol);});
});

test('should return no search results', async t => {
   await t
      .click(indexPage.menu.searchButton)
      .expect(searchResultPage.noResultsMsg.innerText).eql(msg.noSearchResuls);
      });

test('should return a results for the searched keywork', async t => {
   const getLocation = ClientFunction(() => document.location.href.toString());
   const product = 'MacBook';
      await indexPage.menu.search(product);
      await t
         .expect(searchResultPage.results.innerText).contains(product)
         .expect(getLocation()).contains(product);
});

test('should show a message for an empty cart', async t => {
   const message = menu.emptyCartMsg.exists;
   await t
      .expect(menu.cardTotal.innerText).contains(msg.emptyCart)
      .click(menu.cartButton)
      .expect(message).ok();
});

test('should show a message for empty categories', async t => {
   await menu.chooseCategory('Software');
   await t.expect (categoryPage.noProductsMsg.innerText).eql(msg.emptyCategory);
});

test('should show two pitures in the slider', async t => {
   await t
      .expect(indexPage.sliderPics.count).eql(2)
      .expect(indexPage.featuredProducts.count).eql(4);
});