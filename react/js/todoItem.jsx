'use strict';

import React from 'react/addons';

import classNames from 'classnames';

var ESCAPE_KEY = 27;
var ENTER_KEY = 13;

var TodoItem = React.createClass({
	getInitialState: function (){
		return {
			editText: this.props.todo.title
		};
	},

	handleSubmit: function(event) {
		var val = this.state.editText.trim();
		if(val) {
			this.props.onSave(val);
		} else {
			this.props.onDestroy();
		}
	},
	
	handleEdit: function(){
		this.props.onEdit();
		this.setState({editText: this.props.todo.title});
	},

	handleKeyDown: function(event) {
		if (event.which === ESCAPE_KEY) {
			this.setState({editText: this.props.todo.title});
			this.props.onCancel(event);
		} else if (event.which === ENTER_KEY) {
			this.handleSubmit(event);
		}
	},

	handleChange: function(){
		if (this.props.editing) {
			this.setState({editText: event.target.value});
		}
	},

	componentDidUpdate: function (prevProps) {
		if (!prevProps.editing && this.props.editing) {
			var node = React.findDOMNode(this.refs.editField);
			node.focus();
			node.setSelectionRange(node.value.length, node.value.length);
		}
	},

	render: function () {
		return (
			<li className={classNames({
				completed: this.props.todo.completed,
				editing: this.props.editing
			})}>
				<div className="view">
					<input
						className="toggle"
						type="checkbox"
						checked={this.props.todo.completed}
						onChange={this.props.onToggle}
					/>
					<label onDoubleClick={this.handleEdit}>
						{this.props.todo.title}
					</label>
					<button className="destroy" onClick={this.props.onDestroy} />
				</div>
				<input
					ref="editField"
					className="edit"
					value={this.state.editText}
					onBlur={this.handleSubmit}
					onChange={this.handleChange}
					onKeyDown={this.handleKeyDown}
				/>
			</li>
		);
	}
});

export default TodoItem;
