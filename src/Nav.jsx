import React from 'react';
import './Nav.css'
function Nav() {
    return (
        <nav className="backdrop-blur fixed z-50">
            <div className="w-screen px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center h-16">

                    <div className="flex-1 flex items-center  justify-between px-2 sm:justify-start sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <h1 className=" text-white font-bold text-2xl">FJUP</h1>
                        </div>
                        <div className="block sm:ml-6">
                            <div className="flex space-x-4">
                                <div className="flex items-center">
                                    <a className="text-white  hover px-3 py-2 rounded-md text-sm font-medium">
                                        Сообщить об ошибке</a>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute hidden sm:block inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <a className="text-white  hover px-3 py-2 rounded-md text-sm font-medium">
                            Подключить</a>
                    </div>
                </div>
            </div>


        </nav>
    )
        ;
}

export default Nav;