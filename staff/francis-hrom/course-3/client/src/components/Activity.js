import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const Activity = (props) => {
  return (
    <div>
      <p>Activity.js</p>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            {props.activity.title}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>Duration: {props.activity.duration} </p>
              <p>Price: {props.activity.price} </p>
              <p> {props.activity.summary}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default Activity;
