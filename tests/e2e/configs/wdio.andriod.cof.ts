import { config } from './wdio.conf.ts';
import { join } from 'path';

exports.config = {
	...config,
	capabilities: [
		{
			platformName: 'Android',
			'appium:deviceName': 'Android Emulator',
			'appium:platformVersion': '11.0',
			'appium:app': join(process.cwd(), 'path', 'to', 'android-app.apk'), //Android app path
			'appium:automationName': 'UiAutomator2',
			// other Android-specific capabilities
		},
	],
	// Additional Android-specific configurations
};
