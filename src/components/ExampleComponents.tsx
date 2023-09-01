import Col from "react-bootstrap/Col";
import ExamplePopover from "@/components/ExamplePopover";
import ExampleOffcanvas from "./ExampleOffcanvas";

const ExampleComponents: React.FC = () => {
  return (
    <>
      <Col lg={8} className="px-0">
        <p className="fs-4">
         Prestij Anal-iz gururla sunar.
        </p>
        <p>
          Biz ANALiz yaparız.
        </p>
      </Col>

      <ExampleOffcanvas className="me-3" />
      <ExamplePopover  />
    </>
  );
};

export default ExampleComponents;
