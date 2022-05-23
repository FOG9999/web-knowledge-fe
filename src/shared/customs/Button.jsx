import { Button } from "antd"

const WKButton = (props) => {
    return <Button className="wk-btn" {...props}>{props.children ? props.children : null}</Button>
}

export {
    WKButton
}