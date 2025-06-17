import styles from "./StyledRecordCell.module.css";

export default function StyledRecordCell(props) {
  return <div className={styles["Styled-Record-date"]}>{props.children}</div>;
}
