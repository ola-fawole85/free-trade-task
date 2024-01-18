import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('#username');
    }

    public get inputPassword () {
        return $('#password');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    public get arrayOfStocks() {
		return $$('#arrayOfStocks');
	}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public async selectStocks(companyName: string) {
		const stocks = await this.arrayOfStocks;
		let found = false;

		for (const stock of stocks) {
			const stockName = await stock.getText();
			if (stockName === companyName) {
				await stock.click();
				found = true;
				break;
			}
		}

		if (!found) {
			throw new Error(`Text "${companyName}" not found in the search fields.`);
		}
	}

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
