import React from 'react'

const Table = (props) => {
    let totalQPI;
  
    const gradeEquivalent = {
      'A': 4,
      'B+': 3.5,
      'B': 3, 
      'C+':2.5,
      'C': 2,
      'D': 1,
      'F': 0
    }
  
    const totalGrade =  props.items.reduce((total, table) => {
      return total + (table.units * gradeEquivalent[table.grades])
    } , 0)
  
    const totalUnits =  props.items.reduce((total, table) => {
      return total + Number(table.units)
    }, 0)
  
    totalQPI = (totalGrade / totalUnits).toFixed(2);
  
    if (isNaN(totalQPI)) {
      totalQPI = 0; 
    } 

    return (
        <>
          {props.items
                .filter((item) => (
                  props.query.toLowerCase() === '' ||
                  item.courseNo.toLowerCase().includes(props.query.toLowerCase()) || 
                  item.courseName.toLowerCase().includes(props.query.toLowerCase()) ||
                  item.grades.toLowerCase().includes(props.query.toLowerCase()) ||
                  item.units.includes(props.query) 
                  ))
                .map((item, index) => (
                      <tr key={item.id}>
                          {/* <th scope='row'>{index+1}</th> */}
                          <td className='border bg-white border-gray-400 px-4 py-2 text-gray-800'>{item.courseNo}</td>
                          <td className='border bg-white border-gray-400 px-4 py-2 text-gray-800'>{item.courseName}</td>
                          <td className='border bg-white border-gray-400 px-4 py-2 text-gray-800'>{item.units}</td>
                          <td className='border bg-white border-gray-400 px-4 py-2 text-gray-800'>{item.grades}</td>
                      </tr>
                    
                      
                ))}
            <tr>
              <td></td>
              <td></td>
              <td className='border bg-white border-gray-400 px-4 py-2 text-gray-800'>Total QPI</td>
              <td className='border bg-white border-gray-400 px-4 py-2 text-gray-800'>{totalQPI}</td>
           </tr>
  
      </>
    )
}

export default Table
