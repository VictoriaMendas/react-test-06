export default function SearchBox({ filter, changeFilter }) {
  return (
    <div>
      <label>
        Find contact by name
        <input type="text" value={filter} onChange={changeFilter} />
      </label>
    </div>
  );
}
