let postingDatas = [
  {
    id: 1,
    username: "kim",
    contents: "hello",
  },
  {
    id: 2,
    username: "lee",
    contents: "dd",
  },
];

export async function findPostByUserName(userName) {
  return postingDatas.filter((post) => post.username === userName);
}

export async function findAllPost() {
  return postingDatas;
}

export async function insertPost(data) {
  const { username, contents } = data;
  const newData = {
    id: Date().toString(),
    username,
    contents,
  };
  postingDatas = [...postingDatas, newData];
  return postingDatas;
}

export async function updatePost(id, contents) {
  const data = postingDatas.find((posting) => posting.id === Number(id));
  if (!data) {
    return;
  }
  data.contents = contents;
  return postingDatas;
}

export async function deletePost(id) {
  postingDatas = postingDatas.filter((post) => post.id !== Number(id));
  return postingDatas;
}
