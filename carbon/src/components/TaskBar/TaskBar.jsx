import "./TaskBar.css";
import Assignee from "../Assignee/Assignee";
import Priority from "../Priority/Priority";
import CustomTooltip from "../Tooltip/CustomTooltip";

const TaskBar = (props) => {
  const { headline } = props;
  const toolTipInfo = (
    <>
      <h1>Priority</h1>
      <p>Select the priority</p>
    </>
  )
  return (
    <div className="bar-container">
      <div className="task-status">
        <div className="status-color-outer">
          <div className="status-color-inner"></div>
        </div>
      </div>
      <div className="task-headline">{headline}</div>
      <div className="task-info-container">
        <Assignee
          profileImage={process.env.PUBLIC_URL + "./images/assignee.jpg"}
        />
        <CustomTooltip id ="priority-tooltip" toolTipLocation="right" toolTipContent={toolTipInfo} toolTipComponent={<Priority flag="urgent" />} />
        <div className="deadline">Deadline</div>
      </div>
    </div>
  );
};

export default TaskBar;
