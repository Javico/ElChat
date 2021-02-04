import React from 'react';

const ChatHeader = () => {

    return (
        <div>
            <h1>El chat</h1>
            <a href='/' className="button_logout" onClick={() => localStorage.clear()} role="button"> Logout </a>
        </div>
    );
}

export default ChatHeader;