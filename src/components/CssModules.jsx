import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- CSS Modeules</p>
      <button className={classes.button}>ぼたんだよ</button>
    </div>
  );
};
