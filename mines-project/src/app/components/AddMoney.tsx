'use client'

import React from "react";

function AddMoney(props: any) {

    return (
        <>
        
            <div className="h-full w-full flex justify-center items-center">
                <div className="absolut top-[50] h-32 w-72 border-[3px] border-[#557086] bg-[#0f212e] flex-col justify-center sm:items-center rounded-1x
                 sm:absolute sm:top-[50%] sm:h-40 sm:w-96 sm:border-[3px] sm:border-[#557086] sm-bg-[#0f212e] sm:flex sm:flex-col sm:justify-center sm:items-center sm:rounded-1x">
                    <div className="w-full flex flex-row justify-center items-center my-3 sm:w-full sm:flex sm:flex-row sm:justify-center sm:items-center my-4">

                        <p className="mx-2 text-sm text-[#a4bcd3] font-bold sm:mx-2 sm:text-base sm:text-[#a4bcd3] sm:font-bold">Amount</p>

                        <input type="number" className="mx-4 h-8 w-28 p-2 text:sm border-2 border-white rounded-md text-black  font-bold bg-[#557086] focus:outline-none smmx-4 sm:h-9 sm:w-36 sm:p-2 sm:text-sm sm:border-2 sm:boder-white sm:rounded-md sm:text-black sm:font-bold sm:bg-[#557086]" value={props.addAmount} onChange={props.addAmountOnChange}></input>

                    </div>

                    <div className="flex justify-center items-center">
                        <button className="h-7 w-14 m-3 text-xs font-bold bg-[#00E701] hover:bg-[#1FFF20] text-black rounded-sm
                         sm:h-8 sm:w-20 sm:m-3 sm:text-sm sm:font-bold sm:bg-[#00E701] sm:hover:bg-[#1FFF20]"></button>
                    </div>

                 </div>
            </div>

        </>
    )

}