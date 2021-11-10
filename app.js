const desc = 'I just learned how to create a React node and render it into the DOM.'
const myTitleID = 'main-title';
const name = 'Victoria';

const header = (
    <header>
    {/* this is a comment in JSX */}
        <h1 id={ myTitleID }>{ name }'s First React Element</h1>
        <p>{ desc }</p>
    </header>
);

ReactDOM.render(
    header, //element to render
    document.getElementById('root') //container it will render in
);

//when we write curly braces it lets JSX know that we are using JS.
//Inside the curly braces is what's called a JS espression.