

const Page = require('./page');

class ARPage extends Page {
    
    get addButton () {
        return $('button*=Element');
    }

    get delButton () {
        return $$('.added-manually');
    }

    get delClick () {
        return $('//body/div[2]/div[1]/div[1]/div[1]/button[1]');
    }

    open () {
        return super.open('add_remove_elements/');
    }
}

module.exports = new ARPage();
