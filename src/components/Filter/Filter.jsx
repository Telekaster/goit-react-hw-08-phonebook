import React from "react";

export default function Filter({ filterContacts }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={filterContacts} />
    </div>
  );
}
