import React, {Component} from 'react';
import { TodoBanner } from "./TodoBanner";
import { TodoCreater } from "./TodoCreater";
import { TodoRow } from "./TodoRow";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "Landon",
            todoItems: [{action: "Read", done: false},
                        {action: "Study", done: false},
                        {action: "Call Parents", done: false},
                        {action: "Go for a jog", done: false}],
        }
    }

    updateNewTextValue = (event) => {
        this.setState({newItemText: event.target.value});
    }

    createNewTodo = (task) => {
        if (!this.state.todoItems
                  .find(item => item.action === task)) {
                this.setState({
                    todoItems: [...this.state.todoItems, {action: task, done: false}],
                });
           }
    }

    toggleTodo = (todo) =>
        this.setState({ todoItems:
            this.state.todoItems.map(item => item.action === todo.action ? {...item, done: !item.done } : item)
        });

    todoTableRows = () =>
        this.state.todoItems.map(item =>
            <TodoRow key={ item.action } item={ item } callback={ this.toggleTodo }/>
        );

    render = () =>
        <div>
            <TodoBanner name={this.state.userName} tasks={ this.state.todoItems } />
            <div className="container-fluid">
                <TodoCreater callback={ this.createNewTodo } />
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Done</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.todoTableRows() }
                        </tbody>
                    </table>
            </div>
        </div>
}
