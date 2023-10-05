import React from 'react'

const Form = ({form, onChange, handleSubmit}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className='pt-6 text-left text-sm font-medium'>Course No.</div>
            <input className="placeholder:text-slate-400 block bg-white mb-5 p-2 border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="4-132" 
            type="text" 
            name="courseNo" 
            id="courseNo" 
            value={form.courseNo} 
            onChange={onChange} 
            required
            />

            <div className='text-left text-sm font-medium'>Course Name</div>
            <input className="placeholder:text-slate-400 block bg-white mb-5 p-2 border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
            placeholder="Fullstack" 
            type="text" 
            name="courseName" 
            id='courseName' 
            value={form.courseName} 
            onChange={onChange} 
            required
            />

            <div className='text-left text-sm font-medium'>Units</div>
            <input className="placeholder:text-slate-400 block bg-white mb-5 p-2 border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="" 
            type="number" 
            name="units" 
            id='units' 
            value={form.units} 
            onChange={onChange} 
            required
            />

            <div className='text-left text-sm font-medium'>Grade</div>

            <div className='flex gap-2'>
            <input type="radio" className='accent-gray-800' name="grades" id='grades' value="A" onChange={onChange}/>
            <label>A</label>
            </div>

            <div className='flex gap-2'>
            <input type="radio" className='accent-gray-800' name="grades" id='grades' value="B+" onChange={onChange}/>
            <label>B+</label>
            </div>

            <div className='flex gap-2'>
            <input type="radio" className='accent-gray-800' name="grades" id='grades' value="B" onChange={onChange}/>
            <label>B</label>
            </div>

            <div className='flex gap-2'>
            <input type="radio" className='accent-gray-800' name="grades" id='grades' value="C+" onChange={onChange}/>
            <label>C+</label>
            </div>

            <div className='flex gap-2'>
            <input type="radio" className='accent-gray-800' name="grades" id='grades' value="C" onChange={onChange}/>
            <label>C</label>
            </div>

            <div className='flex gap-2'>
            <input type="radio" className='accent-gray-800' name="grades" id='grades' value="D" onChange={onChange}/>
            <label>D</label>
            </div>

            <div className='flex gap-2'>
            <input type="radio" className='accent-gray-800' name="grades" id='grades' value="F" onChange={onChange}/>
            <label>F</label>
            </div>

            <button className='bg-black hover:bg-gray-100 text-white font-semibold py-2 px-4 mt-5 border border-gray-400 rounded shadow' type="submit">Submit</button>
            </form>
            
        </div>
    )
}

export default Form
