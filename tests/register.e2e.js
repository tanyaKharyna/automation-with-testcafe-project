import registerPage from '../pages/registerPage'
import { ClientFunction } from 'testcafe';


fixture `Register page should work as expected`
       .page `https://opencart.abstracta.us/index.php?route=account/register`

       

    test(`should show validation`, async t => {
    const getUrl = ClientFunction(() => document.location.href.toString());
    await registerPage.fakerRegistr()
    await t
          .expect(getUrl()).contains('=account/success')
    });  
    