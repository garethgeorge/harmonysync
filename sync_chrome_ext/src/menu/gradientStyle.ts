import { makeStyles } from "@material-ui/core/styles";

export default (startColor = "#FE6B8B", stopColor = "#FF8E53") => {
  const styles = {
    root: {
      background: `linear-gradient(45deg, ${startColor} 30%, ${stopColor} 90%)`,
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
    },
  };

  return makeStyles(styles)();
};
