function CustomButton(props) {
  const { text, color } = props;
  const buttonStyle = {
    backgroundColor: color,
    outlineColor: '#1E5FCC',
  };

  return (
    <button className="custom-button" style={buttonStyle}>
      {text}
    </button>
  );
}

export default CustomButton;
