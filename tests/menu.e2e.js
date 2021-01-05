import { ClientFunction } from 'testcafe';
import menu from '../pages/components/menu';
import indexPage from '../pages/indexPage';
import searchResultPage from '../pages/searchResult.page'
import categoryPage from '../pages/categoryPage';
import msg from '../data/pageMsg';
import products from '../data/products'
const currencyData = require('../data/currencies.json');


fixture `Tests related to menu and navigation`
       .page `http://opencart.abstracta.us/`

         
       currencyData.forEach(data => {
         test(`should change the currency ${data.name}`, async t => {
         await indexPage.menu.changeCurrency(data.name)
         await t
               .expect(menu.chosenCurrency.innerText).contains(data.symbol);
       });  
      });

      test('should return no serch results', async t => {
         await t
               .click(indexPage.menu.searchButton)
               .expect(searchResultPage.noResultsMsg.innerText).eql(msg.noSearchResuls);
      });

      test.only('should return searched results if product is found ', async t => {
         const getLocation = ClientFunction(() => document.location.href.toString());
         const product = 'MacBook';
         await indexPage.menu.search(product);
         await t
               .expect(searchResultPage.results.innerText).contains(product)
               .expect(getLocation()).contains(product)
      });

   
      test('should show message for empty cart', async t => {
         const message = menu.emptyCartMsg.exists;
         await t
               .expect(menu.cardTotal.innerText).contains(msg.emptyCart)
               .click(menu.cartButton)
               .expect(message).ok();
      });

      test('should show message for empty categories', async t => {
         await menu.chooseCategory('Software');
         await t.expect (categoryPage.noProductsMsg.innerText).eql(msg.emptyCategory);
      });

      test('should show two pitures in slider', async t => {
         await t
            .expect(indexPage.sliderPics.count).eql(2)
            .expect(indexPage.featuredProducts.count).eql(4);
      })




      //Test 1 href should include = search=macbook and the link itself