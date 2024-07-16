const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload);
    case 'EDIT_TASK':
      return state.map(task => 
        task.id === action.payload.id ? { ...task, text: action.payload.updatedTask } : task
      );
    default:
      return state;
  }
};

export default taskReducer;
