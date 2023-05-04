const AppReply = require("../models/appreply");

const appreplyControl = {
  getReplies: async (req, res) => {
    try {
      const replies = await AppReply.findAll();
      return res.send(replies);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  },
  getOneReply: async (req, res) => {
    try {
      const reply = await AppReply.findByPk(req.params.id);
      return res.send(reply);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  },
  createReply: async (req, res) => {
    try {
      const {
        user_fid,
        app_review_fid,
        app_reply_id,
        content,
      } = req.body;

      const newReply = await AppReply.create({
        user_fid,
        app_review_fid,
        app_reply_id,
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
        app_review_fid,
        content,
      } = req.body;

      const verifyReply = await AppReply.findOne({
        where: { app_reply_id: req.params.id },
      });

      if (verifyReply) {
        const updatedReply = await AppReply.update(
          {
            user_fid,
            app_review_fid,
            content,
          },
          {
            where: {
              app_reply_id: req.params.id,
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
      const verifyReply = await AppReply.findOne({
        where: { app_reply_id: req.params.id },
      });

      if (!verifyReply) return res.status(404).send("Object not found in db");

      await AppReply.destroy({ where: { app_reply_id: req.params.id } });

      return res.send(`successfully deleted object id ${req.params.id}`);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  },
};

module.exports = appreplyControl;
