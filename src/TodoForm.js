import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }

  addTodo = (e) => {
    e.preventDefault(); //Keeps page from refreshing
    // let input = this.refs.item;
    // let form = this.refs.form;
        // below does the same thing (ES6 version) as above commeted out code
    let { item, form } = this.refs;
    this.props.addTodoItem(item.value)
    form.reset();
  }

  updateLabel = () => {
    let { item } = this.refs;
    let text = item.value;
    this.setState({ text })
  }

  render() {
    return (
      <div>
      <label>{this.state.text}</label>
      <form ref="form" onSubmit={this.addTodo}>
        <input onKeyUp={this.updateLabel} ref="item" placeholder="Add To Do" required={true} />
      </form>
      </div>
    )
  }
}

export default TodoForm;
