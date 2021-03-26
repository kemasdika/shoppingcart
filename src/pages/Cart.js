import React from 'react'
import ProductCard from '../components/ProductCard'
import {FaAngleDown} from 'react-icons/fa'
export default function Cart() {
    return (
        <div className='min-h-screen bg-gray-100'>
            <div className='text-center'>
                <h1 className='text-gray-500 text-2xl font-bold pt-5 pb-5'>Shoping cart</h1>
                <div className='flex-1 max-w-4lg mx-auto p-10'>
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3 md:gap-6'>
                        <div className='md:col-span-2 bg-white rounded-lg shadow-xl'>
                            <h1 className='text-left m-5 text-lg font-bold text-gray-500'>Cart (2 items)</h1>
                            <ProductCard/>
                            <ProductCard/>                    
                        </div>
                        <div className=''>
                            <div className='bg-white rounded-lg shadow-xl p-5 text-left'>
                                <p className='text-gray-500 text-xl font-bold mb-5'>The Total Amount Of</p>
                                <div className='flex justify-between mb-2'>
                                    <p className='text-gray-400 text-base font-semibold'>Temporary Amount</p>
                                    <p className='text-gray-400 text-base font-semibold'>$20.00</p>
                                </div>
                                <div className='flex justify-between mb-2'>
                                    <p className='text-gray-400 text-base font-semibold'>Shiping</p>
                                    <p className='text-gray-400 text-base font-semibold'>$2.00</p>
                                </div>
                                <hr></hr>
                                <div className='flex justify-between mt-2 mb-5'>
                                    <p className='text-gray-500 text-base font-semibold'>The Total Amount Of <br/>(including VAT)</p>
                                    <p className='text-gray-500 text-base font-semibold'>$22.00</p>
                                </div>
                                <button className='bg-blue-500 text-white w-full h-10 rounded-md'>GO TO CHECKOUT</button>
                            </div>
                            <div className='bg-white rounded-lg shadow-xl flex justify-between mt-5'>
                                <p className='text-gray-500 text-base font-bold p-3'>Add a discount code</p>                                
                                <button className='p-5'><FaAngleDown/></button>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
