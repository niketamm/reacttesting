import React from "react";

export default function Form() {
  return (
    <form>
      <input
        type="text"
        placeholder="enter city and press enter"
        className="search"
      />
      <input type="submit" value="Search" className="searchTwo" />
      <input type="submit" value="Current location" className="searchTwo" />
    </form>
  );
}
