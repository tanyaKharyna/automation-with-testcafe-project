import { Selector as $, t } from 'testcafe';
import basePage from './basePage';

const searchResultPage = {
inputSearch: $('#input-search'),
results: $('h4 a'),
noResultsMsg: $('p:nth-child(7)'),
noProductsMsg: $('#content p'),
breadcrump: $('ul.breadcrumb li:nth-child(2) a'),





}

export default {...searchResultPage, ...basePage};