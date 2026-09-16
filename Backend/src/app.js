const express = require("express");
const postModel = require("./models/Post.model");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const uploadFile = require("./services/image.service");
const cors = require("cors");

const app = express();
app.use(cors())

app.post("/upload", upload.single("image"), async (req, res) => {
  const result = await uploadFile(req.file.buffer);
  console.log(result);

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });

  res.status(201).json({
    message: "Post Uploaded",
    post,
  });
});

app.get("/upload", async(req, res)=>{
        const post = await postModel.find()

      return res.status(200).json({
            message: "posts fetched successfully",
            post
        })
})

module.exports = app;
