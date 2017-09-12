const initialState = {
	selectedItem: null,
	items: [
		{
			id: 0,
			name: "Foo",
			price: 125.00,
			stock: 5
		},
		{
			id: 1,
			name: "Bar",
			price: 12.00,
			stock: 2
		},
		{
			id: 2,
			name: "Baz",
			price: 25.20,
			stock: 0
		}
	]
}

export default (state=initialState, action) => {
	switch(action.type) {
		default:
			return state
	}
}
