import { useState } from "react";
import styles from "./App.module.css";
import CaloriesRecordEdit from "./components/edit/CaloriesRecordEdit";
import ListingSection from "./components/calorieRecordSection/ListingSection";
import Modal from "react-modal";

const INITIAL_RECORDS = [
  {
    id: 1,
    date: new Date("06-01-2025"),
    meal: "Breakfast",
    content: "Eggs",
    calories: 200,
  },
  {
    id: 2,
    date: new Date("06-03-2025"),
    meal: "Lunch",
    content: "Cheicken",
    calories: 240,
  },
  {
    id: 3,
    date: new Date("06-02-2025"),
    meal: "Dinner",
    content: "Cheese",
    calories: 399,
  },
  {
    id: 4,
    date: new Date("06-01-2025"),
    meal: "Snack",
    content: "Chocolate",
    calories: 500,
  },
];

function App() {
  const [records, setRecords] = useState(INITIAL_RECORDS);
  const [nextId, setNextId] = useState(5);
  const formSubmitHandler = (record) => {
    const formattedRecord = {
      ...record,
      id: nextId,
    };
    setNextId((lastVal) => lastVal + 1);
    setRecords((prevRecords) => [formattedRecord, ...prevRecords]);
    handelCloseModal();
  };

  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      border: "none",
      padding: "0",
      borderRadius: "10px",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,.5)",
    },
  };
  const [isModelOpen, SetIsModelOpen] = useState(false);

  const handelOpenModal = () => {
    SetIsModelOpen(true);
  };
  const handelCloseModal = () => {
    SetIsModelOpen(false);
  };

  return (
    <div className={styles.App}>
      <h1>Calorie Tracker</h1>
      <Modal
        isOpen={isModelOpen}
        onRequestClose={handelCloseModal}
        contentLabel="Modal"
        style={modalStyle}
      >
        <CaloriesRecordEdit
          onFormSubmit={formSubmitHandler}
          handelCloseModal={handelCloseModal}
        />
      </Modal>
      <ListingSection allRecords={records} handelOpenModal={handelOpenModal} />
    </div>
  );
}

export default App;
