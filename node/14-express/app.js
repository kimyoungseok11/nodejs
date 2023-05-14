import express from "express";
const app = express();

// app.get("/sky/:id", (req, res, next) => {
//   //   console.log(req.path);
//   //   console.log(req.headers);
//   console.log(req.query);
//   console.log(req.params);
//   console.log(req.query.keyword);
//   console.log(req.params.id);
//   //   res.send("hi");
//   //   res.json({ name: "ddd" });
//   //   res.sendStatus(400);
//   res.status(201).send("created");
// });

app.all("/api", (req, res, next) => {
  console.log("all");
  next();
});
app.use("/sky", (req, res, next) => {
  console.log("use");
  next();
});

app.use(express.json()); //post 요청 시 json을 받기 위해서 사용함

app.post("/", (req, res, next) => {
  console.log(req.body);
  next();
});

app.get(
  "/",
  (req, res, next) => {
    console.log("first");
    if (true) {
      return res.send("hello"); //return을 붙여야함
    }
    res.send("ddd");
    // next(new Error("error"));
  },
  (req, res, next) => {
    console.log("first2");
    next();
  }
);

app.get("/", (req, res, next) => {
  console.log("second");
});

app.use((req, res, next) => {
  res.status(404).send("not available");
});

app.use((error, req, res, next) => {
  //마지막 부분에는 에러 처리 부분을 작성해야함
  console.error(error);
  res.status(500).send("sorry");
});

app.listen(8080);
