import styles from "./Intro.module.css";
export const Intro = () => {
  return (
    <>
      <h1 className={styles.intro}>A fairer medal system</h1>
      <p className={styles.intro}>
        When you look at Olympic's official medal count, it is easy to find that
        countries with a larger population tend to sit on the top of the chart.
        Although there are limits to the number of athletes each country can
        send to the Olympic games, larger countries do have a bigger pool to
        choose the best of their athletes. Obviously there should be a fairer
        way to count the medals.
      </p>
      <p className={styles.intro}>
        So what if we count the medals considering the population of each
        country? Which country wins the most medals per capita? That is what
        these charts are about.
      </p>
    </>
  );
};
