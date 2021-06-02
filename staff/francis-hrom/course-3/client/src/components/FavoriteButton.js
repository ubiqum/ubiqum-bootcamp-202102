import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Star, StarFill } from "react-bootstrap-icons";

const FavoriteButton = (props) => {
  const [favorite, setFavorite] = useState();

  useEffect(() => {
    setFavorite(props.favorite);
  }, [props.favorite]);

  const handleClick = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("userId", props.userId);
    urlencoded.append("activityId", props.activityId);

    if (favorite) {
      const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };

      fetch("http://localhost:5000/users/remove-favorite", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log("Deleted: " + result))
        .catch((error) => console.log("error", error));
    } else {
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };

      fetch("http://localhost:5000/users/add-favorite", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log("Added: " + result))
        .catch((error) => console.log("error", error));
    }
    setFavorite(!favorite);
  };

  return (
    <div>
      <Button variant="light" onClick={handleClick}>
        {favorite ? <StarFill fill="yellow" /> : <Star />}
      </Button>
    </div>
  );
};

export default FavoriteButton;
