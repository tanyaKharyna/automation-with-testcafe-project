import { Selector as $, t } from 'testcafe';
import faker from 'faker';
import basePage from './basePage';
import menu from '../pages/components/menu';

const productPage = {
    thumbnail: $('.thumbnail img'),
    inputQuantity: $('#input-quantity'),
    description: $('a').withText('Description'),
    reviews: $('ul.nav.nav-tabs li:nth-child(2) a'),
    nameInput: $('#input-name'),
    reviewInput: $('#input-review'),
    addReviewBtn: $('#button-review'),
    rate: $('input[value = "2"]'),
    errorMsg: $('[class="alert alert-danger"]'),
    successMsg: $('[class="alert alert-success"]'),
    cartBtn: $('#button-cart'),
    title: $('title'),
    h1: $('h1'),
    menu,

    async leaveReview(numberOfWords, rating) {
        await t
            .click(this.reviews)
            .typeText(this.nameInput, faker.name.findName())
            .typeText(this.reviewInput, faker.lorem.words(`${numberOfWords}`))
            .click($(`[value= "${rating}"]`))
            .click(this.addReviewBtn);
    },

    async addToCart() {
        await t.click(this.cartBtn);
    }
};

export default { ...productPage, ...basePage };
