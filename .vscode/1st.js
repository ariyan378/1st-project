const express = require("express");
const sharp = require("sharp")
const fs = require("fs");
const AWS = require("aws-sdk");

const lambda = new AWS.Lambda({
  region: "us-east-1",
});

const app = express();
const uploadDir = "uploads";

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/upload", async (req, res) => {
  try {
    const { imageData, width, height, crop } = req.body;
    const buffer = Buffer.from(imageData, "base64");

    // Generate a unique filename
    const filename = Date.now() + ".jpg";
    const filePath = `${uploadDir}/${filename}`;

    // Process image using Sharp
    await sharp(buffer).resize(width, height).toFormat("jpeg").toFile(filePath);

    // Invoke serverless function (optional)
    const params = {
      FunctionName: "your-lambda-function-name", // Replace with your function name
      InvocationType: "Event",
      Payload: JSON.stringify({
        filePath: filePath,
      }),
    };
    await lambda.invoke(params).promise();

    res.json({ message: "Image uploaded and processed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
