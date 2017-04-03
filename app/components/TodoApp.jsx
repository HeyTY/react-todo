const React 			= require("react");
const TodoList 		= require("TodoList");
const AddTodo   	= require("AddTodo");
const TodoSearch 	= require("TodoSearch");
const uuid				= require("node-uuid");


var TodoApp = React.createClass({

	getInitialState: function() {
		return {

			showCompleted: false,
			searchText: "",
			todos: [
			{	
				id: uuid(),
				text: "Workout out legs",
				completed: false
			},{
				id: uuid(),
				text: "Work on React Todo Project",
				completed: true	
			},{
				id: uuid(),
				text: "Play Zelda Breath of the Wild",
				completed: false	
			},{
				id: uuid(),
				text: "Facetime Keira",
				completed: true	
			}
			]
		};
	},

	handleSearch: function (showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		})
	},

	handleToggle: function (id) {
		var updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo
		});

		this.setState({todos:updatedTodos});
	},

	handleAddTodo: function (text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text,
					completed: false
				}
			]
		});
	},

	render: function () {
		var {todos} = this.state;

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch} />
				<TodoList todos={todos} onToggle={this.handleToggle}/>
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>
		)
	}
});

module.exports = TodoApp;