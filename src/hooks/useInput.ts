import { useState } from "react";

export function useInput() {
  const [inputValue, setInputValue] = useState("");
  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value);
  };
  const handleSubmit = (): void => {
    alert(inputValue);
  };

  return [inputValue, handleInputValue, handleSubmit];
}
