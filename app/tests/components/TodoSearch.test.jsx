const React 				= require("react");
const ReactDOM 			= require("react-dom");
const expect 				= require("expect");
const $ 		 				= require("jQuery");
const TestUtils 		= require("react-addons-test-utils");

const TodoSearch		= require("TodoSearch");


	describe("TodoSearch", ()=> {
		it("should exist", () => {
			expect(TodoSearch).toExist();
		})

		it("should call onSearch with entered input text", () => {
			var searchText = "Corgi";
			var spy = expect.createSpy();
			var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

			todoSearch.refs.searchText.value = searchText;
			TestUtils.Simulate.change(todoSearch.refs.searchText);

			expect(spy).toHaveBeenCalledWith(false, "Corgi");
		});

		it("should call onSearch with proper checked value", () => {
			var showCompleted = true;
			var spy = expect.createSpy();
			var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

			todoSearch.refs.showCompleted.checked = showCompleted;
			TestUtils.Simulate.change(todoSearch.refs.showCompleted);

			expect(spy).toHaveBeenCalledWith(true, "");
		});

	});
