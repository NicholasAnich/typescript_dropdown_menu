import { useState } from "react";
import { Select, SelectOption } from "./Select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fith", value: 5 },
  { label: "Sixth", value: 6 },
  { label: "Seventh", value: 7 },
];

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);

  return (
    <div>
      <Select
        multiple
        options={options}
        value={value1}
        onChange={(o) => setValue1(o)}
      />
      <br />
      <Select options={options} value={value2} onChange={(o) => setValue2(o)} />
    </div>
  );
}

export default App;
