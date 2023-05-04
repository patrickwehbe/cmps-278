const AppReview = require("../models/appreview");

const appreviewControl = {
  getReviews: async (req, res) => {
    try {
      const reviews = await AppReview.findAll();
      return res.send(reviews);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  },
  getOneReview: async (req, res) => {
    try {
      const review = await AppReview.findByPk(req.params.id);
      return res.send(review);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  },
  createReview: async (req, res) => {
    try {
      const {
        user_fid,
        app_fid,
        app_review_id,
        num_of_likes,
        content,
        review_rating,
      } = req.body;

      const newReview = await AppReview.create({
        user_fid,
        app_fid,
        app_review_id,
        num_of_likes,
        content,
        review_rating,
      });

      return res.send(newReview);
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  },
  updateReview: async (req, res) => {
    try {
      const {
        user_fid,
        app_fid,
        num_of_likes,
        content,
        review_rating,
      } = req.body;

      const verifyReview = await AppReview.findOne({
        where: { app_review_id: req.params.id },
      });

      if (verifyReview) {
        const updatedReview = await AppReview.update(
          {
            user_fid,
            app_fid,
            num_of_likes,
            content,
            review_rating,
          },
          {
            where: {
              app_review_id: req.params.id,
            },
          }
        );

        return res.send(updatedReview);
      } else {
        return res.status(404).send("Object not found in db");
      }
    } catch (err) {
      return res.status(500).send(err.message);
    }
  },
  deleteReview: async (req, res) => {
    try {
      const verifyReview = await AppReview.findOne({
        where: { app_review_id: req.params.id },
      });

      if (!verifyReview) return res.status(404).send("Object not found in db");

      await AppReview.destroy({ where: { app_review_id: req.params.id } });

      return res.send(`successfully deleted object id ${req.params.id}`);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  },
};

module.exports = appreviewControl;
