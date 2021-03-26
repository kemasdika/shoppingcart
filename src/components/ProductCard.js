import React from 'react'
export default function ProductCard() {
    return (
        <>
     <div className='m-5 flex justify-between'>
        <img className='w-52 h-60 rounded-lg' src={'https://cf.shopee.co.id/file/4a74481bdb6bd7571ca1fef6b1fd63e2'}></img>
        <div className='text-left grid grid-cols-1 gap-2 w-1/2'>
            <p className='text-xl font-bold text-gray-500'>Blue denim shirt</p>
            <p className='text-base font-semibold text-gray-400 '>shirt - blue</p>
            <p className='text-base font-semibold text-gray-400 '>Color : blue</p>
            <p className='text-base font-semibold text-gray-400 '>size : M</p>
            <div>
                <button className='text-base text-gray-500 font-semibold mr-5'> REMOVE ITEM</button>
                <button className='text-base text-gray-500 font-semibold mr-5 '> MOVE TO WISHLIST</button>                                
            </div>
        </div>
        <div className='grid grid-cols-1 text-right mr-5'>
            <div className=''>
                <button className='border border-gray text-center w-6'>-</button>
                <input className='border border-gray text-center w-10' value='1'></input>
                <button className='border border-gray text-center w-6'>+</button>
            </div>
            <p className='text-gray-400 text-sm'>( Note 1 piece )</p>
            <p className='text-gray-500 text-xl font-bold'>$5.5</p>
        </div>
    </div>
        <hr/>
    </>
    )
}
