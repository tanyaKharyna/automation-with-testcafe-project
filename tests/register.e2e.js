import { ClientFunction } from 'testcafe';
import registerPage from '../pages/registerPage';

fixture('Tests related to the Register page').page('https://opencart.abstracta.us/index.php?route=account/register');

test('should register a user', async t => {
    const getUrl = ClientFunction(() => document.location.href.toString());
    await registerPage.registerUser();
    await t.expect(getUrl()).contains('=account/success');
});