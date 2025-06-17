import { useState } from "react";
import styles from "./CaloriesRecordEdit.module.css";

export default function CaloriesRecordEdit(props) {
  const formatDate = (date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d.toLocaleDateString("en-CA");
  };
  const defaultValue = {
    date: new Date(),
    meal: "",
    content: "",
    calories: 0,
  };
  const [maelRecord, setMaelRecord] = useState(defaultValue);
  const onChangeDateHandler = (event) => {
    setMaelRecord({
      ...maelRecord,
      date: new Date(event.target.value),
    });
  };
  const onChangeMaelHandler = (event) => {
    setMaelRecord({ ...maelRecord, meal: event.target.value });
  };
  const onChangeContentHandler = (event) => {
    setMaelRecord({ ...maelRecord, content: event.target.value });
  };
  const onChangeCaloriesHandler = (event) => {
    setMaelRecord({ ...maelRecord, calories: event.target.value });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(maelRecord);
    setMaelRecord(defaultValue);
  };
  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={formatDate(maelRecord.date)}
          onChange={onChangeDateHandler}
        />
      </div>
      <div>
        <label htmlFor="meal">Meal:</label>
        <select
          id="meal"
          value={maelRecord.meal}
          onChange={onChangeMaelHandler}
          required
        >
          <option value=""></option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
        </select>
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <input
          required
          type="text"
          id="content"
          value={maelRecord.content}
          onChange={onChangeContentHandler}
        />
      </div>
      <div>
        <label htmlFor="calories">Calories:</label>
        <input
          required
          min={0}
          type="number"
          id="calories"
          value={maelRecord.calories}
          onChange={onChangeCaloriesHandler}
          className={maelRecord.calories < 0 ? styles.error : ""}
        />
      </div>
      <button className={styles.Btn} type="submit">
        Add Record
      </button>
      <button
        onClick={props.handelCloseModal}
        className={`${styles.closeBtn} ${styles.Btn}`}
      >
        Close
      </button>
    </form>
  );
}
