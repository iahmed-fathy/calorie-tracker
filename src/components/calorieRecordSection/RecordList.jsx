import CalorieRecord from "./CalorieRecord";
import styles from "./RecordList.module.css";

export default function RecordList(props) {
  return (
      <ul className={styles.list}>
        {props.records.map(
          (record) =>
            record.calories >= 0 && (
              <li key={record.id} className={styles.listItem}>
                <CalorieRecord
                  date={record.date}
                  meal={record.meal}
                  content={record.content}
                  calories={record.calories}
                />
              </li>
            )
        )}
      </ul>
  );
}
