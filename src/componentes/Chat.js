import React, { useState, useEffect } from "react";
import socket from "./Socket";
import "../App.css";
import Container from 'react-bootstrap/Container';
import ChatArea from './ChatArea';
import ChatText from './ChatText';
import ChatHeader from "./ChatHeader";

const Chat = ({ nombre }) => {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    socket.emit("conectado", nombre);
  }, [nombre]);

  useEffect(() => {
    socket.on("mensajes", (mensaje) => {
      setMensajes([...mensajes, mensaje]);
    });

    return () => {
      socket.off();
    };
  }, [mensajes]);

  return (
    <Container>
      <ChatHeader />
      <br />
      <ChatArea
        mensajes={mensajes}
      />
      <br />
      <ChatText
        setMensaje={setMensaje}
        mensaje={mensaje}
        nombre={nombre}
        socket={socket}
      />
    </Container>
  );
};

export default Chat;
