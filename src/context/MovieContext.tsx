import { createContext, useReducer } from 'react';
import { Context, Action, ActionObj, MVContext, Props } from '../type';
import * as actionTypes from './actions';


const initialState: Context = {
  value: '',
  fontSize: 0,
};

const reducer = (state = initialState, action: Action) => {
  const actions: ActionObj = {
    [actionTypes.SET_DATA]: () => ({
      ...state,
      value: action.payload
    }),
    [actionTypes.COOSE_TEXT_FONTSIZE]: () => ({
      ...state,
      fontSize: Number(action.payload)
    })
  };
  return actions[action.type]() as any;
};


export const MovieContext = createContext<MVContext>({} as MVContext);

export const MovieProvider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MovieContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};