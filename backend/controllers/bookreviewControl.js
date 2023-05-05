const BookReview = require("../models/bookreview");

const BookreviewControl = {
  getReviews: async (req, res) => {
    try {
      const reviews = await BookReview.findAll();
      return res.send(reviews);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  },
  getOneReview: async (req, res) => {
    try {
      const review = await BookReview.findByPk(req.params.id);
      return res.send(review);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  },
  createReview: async (req, res) => {
    try {
      const {
        user_fid,
        book_fid,
        book_review_id,
        num_of_likes,
        content,
        review_rating,
      } = req.body;

      const newReview = await BookReview.create({
        user_fid,
        book_fid,
        book_review_id,
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
        book_fid,
        num_of_likes,
        content,
        review_rating,
      } = req.body;

      const verifyReview = await BookReview.findOne({
        where: { book_review_id: req.params.id },
      });

      if (verifyReview) {
        const updatedReview = await BookReview.update(
          {
            user_fid,
            book_fid,
            num_of_likes,
            content,
            review_rating,
          },
          {
            where: {
              book_review_id: req.params.id,
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
      const verifyReview = await BookReview.findOne({
        where: { book_review_id: req.params.id },
      });

      if (!verifyReview) return res.status(404).send("Object not found in db");

      await BookReview.destroy({ where: { book_review_id: req.params.id } });

      return res.send(`successfully deleted object id ${req.params.id}`);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  },
};

module.exports = BookreviewControl;
