import { Reducer, ActionCreator, AnyAction } from 'redux';

export type RootState = {
  InputValue: string
}

const initialState: RootState = {
  InputValue: ''
}

const UPDATE_INPUT_VALUE = "UPDATE_INPUT_VALUE"

export const updateInputValue: ActionCreator<AnyAction> = (text) => ({
  type: UPDATE_INPUT_VALUE,
  text
})

export const rootReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT_VALUE:
      return {
        ...state,
        InputValue: action.text
      }
    default:
      return state;
  }
}