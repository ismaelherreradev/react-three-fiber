import { Suspense, useState } from "react";
import Overlay from "./layout/Overlay";
import { FadeIn, LeftMiddle } from "./layout/styles";
import Bananas from "./Banana";

export default function App() {
  const [speed, set] = useState(1);
  return (
    <>
      <Suspense fallback={null}>
        <Bananas speed={speed} />
        <FadeIn />
      </Suspense>
      <Overlay />
      <LeftMiddle>
        <input
          type="range"
          min="0"
          max="10"
          value={speed}
          step="1"
          onChange={(e) => set(e.target.value)}
        />
      </LeftMiddle>
    </>
  );
}
