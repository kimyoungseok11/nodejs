import * as userRepository from "./auth.js";

// let tweets = [
//   {
//     id: '1',
//     text: '드림코더분들 화이팅!',
//     createdAt: new Date().toString(),
//     userId: '1',
//   },
//   {
//     id: '2',
//     text: '안뇽!',
//     createdAt: new Date().toString(),
//     userId: '1',
//   },
// ];

import { db } from "../db/database.js";

export async function getAll() {
  // return Promise.all(
  //   tweets.map(async (tweet) => {
  //     const { username, name, url } = await userRepository.findById(
  //       tweet.userId
  //     );
  //     return { ...tweet, username, name, url };
  //   })
  // );
  return db
    .execute(
      `select tw.id, tw.text, tw.createdAt, us.username, us.name, us.url 
    from tweet as tw join users as us where tw.userid = us.id order by tw.createAt desc`
    )
    .then((result) => result[0]);
}

export async function getAllByUsername(username) {
  // return getAll().then((tweets) =>
  //   tweets.filter((tweet) => tweet.username === username)
  // );
  // db.execute("select * from tweet where username")
  return db
    .execute(
      `select tw.id, tw.text, tw.createdAt, tw.userid, us.username, us.name, us.url 
    from tweet as tw join users as us where tw.userid = us.id and username=? order by tw.createdAt desc`,
      [username]
    )
    .then((result) => result[0]);
}

export async function getById(id) {
  // const found = tweets.find((tweet) => tweet.id === id);
  // if (!found) {
  //   return null;
  // }
  // const { username, name, url } = await userRepository.findById(found.userId);
  // return { ...found, username, name, url };
  return db
    .execute(
      `select tw.id, tw.text, tw.createdAt, tw.userid, us.username, us.name, us.url 
    from tweet as tw join users as us where tw.userid = us.id and tw.id=? order by tw.createdAt desc`,
      [id]
    )
    .then((result) => result[0]);
}

export async function create(text, userId) {
  // const tweet = {
  //   id: new Date().toString(),
  //   text,
  //   createdAt: new Date(),
  //   userId,
  // };
  // tweets = [tweet, ...tweets];
  // return getById(tweet.id);
  const date = new Date();
  return db
    .execute("insert into tweet (text,createdAt,userid) value (?,?,?)", [
      text,
      date,
      userId,
    ])
    .then((result) => getById(result[0].insertId));
}

export async function update(id, text) {
  // const tweet = tweets.find((tweet) => tweet.id === id);
  // if (tweet) {
  //   tweet.text = text;
  // }
  // return getById(tweet.id);
  return db
    .execute("update tweet set text=? where id=?", [text, id])
    .then(() => getById(id));
}

export async function remove(id) {
  // tweets = tweets.filter((tweet) => tweet.id !== id);
  db.execute("delete from tweet where id=?", [id]);
}
