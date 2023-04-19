import { Reducer, ActionCreator, AnyAction } from 'redux';


export type RootState = {
  Tasks: Array<object>
}

const initialState: RootState = {
  Tasks: []
}

interface task {
  text: string
  number: number
  time: {
    minutes: number,
    seconds: number
  }
  isRun: boolean
}

const ADD_ARRAY_TASKS = "ADD_ARRAY_TASKS"

export const updateTasks: ActionCreator<AnyAction> = (task) => ({
  type: ADD_ARRAY_TASKS,
  task
})

const CHANGE_TASK = "CHANGE_TASK"

export const changeTask: ActionCreator<AnyAction> = (task) => ({
  type: CHANGE_TASK,
  task
})

export const rootReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARRAY_TASKS:
      return {
        ...state,
        Tasks: [...state.Tasks, action.task]
      }
    case CHANGE_TASK:
      return {
        ...state,
        Tasks: state.Tasks.map(
          (task: task) => task.number === action['task']['number']
            ?
            {
              ...task,
              time: {
                minutes: action['task']['time']['minutes'],
                seconds: action['task']['time']['seconds']
              },
              isRun: action['task']['isRun']
            }
            : task
        ),
      }
    default:
      return state
  }
}