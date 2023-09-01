import Anchor from "react-bootstrap/Anchor";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const ExamplePopover: React.FC = () => {
  return (
    <OverlayTrigger
      trigger="click"
      placement="left"
      overlay={
        <Popover>
          <Popover.Header as="h3">incik</Popover.Header>
          <Popover.Body>cıncık</Popover.Body>
        </Popover>
      }
    >
      <Anchor className="text-success">incikcıncık butonu</Anchor>
    </OverlayTrigger>
  );
};

export default ExamplePopover;
