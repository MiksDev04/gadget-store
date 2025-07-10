import { useState } from "react";

export default function App() {

  const [items, setItems] = useState([])

  const [note, setNote] = useState('')
  const [index, setIndex] = useState(0)
  const [formType, setFormType] = useState('➕ Add')

  function addItem(e) {
    e.preventDefault()
    if (formType === '➕ Add') {
      if (note.trim() === '') {
        alert('Write a note before submitting it')
        return
      }

      setItems(prev => [...prev, note])
    } else {
      if (note.trim() === '') {
        alert('Write a note before submitting it')
        return
      }
      setItems(prev => prev.map((item, i) => i === index ? note : item))
      setFormType('➕ Add')
    }
    setNote('')
    setIndex(0)

  }

  function editNote(index, note) {
    setIndex(index)
    setFormType('✒️ Edit')
    setNote(note)
  }

  function deleteNote(i) {
    if (index === 0) {
      setItems(prev => prev.filter((item, index) => i !== index))
    } else {
      alert('Finish the edit before deleting')
    }
  }

  return (
    <>
      <header className=" py-10  text-center text-4xl font-black rounded-b-2xl bg-blue-700 text-white shadow-md shadow-blue-300">
        Note Taking App
      </header>
      <div className=" flex flex-col items-center mt-5">
        <form className=" flex gap-2 items-center" onSubmit={addItem}>
          <textarea value={note} onChange={e => setNote(e.target.value)} required name="note" id="note" className=" max-h-20 border rounded-md border-gray-300 w-2xs py-0.5 px-1.5">

          </textarea>
          <button type="submit" className=" btn border border-blue-500 text-blue-500 btn-sm ">{formType}</button>
        </form>
      </div>
      <div className="flex flex-col items-center mt-5">
        <ul className="min-w-56 grid">
          {items.length > 0 ?
            items.map((item, index) => (
              <li key={index} className="flex justify-between items-center gap-3">
                <span>{item}</span>
                <div>
                  <button onClick={() => editNote(index, item)} className="active:bg-blue-300 px-1.5 py-.5 rounded-md">✒️</button>
                  <button onClick={() => deleteNote(index)} className="active:bg-blue-300 px-1.5 py-.5 rounded-md">🗑️</button>
                </div>
              </li>
            ))
            :
            <li><p>No item listed</p></li>
          }
        </ul>
      </div>
    </>
  );
}


