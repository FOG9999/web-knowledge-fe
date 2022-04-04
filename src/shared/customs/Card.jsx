import { Card, Typography } from "antd";
import Prism from "prismjs";

const { Title, Text } = Typography;

export const wkCard = ({ type, content }) => {
    switch (type) {
        case "h1": {
            return (
                <Card>
                    <Title level={1}>{content}</Title>
                </Card>
            );
        }
        case "h2": {
            return (
                <Card>
                    <Title level={2}>{content}</Title>
                </Card>
            );
        }
        case "code": {
            return Prism.highlight(content, Prism.languages.extend('js'))
        }
        case "warn": {
            return (
                <Card>
                    <Title type="warning">{content}</Title>
                </Card>
            )
        }
        case "error": {
            return (
                <Card>
                    <Title type="danger">{content}</Title>
                </Card>
            )
        }
        case "success": {
            return (
                <Card>
                    <Title type="success">{content}</Title>
                </Card>
            )
        }
        default: {
            return (
                <Card>
                    <Text>{content}</Text>
                </Card>
            )
        }
    }
};
