const BookReply = require("../models/bookreply");

const BookreplyControl = {
  getReplies: async (req, res) => {
    try {
      const replies = await bookReply.findAll();
      return res.send(replies);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  },
  getOneReply: async (req, res) => {
    try {
      const reply = await BookReply.findByPk(req.params.id);
      return res.send(reply);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  },
  createReply: async (req, res) => {
    try {
      const {
        user_fid,
        book_review_fid,
        content,
      } = req.body;

      const newReply = await BookReply.create({
        user_fid,
        book_review_fid,
        content,
      });

      return res.send(newReply);
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  },
  updateReply: async (req, res) => {
    try {
      const {
        user_fid,
        book_review_fid,
        content,
      } = req.body;

      const verifyReply = await BookReply.findOne({
        where: { book_reply_id: req.params.id },
      });

      if (verifyReply) {
        const updatedReply = await BookReply.update(
          {
            user_fid,
            book_review_fid,
            content,
          },
          {
            where: {
              book_reply_id: req.params.id,
            },
          }
        );

        return res.send(updatedReply);
      } else {
        return res.status(404).send("Object not found in db");
      }
    } catch (err) {
      return res.status(500).send(err.message);
    }
  },
  deleteReply: async (req, res) => {
    try {
      const verifyReply = await BookReply.findOne({
        where: { book_reply_id: req.params.id },
      });

      if (!verifyReply) return res.status(404).send("Object not found in db");

      await BookReply.destroy({ where: { book_reply_id: req.params.id } });

      return res.send(`successfully deleted object id ${req.params.id}`);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  },
};

module.exports = BookreplyControl;
