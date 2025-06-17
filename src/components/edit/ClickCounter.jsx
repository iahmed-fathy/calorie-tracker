export default function ClickCounter(props) {
  const onClickHandler = () => {
    console.log("Clicked");
    const { setClickCount } = props;
    setClickCount((previousValue) => previousValue + 1);
  };
  return (
    <button type="button" onClick={onClickHandler}>
      ClickMe
    </button>
  );
}
