import React from 'react';
import FilterCatg from './filter-catg';
import FilterProducts from "./filter-products";

export default function FilterPage() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-4 mt-4'>
                <FilterCatg />
                </div>
                <div className='col-12 col-md-8 mt-4'>
                    <FilterProducts />
                </div>
            </div>
        </div>
    );
}

