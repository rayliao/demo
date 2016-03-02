'use strict';

import Utils from './utils';

var TodoModel = function (key) {
	this.key = key;
	this.todos = Utils.store(key);
	this.onChanges = [];
};

TodoModel.prototype.inform = function(){
	Utils.store(this.key, this.todos);
};

TodoModel.prototype.addTodo = function(title) {
	this.todos = this.todos.concat({
		id: Utils.uuid(),
		title: title,
		completed: false
	});

	this.inform();
};

export default TodoModel;

