'use strict';

import React from 'react/addons';

import classNames from 'classnames';

import Utils from './utils';

var TodoFooter = React.createClass({
	render: function () {
		var activeTodoWord = Utils.pluralize(this.props.count, 'item');
		var clearButton = null;

		if (this.props.completedCount > 0) {
			clearButton = (
				<button
					className="clear-completed"
					onClick={this.props.onClearCompleted}>
					Clear completed
				</button>
			);
		}

		var nowShowing = this.props.nowShowing;
		return (
			<footer className="footer">
				<span className="todo-count">
					<strong>{this.props.count}</strong> {activeTodoWord} left
				</span>
				<ul className="filters">
					<li>
						<a
							href="#/"
							className={classNames({selected: nowShowing === 'all'})}>
								All
						</a>
					</li>
					{' '}
					<li>
						<a
							href="#/active"
							className={classNames({selected: nowShowing === 'active'})}>
								Active
						</a>
					</li>
					{' '}
					<li>
						<a
							href="#/completed"
							className={classNames({selected: nowShowing === 'completed'})}>
								Completed
						</a>
					</li>
				</ul>
				{clearButton}
			</footer>
		);
	}
});

export default TodoFooter;

