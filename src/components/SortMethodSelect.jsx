"use client";

export function SortMethodSelect({ sortMethod, sortDirection }) {
  function updateSearchParams(sortMethod, sortDirection) {
    const baseUrl = window.location.origin + window.location.pathname; // No search params
    window.location.href = `${baseUrl}?sortMethod=${sortMethod}&sortDirection=${sortDirection}`
  }
  return (
    <div>
      Sort by:
      <select onChange={(event) => {updateSearchParams(event.target.value, sortDirection)}} value={sortMethod}>
        <option value="vote_total">Votes</option>
        <option value="posts.id">Time posted</option>
      </select>
      <select onChange={(event) => {updateSearchParams(sortMethod, event.target.value)}} value={sortDirection}>
        <option value="DESC">Descending</option>
        <option value="ASC">Ascending</option>
      </select>
    </div>
  )
}