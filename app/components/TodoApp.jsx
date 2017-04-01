const React 		= require("react");
const TodoList 	= require("TodoList");
const AddTodo   = require("AddTodo");


var TodoApp = React.createClass({

	getInitialState: function() {
		return {
			todos: [
			{	
				id: 1,
				text: "Workout out legs"
			},{
				id: 2,
				text: "Work on React Todo Project"	
			},{
				id: 3,
				text: "Play Zelda Breath of the Wild"	
			},{
				id: 4,
				text: "Facetime Keira"	
			}
			]
		};
	},

	handleAddTodo: function (text) {
		alert("new todo:" + text);
	},

	render: function () {
		var {todos} = this.state;

		return (
			<div>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>
		)
	}
});

module.exports = TodoApp;