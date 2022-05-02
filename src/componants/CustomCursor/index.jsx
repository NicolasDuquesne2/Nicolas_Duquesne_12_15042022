import { Rectangle } from "recharts"

function CustomCursor({payload, top, bottom}) {
    console.log(payload)
    console.log(`${top} ${bottom}`)
    return (
        <Rectangle
        />
    )
} 


export default CustomCursor