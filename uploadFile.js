
import {Selector} from 'testcafe';


fixture `File upload`
    .page `http://the-internet.herokuapp.com/upload`;

test('User shoul be able to upload single file', async t => {
    await t.click("#file-upload")
    await t.setFilesToUpload("[id='file-upload']", 'package.json');
    await t.wait(2000);
    //
    await t.expect(Selector('#uploaded-files').innerText).eql('package.json');
    await t.expect(Selector('.example h3').innerText).eql('File Uploaded!');

    await t.click("#file-submit");
});