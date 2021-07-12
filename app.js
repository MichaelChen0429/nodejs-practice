const express = require('express');

const postsRoute = require('./routes/posts');
const app = express();
// form_urlencoded data
app.use(express.urlencoded({ extended: false}));

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
  res.send(200);
});

app.listen(3000, () => {
  console.log('server is running on port 3000');
});

// const posts = [
//   { title: 'learn', subtitle: 'ya!'},
//   { title: 'sleep', subtitle: 'yaya!'}
// ]


// // 用路徑取得單一文章
// app.get('/posts/:title', (req, res) => {
//   const { title } = req.params;
//   const post = posts.find((post) => post.title === title);
//   if (post) res.status(200).send(post);
//   else res.status(404).send('Not Found');
// });

// // Query Params 取得單一文章，若無參數，取得全部文章；若文章不存在，則回傳 404
// app.get('/posts', (req, res) => {
//   const { title } = req.query;
//   if (title) {
//     const post = posts.find((post) => post.title === title);
//     if (post) res.status(200).send(post);
//     else res.status(404).send('Not Found');
//   }
//   res.status(200).send(posts);
// });
// // post
// app.post('/posts', (req, res) => {
//   // 新建內容加入list
//   const post = req.body;
//   posts.push(post);
//   console.log(post);
//   res.status(201).send('create posts');
// });


