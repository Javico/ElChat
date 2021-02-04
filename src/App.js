import React, { useEffect, useState } from "react";
import Chat from "./componentes/Chat";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import "./App.css";
import { ReactSession } from 'react-client-session';

function App() {

  ReactSession.setStoreType("localStorage");

  const [nombre, setNombre] = useState("");
  const [registrado, setRegistrado] = useState(false);

  useEffect(() => {
    if (ReactSession.get("username") !== undefined) {
      setNombre(ReactSession.get("username"));
      setRegistrado(true);
    }
  }, []);

  const registrar = (e) => {
    e.preventDefault();
    if (nombre !== "") {
      ReactSession.set("username", nombre);
      let nos = ReactSession.get("username");
      console.log(nos)
      setRegistrado(true);
    }
  };

  return (
    <div className="App">
      <Container>
        {!registrado && (
          <div className="Login">
            <Form onSubmit={registrar}>
              <Form.Group>
                <Form.Label htmlFor="nombre">Introduzca su nickname</Form.Label>
                <Form.Control type="text" placeholder="Nickname" autoFocus value={nombre} name="nombre" onChange={(e) => setNombre(e.target.value)}></Form.Control>
              </Form.Group>
              <Button type="submit" variant="primary">Ir al chat</Button>
            </Form>
          </div>
        )}

        {registrado && <Chat nombre={nombre} jaja />}
      </Container>
    </div>
  );
}

export default App;
