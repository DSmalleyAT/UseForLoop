const ARPage = require('../pageobjects/addremove.page');


describe('My Elements application', () => {
    it('should click add element 5 times', async () => {
        await ARPage.open();

        for (let i = 0; i < 5; i++) {
            await ARPage.addButton.click();
            await browser.pause(500);
        }
    });

    it('should now have 5 delete elements', async () => {
        await expect(ARPage.delButton).toBeElementsArrayOfSize(5);
    });

    it('should click delete 2 times', async () => {
        for (let i = 0; i < 2; i++) {
            await ARPage.delClick.click();
            await browser.pause(500);
        }
    });

    it('should finish with 3 delete elements', async () => {
        await expect(ARPage.delButton).toBeElementsArrayOfSize(3);
    });
});