import { Button } from "antd"

const WKButton = (props) => {
    return <Button className="wk-btn" {...props}>{props.children}</Button>
}

export {
    WKButton
}