const React 				= require("react");
const ReactDOM 			= require("react-dom");
const expect 				= require("expect");
const $ 		 				= require("jQuery");
const TestUtils 		= require("react-addons-test-utils");

const TodoList			= require("TodoList");
const Todo 					= require("Todo");


describe("TodoList", ()=> {
	it("should exist", ()=> {
		expect(TodoList).toExist();
	});	


	it("should render one Todo component for each todo item", () => {
		var todos = [{
			id: 1,
			text: "Play Nintendo Switch"
		}, {
			id: 2,
			text: "Watch Starcraft GSL Code S"			
		}];

		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

		expect(todosComponents.length).toBe(todos.length);
	});

	it("should render empty message if no todos", () => {
		var todos = [];

		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		var $el = $(ReactDOM.findDOMNode(todoList));

		expect($el.find(".container_message").length).toBe(1);
	});
});