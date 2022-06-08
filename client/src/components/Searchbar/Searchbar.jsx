import React, { useState } from "react";

const Searchbar = () => {
  const [name, setName] = useState("");

  const handleInputChange = ({ target }) => {
    setName(target.value);
    //action buscar
  };
  return (
    <div>
      <input type='text' placeholder="Buscar..." onChange={(e) => handleInputChange(e)} />

    </div>
  );
};

export default Searchbar;
