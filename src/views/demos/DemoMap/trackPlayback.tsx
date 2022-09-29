import { Card, Button } from "antd";
import "./courseForm.less";

const TrackPlayback = (props: any) => {
    const {
        onSubmit,
    } : PropsEntity = props;
    return (
        <Card className="course-form-container">
            <Button onClick={onSubmit}>提交</Button>
        </Card>
    );
};

interface PropsEntity {
    onSubmit: () => void,
}

export default TrackPlayback;