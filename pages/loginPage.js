import { Selector as $, t } from 'testcafe';
import basePage from './basePage';

const productPage = {
thumbnail: '.thumbnail img',
addToCart: '#button-cart',
inputQuantity: '#input-quantity',
description: $('a').withText('Description'),
reviews: 'ul.nav.nav-tabs li:nth-child(2) a',

async await 
}

export default {...productPage, ...basePage};