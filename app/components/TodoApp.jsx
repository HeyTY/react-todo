const React 			= require("react");
const TodoList 		= require("TodoList");
const AddTodo   	= require("AddTodo");
const TodoSearch 	= require("TodoSearch");


var TodoApp = React.createClass({

	getInitialState: function() {
		return {

			showCompleted: false,
			searchText: "",
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

	handleSearch: function (showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		})
	},

	handleAddTodo: function (text) {
		alert("new todo:" + text);
	},

	render: function () {
		var {todos} = this.state;

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch} />
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>
		)
	}
});

module.exports = TodoApp;