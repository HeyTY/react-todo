const React = require("react");
const Todo  = require("Todo");


var TodoList = React.createClass({
	render: function () {
		var {todos} = this.props;
		var renderTodos = () => {

			if (todos.length === 0 ) {
				return (
					<p className="container_message">You have no todos!</p>
				)
			}

			return todos.map((todo) => {
				return (
					<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
				);
			});
		};	

		return (
			<div>
				{renderTodos()}
			</div>
		)
	}

});

module.exports = TodoList;
