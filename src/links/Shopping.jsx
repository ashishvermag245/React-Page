import React from 'react'

const Shopping = () => {
  return (
    <div>
       <section class="text-gray-600 body-font mx-5 py-5">
        
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 p-heading">Shopping page </h1>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex">
            <input class="form-control form-control-lg" type="text" placeholder="title" aria-label=".form-control-lg example"/>
            <input class="form-control form-control-lg" type="text" placeholder="Price" aria-label=".form-control-lg example"/>
            <input class="form-control form-control-lg" type="text" placeholder="Description" aria-label=".form-control-lg example"/>
            <input class="form-control form-control-lg" type="text" placeholder="category" aria-label=".form-control-lg example"/>
            </div>
          </div>
        </div>
        
    </section>
    </div>
  )
}

export default Shopping
