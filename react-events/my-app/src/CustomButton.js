export default function CustomButton({color, text}) {

  function handleClick(text) {
    window.alert(text);
  }

  return (
    <button style={{backgroundColor: color}} onClick={() => handleClick(text)}>
      {text}
    </button>
  )
}
