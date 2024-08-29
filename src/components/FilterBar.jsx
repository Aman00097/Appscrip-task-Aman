import React from 'react'
// import { IoIosArrowDown } from "react-icons/io";

const filters = [{
    name: 'Ideal For',
    category: ['men', 'women']
}, {
    name: 'Category',
    category: ['clothing', 'electronics', 'jewelery']
}]

export default function FilterBar({ filterValue, setFilterValue, setSidebar }) {

    return (
        <aside>
            {/* <div>
                <input type="checkbox" name="customizble" id="customizble" />
                <label htmlFor="customizble">Customizble</label>
            </div> */}
            {filters && filters?.map(ele => (<div key={ele?.name}>
                <p>{ele?.name}</p>
                <ul>
                    {ele?.category?.length > 0 && ele?.category?.map(e => (<li key={e}>
                        <input type="checkbox" name={e} id={e} checked={filterValue?.includes(e)} onChange={() => {
                            if (filterValue.includes(e)) {
                                setFilterValue(filterValue.filter(ele => ele !== e))
                            }
                            else {
                                setFilterValue([...filterValue, e])
                            }
                        }} />
                        <label htmlFor={e}>{e === 'clothing' ? 'clothes' : e}</label>
                    </li>))}
                </ul>
            </div>))
            }
            {/* <div>
                <label htmlFor="IDEAL For">IDEAL For</label>
                <select name="IDEAL For" id="IDEAL For">
                    <option value="All">All</option>
                </select>
            </div> */}
            {/* <div>
                <label htmlFor="occasion">occasion</label>
                <select name="occasion" id="occasion">
                    <option value="All">All</option>
                </select>
            </div>
            <div>
                <label htmlFor="work">work</label>
                <select name="work" id="work">
                    <option value="All">All</option>
                </select>
            </div>
            <div>
                <label htmlFor="fabric">fabric</label>
                <select name="fabric" id="fabric">
                    <option value="All">All</option>
                </select>
            </div>
            <div>
                <label htmlFor="segment">segment</label>
                <select name="segment" id="segment">
                    <option value="All">All</option>
                </select>
            </div>
            <div>
                <label htmlFor="suitable for">suitable for</label>
                <select name="suitable for" id="suitable for">
                    <option value="All">All</option>
                </select>
            </div>
            <div>
                <label htmlFor="raw materials">raw materials</label>
                <select name="raw materials" id="raw materials">
                    <option value="All">All</option>
                </select>
            </div>
            <div>
                <label htmlFor="Pattern">Pattern</label>
                <select name="Pattern" id="Pattern">
                    <option value="All">All</option>
                </select>
            </div> */}
        </aside>
    )
}
