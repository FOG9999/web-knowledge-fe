import { Card, Typography } from "antd";
import Prism from "prismjs";

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
            return <Card className="mb-3">
                <div style={{whiteSpace: 'pre-wrap'}} dangerouslySetInnerHTML={{__html: Prism.highlight(content, Prism.languages.extend('js'), 'js')}} />
            </Card>;
        }
        case "warn": {
            return (
                <Card className="mb-3">
                    <Text type="warning">{content}</Text>
                </Card>
            );
        }
        case "error": {
            return (
                <Card className="mb-3">
                    <Text type="danger">{content}</Text>
                </Card>
            );
        }
        case "success": {
            return (
                <Card className="mb-3">
                    <Text type="success">{content}</Text>
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
