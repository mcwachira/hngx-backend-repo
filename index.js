const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // Use port 8080 by default

app.get('/api', (req, res) => {
	// Retrieve two GET request parameters: slack_name and track
	const slackName = req.query.slack_name || 'wachira 100';
	const track = req.query.track || 'Backend';

   const dayOfWeek = moment().tz("UTC").format("dddd");
    const currentUTCtime = moment().tz('UTC').format("YYYY-MM-DDTHH:mm:ss[Z]")

	// Github URLs
	const githubUrlFile = "https://github.com/mcwachira/hngx-backend-repo/blob/main/index.js";
	const githubUrlSource = "https://github.com/mcwachira/hngx-backend-repo";

	

	const response = {
		slack_name: slackName,
		current_day: dayOfWeek,
		utc_time: currentUTCtime,
		track: track,
		github_file_url: githubUrlFile,
		github_repo_url: githubUrlSource,
		status: 200,
	};

		res.json(response);
	});

app.listen(port, () => { 
	console.log(`Server is running on port ${port}`); 
	});
