import { create, StoreApi } from 'zustand';
import { reading, ReadingState } from './reading';

interface OtherState {
    [otherState: string]: any;
}

type State = OtherState | ReadingState;
type SetState = StoreApi<State>['setState'];
type GetState = StoreApi<State>['getState'];

const useModel = create<State>((set: SetState, get: GetState) => ({
    ...reading(set, get),
}));

export { useModel };
export type { SetState, GetState, OtherState };
