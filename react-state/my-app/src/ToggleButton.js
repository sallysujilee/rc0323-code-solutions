import { useState } from "react"

function ToggleButton({text, color}) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  const bgColor = isClicked ? color : 'white'

  return (
    <button style={{backgroundColor: bgColor}} onClick={handleClick}>{text}</button>
  )
}

export default ToggleButton;
