const { Given, When, Then } = require('@cucumber/cucumber');
const LimitOrderPage = require('../pageobjects/LimitOrderPage');

Given(/^the user is on the Limit Order page$/, async () => {
	// Navigate to Limit Order page
});

When(/^the user sets the share price to "([^"]*)"$/, async (price) => {
	await LimitOrderPage.setSharePrice(price);
});

When(/^the user sets the share amount to "([^"]*)"$/, async (amount) => {
	await LimitOrderPage.setShareAmount(amount);
});

When(/^the user submits a buy order$/, async () => {
	await LimitOrderPage.submitBuyOrder();
});

Then(/^a buy order should be placed successfully$/, async () => {
	// Assert order placement
});
const { Given, When, Then } = require('@cucumber/cucumber');
const LimitOrderPage = require('../pageobjects/LimitOrderPage');

Given(/^the user is on the Limit Order page$/, async () => {
	// Navigate to Limit Order page
});

When(/^the user sets the share price to "([^"]*)"$/, async (price) => {
	await LimitOrderPage.setSharePrice(price);
});

When(/^the user sets the share amount to "([^"]*)"$/, async (amount) => {
	await LimitOrderPage.setShareAmount(amount);
});

When(/^the user submits a buy order$/, async () => {
	await LimitOrderPage.submitBuyOrder();
});

Then(/^a buy order should be placed successfully$/, async () => {
	// Assert order placement
});

// Additional steps for Limit Sell and Stop Loss Orders

When(/^the user submits a sell order$/, async () => {
	await LimitOrderPage.submitSellOrder();
});

When(
	/^the user sets the lower limit price to "([^"]*)"$/,
	async (lowerLimitPrice) => {
		await LimitOrderPage.setLowerLimitPrice(lowerLimitPrice);
	}
);

When(/^the user submits a stop loss order$/, async () => {
	await LimitOrderPage.submitStopLossOrder();
});

// Additional steps for Limit Sell and Stop Loss Orders

When(/^the user submits a sell order$/, async () => {
	await LimitOrderPage.submitSellOrder();
});

When(
	/^the user sets the lower limit price to "([^"]*)"$/,
	async (lowerLimitPrice) => {
		await LimitOrderPage.setLowerLimitPrice(lowerLimitPrice);
	}
);

When(/^the user submits a stop loss order$/, async () => {
	await LimitOrderPage.submitStopLossOrder();
});

// Additional steps for Limit Sell and Stop Loss Orders

When(/^the user submits a sell order$/, async () => {
	await LimitOrderPage.submitSellOrder();
});

When(
	/^the user sets the lower limit price to "([^"]*)"$/,
	async (lowerLimitPrice) => {
		await LimitOrderPage.setLowerLimitPrice(lowerLimitPrice);
	}
);

When(/^the user submits a stop loss order$/, async () => {
	await LimitOrderPage.submitStopLossOrder();
});

When(/^the user submits a sell order$/, async () => {
	await LimitOrderPage.submitSellOrder();
});

When(
	/^the user sets the lower limit price to "([^"]*)"$/,
	async (lowerLimitPrice) => {
		await LimitOrderPage.setLowerLimitPrice(lowerLimitPrice);
	}
);

When(/^the user submits a stop loss order$/, async () => {
	await LimitOrderPage.submitStopLossOrder();
});

When(/^the user submits a sell order$/, async () => {
	await LimitOrderPage.submitSellOrder();
});

When(
	/^the user sets the lower limit price to "([^"]*)"$/,
	async (lowerLimitPrice) => {
		await LimitOrderPage.setLowerLimitPrice(lowerLimitPrice);
	}
);

When(/^the user submits a stop loss order$/, async () => {
	await LimitOrderPage.submitStopLossOrder();
});

// Assert the placement of sell and stop loss orders
