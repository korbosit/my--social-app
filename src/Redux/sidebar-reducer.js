// reducer - это чистая функция которая принимает state, action если нужнр применяет этот action к state и возвращает новый state либо же возвращает state, который был до этого не измененным, который пришел в этот reducer, те не изменяет его если action Не подошел

let initialState = {};

const sidebarReducer = (state = initialState, action) => {


	return state;
}

export default sidebarReducer;