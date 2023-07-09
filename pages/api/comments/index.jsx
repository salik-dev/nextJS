const { comments } = require("@/data/comments");
const handler = (req, res) => {
  if (req.method === "GET") { 
    res.status(200).json(comments);
  } else if (req.method === "POST") { 
    const comment = req.body.comment;  
    const newComments = {
      id: Date.now(),
      comments: comment,
    };
    comments.push(newComments);
    res.status(201).json(newComments);
  }
};
export default handler;
