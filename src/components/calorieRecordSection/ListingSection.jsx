import RecordList from "./RecordList";
import styles from "./ListingSection.module.css";
import { useState } from "react";
import NoResultFound from "./NoResultFound";

export default function ListingSection(props) {
  const { allRecords } = props;
  const [fromDate, serFromDateDate] = useState(new Date());
  const [toDate, serToDateDate] = useState(new Date());
  const formatDate = (date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d.toLocaleDateString("en-CA");
  };

  const searchData = (event) => {
    event.preventDefault();
    serFromDateDate(new Date(event.target.fromDate.value));
    serToDateDate(new Date(event.target.toDate.value));
  };

  const dataFilter = allRecords.filter((e) => {
    const recordDate = formatDate(e.date);
    const from = formatDate(fromDate);
    const to = formatDate(toDate);
    return recordDate >= from && recordDate <= to;
  });

  return (
    <>
      <form onSubmit={searchData} className={styles.filterContainer}>
        <div className={styles.Filter}>
          <label htmlFor="listingDate">From Date:</label>
          <input
            name="fromDate"
            id="listingDate"
            type="date"
            defaultValue={formatDate(new Date())}
          />
        </div>
        <div className={styles.Filter}>
          <label htmlFor="listingDate">To Date:</label>
          <input
            name="toDate"
            id="listingDate"
            type="date"
            defaultValue={formatDate(new Date())}
          />
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} type="submit">
            Search
          </button>
          <button
            className={`${styles.addRecord} ${styles.button}`}
            type="button"
            onClick={props.handelOpenModal}
          >
            Add Record
          </button>
        </div>
      </form>
      {dataFilter.length === 0 && <NoResultFound />}
      <RecordList records={dataFilter} />
    </>
  );
}
