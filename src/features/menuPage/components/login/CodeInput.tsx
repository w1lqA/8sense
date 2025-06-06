'use client'
import { useRef, useState } from "react";

export const CodeInput = ({
  onComplete,
  loginState
}: {
  onComplete?: (code: string) => void;
  loginState: string;
}) => {
  const [values, setValues] = useState(["", "", "", ""]);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }

    if (newValues.every((v) => v !== "") && onComplete) {
      onComplete(newValues.join(""));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      const newValues = [...values];
      newValues[index - 1] = "";
      setValues(newValues);
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-4">
      {values.map((val, i) => (
        <input
          key={i}
          ref={(el) => {inputsRef.current[i] = el}}
          type="text"
          inputMode="numeric"
          maxLength={1}
          className={`w-full max-w-1/4 h-20 text-center text-xl border-2 border-black-300 ${loginState === 'codeInput' ? 'text-black-600' : 'text-green-500'} rounded-lg focus:outline-black`}
          value={val}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
        />
      ))}
    </div>
  );
};
