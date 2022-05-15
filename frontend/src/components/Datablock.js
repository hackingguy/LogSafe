export default function Datablock(props) {
  return (
    <div className="d-flex flex-column justify-content-center col container cardd">
      <div className="d-flex justify-content-center">
        <span className="card_num">{props.data}</span>
      </div>
      <div className="d-flex justify-content-center">
        <span className="card_data">{props.name}</span>
      </div>
    </div>
  );
}
