Package.describe({
	name:    "msavin:sjobs",
	summary: "The simple jobs queue that just works [synced, schedule, tasks, background, later, worker, cron]",
	version: "3.0.2",
	documentation: "README.md",
	git:     "https://github.com/msavin/SteveJobs.git",
});

Package.onUse(function(api) {
    api.versionsFrom('1.3');
	api.use(["mongo", "random", "ecmascript", "check", "promise"], "server");
	api.mainModule("server/api.js", "server");
	api.export(["Jobs", "JobsInternal"]);
});
