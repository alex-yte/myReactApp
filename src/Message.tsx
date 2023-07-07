function Message() {
    //jsx - JS XML
    const name = 'Denis';
    if(name)
        return <h1>Hello, {name}</h1>;
    return <h1>Hello world</h1>;
}

export default Message;