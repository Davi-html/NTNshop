import React, { useState } from "react";
import { Container } from "./styles";

export function Input({ placeholder = "Placeholder"} ) {
  const [newPlaceholder] = useState(placeholder);

  return (
    <Container
      type="text"
      placeholder={newPlaceholder}
    />
  );
}

export default Input;
