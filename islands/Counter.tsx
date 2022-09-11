import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div class="flex gap-2 w-full bg-red-500">
      <p class="flex-grow-1 font-bold text-xl">{count}</p>
    </div>
  );
}
