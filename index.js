const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // Use port 8080 by default

app.get('/info', (req, res) => {
	// Retrieve two GET request parameters: slack_name and track
	const slackName = req.query.slack_name || 'wachira 100';
	const track = req.query.track || 'Backend';

	const now = new Date();
	const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
	const utcTime = now.toISOString();

	// Github URLs
	const githubUrlFile = "https://github.com/mcwachira/hngx-backend-repo/blob/main/index.js";
	const githubUrlSource = "https://github.com/mcwachira/hngx-backend-repo";

	// Validate UTC time within +/- 2 hours
	const currentTime = now.getTime();
	const utcOffset = now.getTimezoneOffset();
	if (Math.abs(utcOffset) > 120) {
		return res.status(400).json({ status: 'Error', message: 'UTC time is not within +/- 2 hours' });
	}

	const response = {
		slack_name: slackName,
		day_of_week: dayOfWeek,
		utc_time: utcTime,
		track: track,
		github_url_file: githubUrlFile,
		github_url_source: githubUrlSource,
		status: 'Success',
	};

		res.json(response);
	});

app.listen(port, () => { 
	console.log(`Server is running on port ${port}`); 
	});
