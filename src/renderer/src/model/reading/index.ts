export { reading } from './reading';

export interface ReadingState {
    /**
     * 读取中
     */
    reading: boolean;
    /**
     * 设置读取状态
     * @param payload
     * @returns
     */
    setReading: (payload: boolean) => void;
}
