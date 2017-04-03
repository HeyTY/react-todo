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
});