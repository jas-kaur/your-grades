import { useState } from 'react'
import Search from "./components/Search"
import Form from "./components/Form"
import Table from "./components/Table"
import './App.css'

function App() {
  const [txtValue, setTxtValue] = useState("")
  const [table, setTable] = useState([])
  const [form, setForm] = useState({
    courseNo: "",
    courseName: "",
    units: 0,
    grades: "",
  })

  const handleForm =(e) => setForm({...form, [e.target.id]: e.target.value})

  const handleSubmit = (event) => {
    event.preventDefault();
    setTable([...table, {id: table.length + 1, courseNo: form.courseNo, courseName: form.courseName, units: form.units, grades: form.grades}])

  }

  return (
    <div className=" App">
      <div className="container mx-auto p-[1rem]">
        <div className="flex flex-row items-start justify-center gap-10">
          <div className="w-3/12">
            <Form form={form} onChange={handleForm} handleSubmit={handleSubmit}></Form>
          </div>
          <div className="flex flex-col items-start w-9/12 gap-2">
            <Search value={txtValue} onChange={(e)=> {setTxtValue(e.target.value)}} ></Search>
            <table className="w-full border-collapse rounded-[10px]">
              <thead>
                <tr className='max-w-full px-4 py-2' >
                  <th className='border border-white bg-black px-4 py-2 text-white'>Course No.</th>
                  <th className='border border-white bg-black px-4 py-2 text-white'>Course Name</th>
                  <th className='border border-white bg-black px-4 py-2 text-white'>Units</th>
                  <th className='border border-white bg-black px-4 py-2 text-white'>Grade</th>
                </tr> 
              </thead>
              <tbody>
                <Table items={table} query={txtValue}></Table>
              </tbody>
            </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
