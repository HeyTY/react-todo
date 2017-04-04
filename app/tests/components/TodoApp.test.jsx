const React 				= require("react");
const ReactDOM 			= require("react-dom");
const expect 				= require("expect");
const $ 		 				= require("jQuery");
const TestUtils 		= require("react-addons-test-utils");

const TodoApp				= require("TodoApp");


describe("TodoApp", () => {
	it("should exist", ()=>{
		expect(TodoApp).toExist();
	});


	it("should add todo to the todos state on handleAddTodo", ()=> {
		var todoText = "Test Text";
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({todos:[]});
		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);
		expect(todoApp.state.todos[0].createdAt).toBeA("number");

	});


	it("should toggle completed value when handleToggle called", () => {
		var todoData = {
			id: 1,
			text: "React Test todo",
			completed: false, 
			createdAt: 0,
			completedAt: undefined
		};

		var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
		todoApp.setState({todos: [todoData]});

		// check todos first item has completed value of false
		expect(todoApp.state.todos[0].completed).toBe(false);

		// Call handle Toggle with id
		todoApp.handleToggle(1);

		// Verify that the value has changed
		expect(todoApp.state.todos[0].completed).toBe(true);

		expect(todoApp.state.todos[0].completedAt).toBeA("number");
	});




	it("should toggle todo from completed to incompleted", () => {
			var todoData = {
			id: 2,
			text: "React Test todo",
			completed: true, 
			createdAt: 0,
			completedAt: 123
		};

		var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
		todoApp.setState({todos: [todoData]});

		// Call handle Toggle with id
		todoApp.handleToggle(2);

		expect(todoApp.state.todos[0].completed).toBe(false);
		expect(todoApp.state.todos[0].completedAt).toNotExist();
	});

});