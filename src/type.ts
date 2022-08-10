
export type ActionObj = {
    [key: string]: () => void
}

export type Props = {
    children: React.ReactNode;
}

export type Context = {
    value: string,
    fontSize: number,
}

export type Action = {
    type: string,
    payload: string,
}

export interface MVContext {
    state: Context;
    dispatch: (action: Action) => void;
}
