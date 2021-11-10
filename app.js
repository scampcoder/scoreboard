const title = React.createElement(
  'h1', //type
  { id: 'main-title', title: 'This is a title.' }, //props
  'My first React element!'//children
);

// when page is rendered we should be shown:
// <h1 id="main-title" title="This is a title">My first React element!</h1>

//console.log(title); //this will show up as an object

const desc = React.createElement(
    'p',
    null,
    'I just learned how to create a React node and render it into the DOM.'
);

const header = React.createElement(
    'header',
    null,
    title, desc
)

ReactDOM.render(
    header, //element to render
    document.getElementById('root') //container it will render in
);