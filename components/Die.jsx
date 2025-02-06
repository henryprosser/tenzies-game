export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld && "#59E391",
  };
  return (
    <button className={props.className} style={styles} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
