'use strict';

import React from 'react/addons';

import TodoModel from './todoModel';

var app = app || {};
app.ALL_TODOS = 'all';
app.ACTIVE_TODOS = 'active';
app.COMPLETED_TODOS = 'completed';

var ENTER_KEY = 13;

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			nowShowing: app.ALL_TODOS,
			editing: null,
			newTodo: ''
		};
	},

	handleChange: function(event) {
		this.setState({newTodo: event.target.value});
	},

	handleNewTodoKeyDown: function(event) {
		if(event.keyCode !== ENTER_KEY) {
			return;
		}

		event.preventDefault();

		var val = this.state.newTodo.trim();

		if(val) {
			this.props.model.addTodo(val);
			this.setState({newTodo: ''});
		}
	},

	render: function () {
		var footer;
		var main;
		var todos = this.props.model.todos;

		return (
			<div>
				<header className="header">
					<h1>todos</h1>
					<input
						className="new-todo"
						placeholder="What needs to be done?"
						value={this.state.newTodo}
						onKeyDown={this.handleNewTodoKeyDown}
						onChange={this.handleChange}
						autoFocus={true}
					/>
				</header>
				{main}
			</div>
		);
	}
});

var model = new TodoModel('react-todos');

function render() {
	React.render(
		<TodoApp model={model}/>,
		document.getElementsByClassName('todoapp')[0]
	);
}
render();
