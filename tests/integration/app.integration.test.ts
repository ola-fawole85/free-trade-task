import request from 'supertest';
import express from 'express';
import { setupApp } from '../../src/app';
import { App } from 'supertest/types';

// Mocking  database
jest.mock('./services/userService', () => ({
	getUserMWRR: jest.fn().mockImplementation((userId: string) => {
		if (userId === 'validUserId') {
			return Promise.resolve({
				lastWeek: '+3%',
				lastMonth: '+7%',
				lastYear: '+15%',
			});
		} else {
			return Promise.reject(new Error('User not found'));
		}
	}),
}));

describe('MWRR API Integration Tests', () => {
	let app;

	beforeAll(() => {
		app = setupApp();
	});

	it('should return MWRR for a valid user', async () => {
		const userId = 'validUserId';
		const response = await request(app).get(`/api/mwrr/${userId}`);

		expect(response.status).toBe(200);
		expect(response.body).toEqual({
			lastWeek: '+3%',
			lastMonth: '+7%',
			lastYear: '+15%',
		});
	});

	it('should handle non-existent users appropriately', async () => {
		const userId = 'invalidUserId';
		const response = await request(app).get(`/api/mwrr/${userId}`);

		//error handler
		expect(response.status).toBe(404);
	});
});
