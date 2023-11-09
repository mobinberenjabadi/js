function main() {
    return(
        <h1>hello</h1>
    )
}
ReactDOM.render(main(),document.getElementById('root'))


// JSX
const navbar = (
    <div>
        <h1>
            items
        </h1>
        <ul>
            <li>item1</li>
            <li>item2</li>
        </ul>
    </div>)

ReactDOM.render(
    navbar,
    document.getElementById('root2'))

console.log(navbar)
// Object { "$$typeof": Symbol("react.element"),
// type: "ul",
// key: null,
// ref: null,
// props: {…},
// _owner: null,
// _store: {…},


var h1 = document.createElement('h1')

h1.textContent = "program"
h1.className = 'header'

console.log(h1)
// <h1 className="header">


