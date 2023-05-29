import './HotButton.css';
import { useState } from 'react';

export default function HotButton() {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 1);
  }

  function getTemp() {
    if (clicks < 3) {
      return 'cold'
    } else if (clicks < 6) {
      return 'cool'
    } else if (clicks < 9) {
      return 'tepid'
    } else if (clicks < 12) {
      return 'warm'
    } else if (clicks < 15) {
      return 'hot'
    } else if (clicks < 18) {
      return 'nuclear'
    }
  }

  return (
    <button onClick={handleClick} className={`hot-button ${getTemp()}`}> Hot Button</button >
  )
}
