import productPage from '../pages/productPage';
import msg from '../data/pageMsg';

fixture('Tests related to the product page').page('http://opencart.abstracta.us/index.php?route=product/product&path=20_27&product_id=41');

test('should show an error if review is too short', async t => {
    await productPage.leaveReview(2);
    await t
        .expect(productPage.errorMsg.visible).ok()
        .expect(productPage.successMsg.visible).notOk();
});

test('should submit a review', async t => {
    await productPage.leaveReview(10, 3);
    await t
        .expect(productPage.errorMsg.visible).notOk()
        .expect(productPage.successMsg.visible).ok();
});

test('should add a product to the cart', async t => {
    await productPage.addToCart();
    await t
        .expect(productPage.menu.cardTotal.innerText).contains(msg.oneProductInCart)
        .expect(productPage.successMsg.visible).ok();
});

test('should take a user to the cart', async t => {
    await productPage.addToCart();
    await t
        .expect(productPage.menu.cardTotal.innerText).contains(msg.oneProductInCart)
        .expect(productPage.successMsg.visible).ok();
});

test('should have equal title and product name', async t => {
    const h1 = await productPage.h1.innerText;
    await t.expect(productPage.title.innerText).eql(h1, 'check element text', { allowUnawaitedPromise: true });
});
