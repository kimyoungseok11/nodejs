import * as tweetRepository from "../data/tweetData.js";

export const getTweet = async (req, res, next) => {
  const userName = req.query.username;
  const data = await (userName
    ? tweetRepository.getAllByUsername(userName)
    : tweetRepository.getAll());
  res.status(200).json(data);
};

export const getById = async (req, res, next) => {
  const id = req.params.id;
  const data = await getById(id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: `Tweet ${id} not found` });
  }
};

export const create = async (req, res, next) => {
  const { text, name, username } = req.body;
  const tweets = await tweetRepository.create(text, name, username);

  res.status(201).json(tweets);
};

export const update = async (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = await tweetRepository.update(id, text);

  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet ${id} not found` });
  }
};

export const remove = async (req, res, next) => {
  const id = req.params.id;
  await tweetRepository.remove(id);
  res.sendStatus(204);
};
