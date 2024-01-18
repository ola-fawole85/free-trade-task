import { config } from './wdio.conf.ts';

exports.config = {
	...config,
	capabilities: [
		{
			platformName: 'iOS',
			'appium:deviceName': 'iPhone Simulator',
			'appium:platformVersion': '14.4',
			'appium:app': '/path/to/ios/app.app',
			'appium:automationName': 'XCUITest',
			// other iOS-specific capabilities
		},
	],
	// Additional iOS-specific configurations
};
