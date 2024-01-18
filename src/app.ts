import express, { Application, Request, Response } from 'express';

// Defining the types for the MWRR response
type MWRRResponse = {
	lastWeek: string;
	lastMonth: string;
	lastYear: string;
};

// Function to setup and return the Express app
const setupApp = (): Application => {
	const app = express();

	// Endpoint to get MWRR for a user
	app.get('/api/mwrr/:userId', (req: Request, res: Response) => {
		const userId = req.params.userId;

		// For test purposes, this is hardcoded values
		const mwrrResponse: MWRRResponse = {
			lastWeek: '-2%',
			lastMonth: '+5%',
			lastYear: '+30%',
		};

		res.json(mwrrResponse);
	});

	return app;
};

const app = setupApp();
const port = 3000;

// Start the server
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});

export { setupApp };
