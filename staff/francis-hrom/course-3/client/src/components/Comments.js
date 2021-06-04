import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Comment from "./Comment";

const Comments = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(props.comments || []);
  }, [props.comments]);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (comment) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("activityId", props.activityId);
    urlencoded.append("userId", props.user.id);
    urlencoded.append("userName", props.user.name);
    urlencoded.append("commentText", comment.commentText);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:5000/itineraries/add-comment", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    setComments([
      ...comments,
      {
        userId: props.user.id,
        userName: props.user.name,
        commentText: comment.commentText,
      },
    ]);
    reset();
  };

  return (
    <div>
      <h4>Comments.js</h4>
      <h6>Comments:</h6>
      {comments.map((comment) => (
        <Comment
          comment={comment}
          user={props.user}
          activityId={props.activityId}
        />
      ))}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="commentText">
          <Form.Control
            required
            type="text"
            placeholder="Add comment ..."
            {...register("commentText")}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Comments;
