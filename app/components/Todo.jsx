const React 	= require("react");
const moment 	= require("moment");


var Todo = React.createClass({
	

	render: function () {
		var {text, id, completed, createdAt, completedAt} = this.props;
		var todoClassName = completed ? "todo todo-completed" : "todo";
		var renderDate = () => {
			var message = "Created ";
			var timestamp = createdAt;

			if (completed) {
				message = "Completed ";
				timestamp = completedAt;
			}	


			return message + moment.unix(timestamp).format("MMM do YYYY @ h:mm a");
		};

		return (
			<div className={todoClassName} onClick={() => {
				this.props.onToggle(id)
			}}>
				<p>
					<input type="checkbox" checked={completed}/>
				</p>
				<div>
					<p>{text}</p>
					<p className="todo__subtext">{renderDate()}</p>
				</div>


				
			</div>
		)
	}

});

module.exports = Todo;
