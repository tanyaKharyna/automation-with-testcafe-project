import { Selector as $ } from 'testcafe';
import basePage from './basePage';

const categoryPage = {
    noProductsMsg: $('#content p')
};

export default { ...categoryPage, ...basePage };
