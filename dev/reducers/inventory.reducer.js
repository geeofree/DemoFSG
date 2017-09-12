import { SELECT_ITEM } from '../constants/inventory.constants'

const initialState = {
	selectedItem: null,
	items: [
		{
			id: 0,
			stock: 5,
			name: "Foo",
			price: 50000,
			image_url: 'http://bit.ly/2w3pTYz',
			description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
			Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
			natoque penatibus et magnis dis parturient montes, nascetur
			ridiculus mus. Donec quam felis`
		},
		{
			id: 1,
			stock: 2,
			name: "Bar",
			price: 12500,
			image_url: 'http://bit.ly/2wXwIbA',
			description: `Nibh venenatis cras sed felis eget velit aliquet sagittis id
			consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat
			ac tincidunt vitae semper quis lectus nulla at volutpat diam`
		},
		{
			id: 2,
			stock: 0,
			name: "Baz",
			price: 3000,
			image_url: 'http://bit.ly/2w30Kxp',
			description: `Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus
			non enim praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla
			facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum`
		}
	]
}

export default (state=initialState, action) => {
	switch(action.type) {
		case SELECT_ITEM:
			return {
				...state,
				selectedItem: state.items.find((item) => item.id === action.payload.id)
			}

		default:
			return state
	}
}
