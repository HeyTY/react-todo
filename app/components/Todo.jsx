const React 	= require("react");
const moment 	= require("moment");


var Todo = React.createClass({
	

	render: function () {
		var {text, id, completed, createdAt, completedAt} = this.props
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
			<div onClick={() => {
				this.props.onToggle(id)
			}}>
				<p>
					<input type="checkbox" checked={completed}/>{text} 
				</p>
				<p>
					{renderDate()};
				</p>
				
			</div>
		)
	}

});

module.exports = Todo;
