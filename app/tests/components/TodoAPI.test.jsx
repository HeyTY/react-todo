const expect 				= require("expect");

const TodoAPI					= require("TodoAPI");



describe("TodoAPI", () => {
	beforeEach(()=> {
		localStorage.removeItem("todos");
	});
	it("should exist", () => {
		expect(TodoAPI).toExist();
	});

	describe("setTodos", () => {
		it("should set valid todos array", () => {
			var todos = [{
				id: 123,
				text: "Play Nintendo Switch",
				completed: false
			}];
			TodoAPI.setTodos(todos);

			var actualTodos = JSON.parse(localStorage.getItem("todos"));

			expect(actualTodos).toEqual(todos);
		});

		it("should NOT set valid todos array", () => {
			var badTodos = {a: "b"};

			TodoAPI.setTodos(badTodos);

			expect(localStorage.getItem("todos")).toBe(null);
		});

	});

	describe("getTodos", () => {
		it("should return empty array for bad localStorage data", () => {
			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual([]);
		});

		it("should return todo if valid localStorage data", () => {
			var todos = [{
				id: 321,
				text: "Play Zelda BOTW",
				completed: false
			}];
			
			localStorage.setItem("todos", JSON.stringify(todos));

			var actualTodos = TodoAPI.getTodos();

			expect(actualTodos).toEqual(todos);

		});
	});


	describe("filterTodos", () => {
		var todos = [{
			id: 1,
			text: "Random Test Text",
			completed: true
		},{
			id: 2,
			text: "Other Test Text",
			completed: false
		},{
			id: 3,
			text: "Random Test Text",
			completed: true
		}];

		it("should return all items if showCOmpleted is true", () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, "");

			expect(filteredTodos.length).toBe(3);
		});

		it("should return all items if showCompleted is false", () => {
			var filteredTodos = TodoAPI.filterTodos(todos, false, "");

			expect(filteredTodos.length).toBe(1);
		});


		it("should sort by completed status", () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, "");

			expect(filteredTodos[0].completed).toEqual(false);
		});


		it("should filter todos by searchText", () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, "random");

			expect(filteredTodos.length).toBe(2);
		});

		it("should return all todos if searchText is empty", () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, "");

			expect(filteredTodos.length).toBe(3);
		});
	});

});