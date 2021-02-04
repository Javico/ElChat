import React, { useRef, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

const ChatArea = ({mensajes}) => {

    const divRef = useRef(null);

    useEffect(() => {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    });

    return (
        <div className="borders">

                <div className="chat">
                    {mensajes.map((e, i) => (
                        <div key={i}>
                            <div>{e.nombre} dice:</div>
                            <div>{e.mensaje}</div>
                        </div>
                    ))}
                    <div ref={divRef}></div>
                </div>

        </div>
    );
}

export default ChatArea;