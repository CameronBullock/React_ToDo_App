import React from 'react';
import TodoForm from './TodoForm';
import List from './List';
import Filter from './Filter';

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: [], nextId: 0, filter: 'All' }
  }

  addItem = (text) => {
    let item = {text, id: this.state.nextId, completed: false}
    let items = [item, ...this.state.items]
    this.setState({ items, nextId: ++this.state.nextId });
  }

  onTodoClick = (id) => {
    let items = this.state.items.map( item => {
      if(item.id === id) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    });

    this.setState({ items });
  }

filteredItems = () => {
  switch (this.state.filter) {
    case 'All':
      return this.state.items;
    case 'Active':
      return this.state.items.filter( i => !i.completed )
    case 'Complete':
      return this.state.items.filter( i => i.completed )
  }
}

setFilter = (filter) => {
  this.setState({ filter });
}

  render() {
    return (
      <div>
      <TodoForm addTodoItem={this.addItem} />
      <List items={this.filteredItems()} onTodoClick={this.onTodoClick} />
      <Filter setFilter={this.setFilter} currentFilter={this.state.filter} />
      </div>
    )
  }
}

export default TodoApp;
