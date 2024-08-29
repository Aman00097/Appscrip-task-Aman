import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";

export default function Products({ optionValue, setNumberOfProducts, filterValue }) {
    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])

    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => {
                setProducts([...res])
                setFilterProducts([...res])
                setNumberOfProducts(res?.length)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (optionValue === 'recommended') {
            getProducts()
        } else if (optionValue === 'popular') {
            setFilterProducts(prevProducts =>
                [...prevProducts].sort((a, b) => b?.rating?.rate - a?.rating?.rate)
            )
        } else if (optionValue === 'price : high to low') {
            setFilterProducts(prevProducts =>
                [...prevProducts].sort((a, b) => b?.price - a?.price)
            )
        } else if (optionValue === 'price : low to high') {
            setFilterProducts(prevProducts =>
                [...prevProducts].sort((a, b) => a?.price - b?.price)
            )
        }

        setNumberOfProducts(filterProducts?.length);
    }, [optionValue])

    useEffect(() => {
        if (filterValue.length > 0) {
            let data = products?.filter(ele => {
                let d = filterValue.find(e => ele?.category?.toLowerCase()?.includes(e?.toLowerCase()))
                if (d) return ele
            })
            setFilterProducts([...data])
            setNumberOfProducts(data?.length);
        } else {
            setFilterProducts(products)
            setNumberOfProducts(products?.length);
        }
    }, [filterValue])

    return (
        <div id='products'>
            {
                filterProducts && filterProducts?.length > 0 && filterProducts.map(product => (
                    <div key={product?.id}>
                        <img src={product?.image} alt="" />
                        <h3>{product?.title}</h3>
                        <h4>
                            <span>${product?.price}</span>
                            <span>{product?.rating?.rate}&nbsp; <FaStar size={14} /></span>
                        </h4>
                    </div>
                ))
            }
        </div>
    )
}
