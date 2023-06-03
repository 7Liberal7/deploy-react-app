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
  index: number
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

const CHANGE_TASK_NUMBER = "CHANGE_TASK_NUMBER"

export const changeNumberTask: ActionCreator<AnyAction> = (task) => ({
  type: CHANGE_TASK_NUMBER,
  task
})

const CHANGE_TASK = "CHANGE_TASK"

export const changeTask: ActionCreator<AnyAction> = (task) => ({
  type: CHANGE_TASK,
  task
})

const CHANGE_TEXT_TASK = "CHANGE_TEXT_TASK"

export const changeTextTask: ActionCreator<AnyAction> = (task) => ({
  type: CHANGE_TEXT_TASK,
  task
})

const DEL_TASK = "DEL_TASK"

export const removeTask: ActionCreator<AnyAction> = (task) => ({
  type: DEL_TASK,
  task
})

export const rootReducer: Reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_ARRAY_TASKS:
      return {
        ...state,
        Tasks: [...state.Tasks, action.task]
      }
    case DEL_TASK:
      let newTasks: Array<object> = []
      for (let index = 0; index < state.Tasks.length; index++) {
        if (index !== action['task']['index']) {
          newTasks.push(state.Tasks[index])
        }

      }
      return {
        ...state,
        Tasks: newTasks,
      }
    case CHANGE_TASK:
      return {
        ...state,
        Tasks: state.Tasks.map(
          (task: task) => task.index === action['task']['index']
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
    case CHANGE_TEXT_TASK:
      console.log(action)
      return {
        ...state,
        Tasks: state.Tasks.map(
          (task: task) => task.index === action['task']['index']
            ?
            {
              ...task,
              text: action['task']['text']
            }
            : task
        ),
      }
    case CHANGE_TASK_NUMBER:
      return {
        ...state,
        Tasks: state.Tasks.map(
          (task: task) => task.index === action['task']['index']
            ?
            {
              ...task,
              number: action['task']['number']
            }
            : task
        ),
      }

    default:
      return state
  }
}