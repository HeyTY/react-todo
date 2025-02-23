const React = require("react");


var TodoSearch = React.createClass({
	


	handleSearch: function () {
		var showCompleted = this.refs.showCompleted.checked;
		var searchText = this.refs.searchText.value;

		this.props.onSearch(showCompleted, searchText);
	},

	render: function () {
		return (
			<div>
				<div className="container_header">
					<input type="search" ref="searchText" placeholder="Search Todos" onChange={this.handleSearch}/>
				</div>
				<div>
					<label>
						<input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
						Show completed todos
					</label>		
				</div>
			</div>
		)
	}	
});

module.exports = TodoSearch;