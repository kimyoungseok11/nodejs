import express from "express";
import "express-async-errors";

let tweets = [
  {
    id: "1",
    text: "ddd",
    createAt: Date.now().toString(),
    name: "bob",
    username: "bob",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
  {
    id: "2",
    text: "ddd",
    createAt: Date.now().toString(),
    name: "kim",
    username: "kim",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
];

const router = express.Router();

//GET /tweets
//GET /tweets?username=:username
router.get("/", (req, res, next) => {
  const userName = req.query.username;
  const data = userName
    ? tweets.filter((t) => t.username === userName)
    : tweets;
  res.status(200).json(data);
});
//GET /tweets/:id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const data = tweets.find((t) => t.id === id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: `Tweet ${id} not found` });
  }
});
//POST /tweets
router.post("/", (req, res, next) => {
  const { text, name, username } = req.body;
  const tweet = {
    id: Date.now().toString(),
    text: text,
    createAt: new Date(),
    name: name,
    username: username,
  };
  console.log(tweet);
  tweets = [tweet, ...tweets];
  res.status(201).json(tweet);
});
//PUT /tweets/:id
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweets.find((t) => t.id === id);
  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet ${id} not found` });
  }
});
//DELETE /tweets/:id
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  tweets = tweets.filter((t) => t.id !== id);
  res.sendStatus(204);
});

export default router;
