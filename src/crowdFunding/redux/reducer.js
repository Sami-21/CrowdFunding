
export const initialState = {
    funding:10000 + Math.floor(Math.random() * 80000),
    backers:1000 + Math.floor(Math.random() * 8000),
    days:10+ Math.floor(Math.random() * 50),
    bamboo: Math.floor(Math.random() * 100),
    black_edition: Math.floor(Math.random() * 40),
};
const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'INCREMENT':

            return {
                ...state, funding:state.funding + action.payload , backers:state.backers + 1,
            };
             
            default : return state;
    }
};

export default reducer;