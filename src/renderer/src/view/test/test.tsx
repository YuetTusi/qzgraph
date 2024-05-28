import { Button } from "antd";
import { FC } from "react";
import { request } from "../../util/request";
import { useModel } from "../../model";


const Test: FC<any> = () => {

    const { reading, setReading } = useModel((state) => ({
        reading: state.reading,
        setReading: state.setReading
    }));

    return <div>
        <div>{JSON.stringify(reading)}</div>
        <Button
            onClick={async () => {
                setReading(!reading);
            }}
            type="primary">测试</Button>
    </div>;
}

export { Test };