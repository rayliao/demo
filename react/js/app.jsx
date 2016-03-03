'use strict';

import React from 'react/addons';

import TodoModel from './todoModel';

import TodoItem from './todoItem.jsx';

import TodoFooter from './footer.jsx';

var app = app || {};
app.ALL_TODOS = 'all';
app.ACTIVE_TODOS = 'active';
app.COMPLETED_TODOS = 'completed';

var ENTER_KEY = 13;

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			nowShowing: 'all',
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

		var todoItems = todos.map(function (todo) {
			return (
				<TodoItem 
					key={todo.id}
					todo={todo}
				/>
			);
		}, this);

		var activeTodoCount = todos.reduce(function (accum, todo) {
			return todo.completed ? accum : accum + 1;
		}, 0);

		var completedCount = todos.length - activeTodoCount;

		if(todos.length) {
			main = (
				<section className="main">
					<input
						className="toggle-all"
						type="checkbox"
					/>
					<ul className="todo-list">
						{todoItems}
					</ul>
				</section>
			);

			footer = 
				<TodoFooter
					count={activeTodoCount}
					completedCount={completedCount}
					nowShowing={this.state.nowShowing}
				/>;
		}

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
