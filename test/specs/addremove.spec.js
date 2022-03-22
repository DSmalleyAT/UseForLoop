const ARPage = require('../pageobjects/addremove.page');


describe('My Elements application', () => {
    it('should click add element 5 times', async () => {
        await ARPage.open();

        for (let i = 0; i < 5; i++) {
            await ARPage.inputAddButton.click();
            await browser.pause(500);
        }
    });

    it('should now have 5 delete buttons', async () => {
    
        await expect(ARPage.maxButtons).toBeExisting();
    });

    it('should click delete 2 times', async () => {


        for (let i = 0; i < 2; i++) {
            await ARPage.newDelButton.click();
            await browser.pause(500);
        }
    

        // await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        // await expect(SecurePage.flashAlert).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
    });
    it('should finish with 3 delete buttons', async () => {
    
        await expect(ARPage.finalButtons).toBeExisting();
    });

});