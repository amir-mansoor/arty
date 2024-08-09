const ProgressBar = ({ percent }) => {
  let padding;
  if (percent == 0) {
    padding = 0;
  } else {
    padding = 10;
  }

  const bgGray = {
    width: "100%",
    height: "10%",
    background: "gray",
    borderRadius: "10px",
    marginBottom: "10px",
    transition: "all 0.3s",
  };

  const bgGreen = {
    width: percent + "%",
    height: "10%",
    background: "green",
    padding: `${padding}px`,
  };

  return (
    <div style={bgGray}>
      <div style={bgGreen}></div>
    </div>
  );
};

export default ProgressBar;
