import "./Assignee.css";

const Assignee = (props) => {
  const { profileImage } = props;
  return (
    <div className="assignee-container">
      <img className="profile-image" src={profileImage} alt="assignee" />
    </div>
  );
};

export default Assignee;
