import { ClientFunction } from 'testcafe';
import loginPage from '../pages/loginPage';
import registerPage from '../pages/registerPage'
import {invalidUser} from '../data/roles'

fixture `Register page should work as expected`
       .page `https://opencart.abstracta.us/index.php?route=account/register`

       

    test(`should show validation`, async t => {
      const getUrl = ClientFunction(() => document.location.href.toString());
      await registerPage.fakerRegistr()
      await t
            .expect(getUrl()).contains('=account/success')
    });  

    test.only(`shoudn't login invalid users`), async t => {
      await t
            .userRole(invalidUser)
            .expect(loginPage.errorMsg.exists).ok()
    }
    