import io from "socket.io-client";

//let socket = io("//localhost:5000");
let socket = io(process.env.REACT_APP_BACKEND_URL, {
    withCredentials: true,
    extraHeaders: {
        "my-custom-header": "abcd"
    }
});

export default socket;
