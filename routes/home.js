/***
home.js
This module contains all the view rendering.
What all is visible to the eyes comes right through here.
**/

var assetsMapper = require("../asset-mapper.json")
var jobList = require("../partialsContent/jobs.json")
var perkList = require("../partialsContent/perksAndBenefits.json")
var aboutUs = require("../partialsContent/aboutUs.json")
var bestPractices = require("../partialsContent/bestPractices.json")
var ourCommitment = require("../partialsContent/ourCommitment.json")
var ourInitiative = require("../partialsContent/ourInitiative.json")

module.exports = function(settings){
	var app = settings.app;
	var mode = settings.mode;
	var config = settings.config;
	var env = settings.env;
	var baseUrl =  config["baseUrl"];
	if(env=="local")
		baseUrl= config["baseUrl_local"];
	function isAuthenticated(req, res, next) {
		//bypassing the auth for development
		return next()
    // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
    // you can do this however you want with whatever variables you set up
    	if (req.session.authenticated)
        	return next();
    // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
    	res.redirect('/sign-in');
	}

	app.get("/", isAuthenticated,function(req, res){
		var i
		perkListLength = perkList["perkList"].length
		j = 0;
		perkObj = {};
		for(i = 0; i < perkListLength; i++) {
			if(i%2 == 0) {
				 j++;
				 perkObj["perks-"+j+""] = []
			}
			perkObj["perks-"+j+""].push(perkList["perkList"][i])
		}
		res.render("index", {
			title: "",
			styles:  assetsMapper["index"]["styles"][mode],
			scripts: assetsMapper["index"]["scripts"][mode],
			jobs: jobList["jobs"],
			perkObj: perkObj,
			aboutUs: aboutUs["aboutUs"],
			bestPractices: bestPractices["bestPracticesSection"],
			commitment: ourCommitment["commitment"],
			initiatives: ourInitiative["initiatives"],
			baseUrl: baseUrl
		});
	});
}
