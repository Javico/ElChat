import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';


const ChatText = ({ setMensaje, mensaje, nombre, socket }) => {

    const handleKeyDown = (event) => {
        if (event.shiftKey && event.key === 'Enter') {
          //console.log("ss");
        } else if (event.key === 'Enter') {
          //console.log('do validate');
          submit(event);
        }
      }
    
      const submit = (e) => {
        e.preventDefault();
        var inValid = /^[ ]+$/;
        var k = inValid.test(mensaje);
        if (mensaje === undefined || k || mensaje === "") {
          return;
        }
        socket.emit("mensaje", nombre, mensaje);
        setMensaje("");
      };

    return (
        <div>
            <Form onSubmit={submit}>
                <InputGroup className="mb-3">
                    <Form.Control
                        as="textarea"
                        name=""
                        id=""
                        rows="1"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        onKeyPress={handleKeyDown}
                        onKeyDown={handleKeyDown}
                        className="chatText"
                        placeholder="Escriba su mensaje"
                        autoFocus
                    />
                    <InputGroup.Append>
                        <Button type="submit">Enviar</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        </div>
    );
}

export default ChatText;