import React, { useState } from 'react'
import FilterBar from './FilterBar'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Products from './Products';
import { TiTick } from "react-icons/ti";

const options = [
    'recommended',
    // 'newest first',
    'popular',
    'price : high to low',
    'price : low to high'
]

export default function MainSection() {
    const [sidebar, setSidebar] = useState(true)
    const [isOptionOpen, setIsOptionOpen] = useState(false)
    const [optionValue, setOptionValue] = useState('recommended')
    const [numberOfProducts, setNumberOfProducts] = useState()

    const [filterValue, setFilterValue] = useState([])

    return (
        <main>
            <section>
                <h1>DISCOVER OUR PRODUCTS</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
            </section>
            <section>
                <div id='filter-laptop'>
                    <p style={{ gap: '50px' }}>{numberOfProducts} ITEMS
                        <span style={{ color: '#888792', display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setSidebar(!sidebar)}>
                            {sidebar ? <MdOutlineKeyboardArrowLeft size={25} /> : <MdOutlineKeyboardArrowRight size={25} />}
                            {sidebar ? 'HIDE' : 'SHOW'} FILTER</span>
                    </p>
                    <p style={{ cursor: 'pointer' }} onClick={() => setIsOptionOpen(true)}>{optionValue?.toUpperCase()}<IoIosArrowDown /></p>
                    {isOptionOpen && <div id='recommendOption' onMouseLeave={() => setIsOptionOpen(false)}>
                        <ul>
                            {options?.length > 0 && options?.map(ele => (<li key={ele} className={ele === optionValue && 'active'} onClick={() => {
                                setIsOptionOpen(false)
                                setOptionValue(ele)
                            }}>{ele === optionValue && <TiTick size={20} />}{ele}</li>))}
                        </ul>
                    </div>}
                </div>
                <div id='filter-mobile'>
                    <p onClick={() => setSidebar(!sidebar)}>FILTER</p>
                    <p style={{ cursor: 'pointer' }} onClick={() => {
                        setIsOptionOpen(true)
                        setSidebar(false)
                    }}>{optionValue?.toUpperCase()}<IoIosArrowDown /></p>
                    {isOptionOpen && <div id='recommendOption' onMouseLeave={() => setIsOptionOpen(false)}>
                        <ul>
                            {options?.length > 0 && options?.map(ele => (<li key={ele} className={ele === optionValue && 'active'} onClick={() => {
                                setIsOptionOpen(false)
                                setOptionValue(ele)
                            }}>{ele === optionValue && <TiTick size={20} />}{ele}</li>))}
                        </ul>
                    </div>}
                </div>
                <div>
                    {sidebar && <FilterBar filterValue={filterValue} setFilterValue={setFilterValue} />}
                    <Products optionValue={optionValue} setNumberOfProducts={setNumberOfProducts} filterValue={filterValue} />
                </div>
            </section>
        </main>
    )
}
