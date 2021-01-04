 import { Selector as $, t } from 'testcafe';
 import basePage from './basePage';
 import menu from '../pages/components/menu'


 const indexPage = {
   url: '',
   menu,
   featuredProducts: $('.image a'),
   sliderPics: $('#slideshow0 img')
   
 }

 export default {...indexPage, ...basePage};