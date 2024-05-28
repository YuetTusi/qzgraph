import { ReadingState } from '.';
import { GetState, SetState } from '..';

export const reading = (set: SetState, _: GetState): ReadingState => ({
    reading: false,

    setReading(payload) {
        set({ reading: payload });
    },
});
