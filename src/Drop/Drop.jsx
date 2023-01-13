import "./drop.css";

const Drop = ({isShowDrop}) => {
  return (
    <div className={isShowDrop ? "drop active" : "drop" }>
      <section className="secloading">
        <div className="one"></div>
      </section>
    </div>
  );
};

export default Drop;
