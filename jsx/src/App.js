
function App() {
    let message = 'Bye there!';

    if(Math.random() > 0.5) {
        message = 'Hi there!';
    }
    return <h1>{message}</h1>

    // const name = 'Frederico';
    // const age = 22;

    // return <h1>{message} {name} with {age}y</h1>;

    // const inputType = 'number';
    // const minValue = 5;

    // return <input style={{ borderTop: '3px solid red' }} type={inputType} min={minValue} />;
    //return <textarea autoFocus={true} />
}

export default App;