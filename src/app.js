import React from "react";
import ReactDOM  from "react-dom";
import TodoApp from './components/toDoApp'


class App extends React.Component {
  render(){
    return(
      <div>
        <TodoApp />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));