const List = ({ memoryList, removeFromList }) => {
  return (
    <ul>
      {memoryList.map((item, index) => (
        <li className='list-item' key={index}>
          <div className="text">{item}</div>
          <button className="remove" onClick={() => removeFromList(index)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </li>
      ))}
    </ul>
  )
}

export default List
