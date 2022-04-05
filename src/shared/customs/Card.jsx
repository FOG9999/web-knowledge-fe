import { CheckSquareFilled, CloseCircleFilled, WarningFilled } from "@ant-design/icons";
import { Card, Typography } from "antd";
import Prism from "prismjs";
import cardStyles from '../../styles/Card.module.scss'

const { Title, Text, Paragraph } = Typography;

export const WKCard = ({ type, content }) => {
    switch (type) {
        case "h1": {
            return (
                <Card className="mb-3">
                    <Title level={3}>{content}</Title>
                </Card>
            );
        }
        case "h2": {
            return (
                <Card className="mb-3">
                    <Title level={4}>{content}</Title>
                </Card>
            );
        }
        case "code": {
            return (
                <Card className="mb-3">
                    <div style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: Prism.highlight(content, Prism.languages.extend("js"), "js") }} />
                </Card>
            );
        }
        case "warn": {
            return (
                <Card className="mb-3">
                    <Text type="warning">
                        <span><WarningFilled className={cardStyles['wk-anticon']} style={{ color: "#faad14" }} /></span>
                        {content}
                    </Text>
                </Card>
            );
        }
        case "error": {
            return (
                <Card className="mb-3">
                    <Text type="danger">
                        <span><CloseCircleFilled className={cardStyles['wk-anticon']} style={{ color: "red" }} /></span>
                        {content}
                    </Text>
                </Card>
            );
        }
        case "success": {
            return (
                <Card className="mb-3">
                    <Text type="success">
                        <span><CheckSquareFilled className={cardStyles['wk-anticon']} style={{ color: "#52c41a" }} /></span>
                        {content}
                    </Text>
                </Card>
            );
        }
        default: {
            return (
                <Card className="mb-3">
                    <Paragraph>{content}</Paragraph>
                </Card>
            );
        }
    }
};
