const React 				= require("react");
const ReactDOM 			= require("react-dom");
const expect 				= require("expect");
const $ 		 				= require("jQuery");
const TestUtils 		= require("react-addons-test-utils");

const AddTodo				= require("AddTodo");


describe("AddTodo", () => {
	
	it("should exist", () =>{
		expect(AddTodo).toExist();
	});

	it("should call handleAddTodo with valid data", () =>{
		
		var todoText = "Play Nintendo Switch"
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find("form")[0]);

		expect(spy).toHaveBeenCalledWith(todoText);
	});


	it("should call NOT handleAddTodo with invalid input", () =>{
		
		var todoText = ""
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find("form")[0]);

		expect(spy).toNotHaveBeenCalled(todoText);
	});

});
