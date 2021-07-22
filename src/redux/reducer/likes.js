const initialState = {
    items: [
    ]
}
let targetItem;
let item;
let targetobject
export default function likes(state = initialState, action) {
    switch (action.type) {
        case 'Like':
            targetItem= action.targetItem;
            item = state.items;
            targetobject = item.find((object) => object.id === targetItem.id);
            if(targetobject){
                targetItem.like++
            }
            item.push(targetItem)
            return {
                ... state,
                items: item
            }

        case 'Dislike':
            targetItem= action.targetItem;
            item = state.items;
            targetobject = item.find((object) => object.id === targetItem.id);
            if(targetobject){
                targetItem.dislike++
            }
            item.push(targetItem)

            return {
                ... state,
                items: item
            }

        default:
            return state;
    }
}