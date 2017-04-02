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
				text: "Workout out legs"
			},{
				id: uuid(),
				text: "Work on React Todo Project"	
			},{
				id: uuid(),
				text: "Play Zelda Breath of the Wild"	
			},{
				id: uuid(),
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
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text
				}
			]
		});
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