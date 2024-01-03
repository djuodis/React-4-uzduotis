const Input = ({ inputValue, setInputValue, handleKeyPress }) => {
  return (
    <input
      id="input"
      type="text"
      placeholder="Write something here..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyPress={handleKeyPress}
    />
  )
}

export default Input
