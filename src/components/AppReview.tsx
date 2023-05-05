import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Box,
  Stack,
  IconButton,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  DialogTitle,
} from "@mui/material";
import Rating from "@mui/lab/Rating";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import "./AppReview.css";
import { useAddAppReplyMutation, useGetAllAppRepliesQuery } from "../api/appreply.api";
import { any } from "prop-types";
import { useGetAllUsersQuery } from "../api/user.api";


export default function AppReview({
  app_review_id,
  user_fid,
  app_fid,
  num_of_likes,
  content,
  review_rating,
  user_image,
  user_username,
}: any) {
  const [likes, setLikes] = useState(num_of_likes);
  const [liked, setLiked] = useState(false);
  const [replyDialogOpen, setReplyDialogOpen] = useState(false);
  const [replyText, setReplyText] = useState("");
  const { data: allReplies } = useGetAllAppRepliesQuery({});
  const replies = allReplies?.filter((reply: any) => reply.app_review_fid === app_review_id) || [];
  const [addAppReply] = useAddAppReplyMutation();
  const [showReplies, setShowReplies] = useState(false);
  const [replyList, setReplyList] = useState(replies);

  useEffect(() => {
    setReplyList(replies);
    }, [replies, addAppReply, replyList]);


  const { data: allUsers } = useGetAllUsersQuery({});

  const findUser = (userFid: number) => {
    return allUsers?.find((user: any) => user.user_id === userFid) || null;
  };

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };


  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleReplyDialogOpen = () => {
    setReplyDialogOpen(true);
  };

  const handleReplyDialogClose = () => {
    setReplyDialogOpen(false);
  };

  const handleReplySubmit = async () => {
    console.log("Submitted reply:", replyText);

    const randomUserFid = Math.floor(Math.random() * 6) + 1;

    const newAppReply = {
      content: replyText,
      user_fid: randomUserFid,
      app_review_fid: app_review_id,
    };

    await addAppReply(newAppReply);

    setReplyList([...replyList, newAppReply]);
    setReplyText("");
    handleReplyDialogClose();
  };
  console.log(replies);

  return (
    <Card sx={{ maxWidth: 1000, boxShadow: "none" }} key={app_review_id}>
      <CardContent>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <div className="reviewDetails">
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar src={user_image} />
              <Typography
                variant="body1"
                component="div"
                className="appreview_username"
              >
                {user_username}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography
                variant="body2"
                color="text.secondary"
                className="appreview_rating"
                sx={{ marginLeft: "5%" }}
              >
                {review_rating}
              </Typography>
              <Rating value={review_rating} precision={0.1} readOnly />
            </Stack>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: "16px", fontWeight: "bold" }}
            >
              {content}
            </Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Button
                variant="contained"
                color="primary"
                sx={{
                  textTransform: "none",
                }}
                onClick={handleReplyDialogOpen}
              >
                Reply
              </Button>
              <Box display="flex" alignItems="center">
                <IconButton
                  color={liked ? "primary" : "default"}
                  onClick={handleLike}
                >
                  <ThumbUpIcon />
                </IconButton>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="appreview_likes"
                >
                  {likes}
                </Typography>
              </Box>
            </Box>
          </div>
        </Stack>
        </CardContent>

<Button
  onClick={toggleReplies}
  color="primary"
  sx={{ marginLeft: "10%", marginBottom: "16px" }}
>
  {showReplies ? "Hide Replies" : "Show Replies"}
</Button>

{showReplies && (
  <Card sx={{ maxWidth: 1000, boxShadow: "none" }} key={app_review_id}>
    {replyList.map((reply: any) => {
      const user = findUser(reply.user_fid);
      return (
        <Box key={reply.id} sx={{ marginLeft: "10%", marginTop: "2%" }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar src={user?.user_image || ""} />
            <Typography variant="body1" component="div">
              {user?.user_username || "Unknown"}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginLeft: "56px", marginTop: "1%" }}
          >
            {reply.content}
          </Typography>
        </Box>
      );
    })}
  </Card>
)}

      <Dialog
        open={replyDialogOpen}
        onClose={handleReplyDialogClose}
        aria-labelledby="reply-dialog-title"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="reply-dialog-title">Reply to Review</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="reply"
            label="Your Reply"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleReplyDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleReplySubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
