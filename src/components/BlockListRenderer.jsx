import { WKCard } from "../shared/customs/Card"

export const BlockListRenderer = ({blocks}) => {
    const renderBlocks = () => {
        return blocks.map(block => {
            return <WKCard type={block.type} content={block.content} key={block.id} />
        })
    }

    return (
        <div>
            {renderBlocks()}
        </div>
    )
}