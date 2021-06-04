import { useState } from "react";
import { useForm } from "react-hook-form";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Comment = (props) => {
  const [show, setShow] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [commentText, setCommentText] = useState(props.comment.commentText);

  const { register, handleSubmit } = useForm();

  const onSubmit = (comment) => {
    console.log(props.activityId);
    console.log(props.comment._id);
    console.log(comment.commentText);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("activityId", props.activityId);
    urlencoded.append("commentId", props.comment._id);
    urlencoded.append("commentText", comment.commentText);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:5000/itineraries/edit-comment", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    setShowForm(!showForm);
    setCommentText(comment.commentText);
  };

  const handleEdit = () => {
    setShowForm(!showForm);
  };

  const handleDelete = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("activityId", props.activityId);
    urlencoded.append("commentId", props.comment._id);

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:5000/itineraries/delete-comment", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    setShow(!show);
  };

  return (
    <div>
      <h6>Comment.js</h6>
      {show ? (
        <p>
          <strong>{props.comment.userName}: </strong>
          {commentText}
          {props.user.id === props.comment.userId ? (
            <>
              <Button
                variant="link"
                size="sm"
                type="submit"
                onClick={handleEdit}
              >
                Edit
              </Button>
              <Button
                variant="link"
                size="sm"
                type="submit"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </>
          ) : (
            ""
          )}
        </p>
      ) : (
        ""
      )}

      {showForm ? (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="commentText">
            <Form.Control
              required
              type="text"
              defaultValue={commentText}
              {...register("commentText")}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      ) : (
        ""
      )}
    </div>
  );
};

export default Comment;
