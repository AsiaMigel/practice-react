import style from "./Statistics.module.css";
export const Statistics = ({ stats, title }) => {
  return (
    <>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.list}>
        {stats.map((item) => {
          return (
            <li className={style.item} key={item.id}>
              <span className={style.counter}>{item.total}</span>
              <p className={style.text}>{item.title}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
