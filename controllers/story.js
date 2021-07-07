const Story = require('../models/Story');
const { convert } = require('html-to-text');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

exports.createStory = async (req, res, next) => {
	try {
		// Test Stuff
		// console.log(JSON.parse(req.body.tags));
		// fs.unlinkSync(req.file.path);
		// return res.status(500);

		cloudinary.uploader.upload(req.file.path, async (error, result) => {
			if (error) {
				return next(error);
			}
			const story = await Story.create({
				title: req.body.title,
				body: req.body.body,
				profilePic: result.url,
				category: req.body.category,
				tags: JSON.parse(req.body.tags),
				urls: JSON.parse(req.body.urls),
			});

			fs.unlinkSync(req.file.path);

			return res.json(story._id);
		});
	} catch (err) {
		return next(err);
	}
};

exports.getStoryById = async (req, res, next) => {
	try {
		const story = await Story.findById(req.params.id);
		return res.json(story);
	} catch (e) {
		return next(e);
	}
};

exports.getAllStories = async (req, res, next) => {
	try {
		const stories = await Story.find({});
		let newStories = [];

		stories.forEach((story) => {
			let bodyText = convert(story.body);
			bodyText = bodyText.split(' ');
			bodyText = bodyText.slice(0, Math.min(20, bodyText.length));
			bodyText = bodyText.join(' ');
			newStories.push({
				id: story._id,
				title: convert(story.title),
				body: bodyText,
				profilePic: story.profilePic,
				tags: story.tags,
			});
		});

		return res.json(newStories);
	} catch (e) {
		return next(e);
	}
};
