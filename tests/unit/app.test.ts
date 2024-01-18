import request from 'supertest';
import express from 'express';
import type { Express } from 'express';
import { setupApp } from '../../src/app';

describe('MWRR API', () => {
	let app;

	beforeAll(() => {
		app = setupApp();
	});

	it('should return MWRR for a given user', async () => {
		const userId = '123'; //user ID
		const response = await request(app).get(`/api/mwrr/${userId}`);

		expect(response.status).toBe(200);
		expect(response.body).toEqual({
			lastWeek: expect.any(String),
			lastMonth: expect.any(String),
			lastYear: expect.any(String),
		});
	});
});
