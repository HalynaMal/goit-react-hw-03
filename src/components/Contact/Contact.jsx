const Contact = ({name, number, id, onDeleteContact}) => {
  return (
    <div>
    <h3>{name}</h3>
        <p>{number}</p>
        <button onClick={() => onDeleteContact(id)}>Delete</button>
    </div>
  )
}

export default Contact


