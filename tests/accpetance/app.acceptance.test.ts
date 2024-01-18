import request from 'supertest';
import express from 'express';

import { setupApp } from '../../src/app';
import { App } from 'supertest/types';

describe('MWRR API Acceptance Tests', () => {
	let app: App;

	beforeAll(() => {
		app = setupApp();
	});

	it('should return the correct MWRR structure for a valid user', async () => {
		// Valid test user ID
		const testUserId = 'validTestUserId';

		const response = await request(app).get(`/api/mwrr/${testUserId}`);

		// Checking response status
		expect(response.status).toBe(200);

		// Ensuring all required fields are present
		expect(response.body).toHaveProperty('lastWeek');
		expect(response.body).toHaveProperty('lastMonth');
		expect(response.body).toHaveProperty('lastYear');

		// Verifying the format of the response
		expect(typeof response.body.lastWeek).toBe('string');
		expect(typeof response.body.lastMonth).toBe('string');
		expect(typeof response.body.lastYear).toBe('string');
	});

	it('should handle non-existent users appropriately', async () => {
		const nonExistentUserId = 'nonExistentUser';

		const response = await request(app).get(`/api/mwrr/${nonExistentUserId}`);

		// API returns a 404 for non-existent users
		expect(response.status).toBe(404);
	});

	// Other scenarios can cover invalid input formats
});
