import "./TaskBar.css";
import Assignee from "../Assignee/Assignee";
import Priority from "../Priority/Priority";

const TaskBar = (props) => {
  const { headline } = props;

  return (
    <div className="bar-container">
      <div className="task-status">
        <div className="status-color-outer">
          <div className="status-color-inner"></div>
        </div>
      </div>
      <div className="task-headline">{headline}</div>
      <div className="task-info-container">
        <Assignee profileImage={process.env.PUBLIC_URL + './images/assignee.jpg'}/>
        <Priority flag="urgent"/>
        <div className="deadline">Deadline</div>
      </div>
    </div>
  );
};

export default TaskBar;
