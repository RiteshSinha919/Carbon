import { Tooltip } from "react-tooltip";
import './CustomTooltip.css'

const CustomTooltip = (props) => {
    const { id, toolTipLocation, toolTipContent, toolTipComponent } = props;
    return (
        <>
        <span data-tooltip-id={id} data-tooltip-place={toolTipLocation} data-tooltip-delay-show={300} > {toolTipComponent} </span>  
        <Tooltip id={id} className="tooltip">
            {toolTipContent}
        </Tooltip>
        </>
    );
}

export default CustomTooltip