function PassingProps(p) {
  const style = {
    border: "1px solid #1d4c52",
    background: "#a4dcd4",
    width: "200px",
    display: "flex",
    color: "",
  };
  const closeButton = {
    outline: "none",
    background: "none",
    border: "none",
    marginLeft: "150px",
    color: "",
  };
  //   const close = () => {};
  return (
    <>
      <div style={style}>
        <p>Alert</p>
        <button style={closeButton} onClick={p.close}>
          X
        </button>
      </div>
    </>
  );
}
export default PassingProps;
