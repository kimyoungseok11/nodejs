import * as postRepository from "../data/post.js";

export async function getPosting(req, res) {
  const username = req.query.username;
  const data = await (username
    ? postRepository.findPostByUserName(username)
    : postRepository.findAllPost());
  res.status(200).json(data);
}

export async function createPost(req, res) {
  const data = req.body;
  const postingDatas = await postRepository.insertPost(data);
  res.status(201).json(postingDatas);
}

export async function updatePost(req, res) {
  const id = req.params.id;
  const contents = req.body.contents;
  console.log(id, contents);
  const data = await postRepository.updatePost(id, contents);
  console.log(data);
  res.status(200).json(data);
}

export async function deletePost(req, res) {
  const id = req.params.id;
  const data = await postRepository.deletePost(id);
  res.status(204).json(data);
}
