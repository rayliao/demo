'use strict';

import React from 'react/addons';

import classNames from 'classnames';

var ESCAPE_KEY = 27;
var ENTER_KEY = 13;

var TodoItem = React.createClass({
	render: function () {
		return (
			<li className={classNames({
				completed: this.props.todo.completed,
				editing: false
			})}>
				<div className="view">
					<input
						className="toggle"
						type="checkbox"
					/>
					<label>
						{this.props.todo.title}
					</label>
					<button className="destroy" />
				</div>
				<input
					ref="editField"
					className="edit"
				/>
			</li>
		);
	}
});

export default TodoItem;
