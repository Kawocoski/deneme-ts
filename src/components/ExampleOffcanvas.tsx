import { useState } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Offcanvas from "react-bootstrap/Offcanvas";

export interface ExampleOffcanvasProps {
  className?: string | undefined;
}

const ExampleOffcanvas: React.FC<ExampleOffcanvasProps> = ({ className }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow((s) => !s)} className={className}>
        Deneme Butonu
      </Button>
      <Offcanvas placement="end" show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title as="h5">Başlık Kısmı</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            Burda herhangi bir yazı olacak. Lorem ipsum dolor sit amet.
          </div>

          <DropdownButton
            variant="secondary"
            title="Isırma Butonu"
            className="mt-3"
          >
            <Dropdown.Item href="#">Isırabilir</Dropdown.Item>
            <Dropdown.Item href="#">Isıracak</Dropdown.Item>
            <Dropdown.Item href="#">Isırmaz</Dropdown.Item>
          </DropdownButton>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ExampleOffcanvas;
