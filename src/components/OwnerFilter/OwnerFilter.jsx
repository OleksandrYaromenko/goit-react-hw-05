export default function OwnerFilter({ setQuery, onFilter }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target.search.value);
    onFilter(e.target.search.value);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" />
      <button type="submit">Submit</button>
    </form>
  );
}
