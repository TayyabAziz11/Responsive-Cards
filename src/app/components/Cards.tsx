import Image from "next/image"

function Cards(){
  return (
    // Main div/Parent div
    <div className="flex justify-around flex-col ml-20 gap-5 md:justify-between md:flex-row md:flex-wrap md:mr-20 lg:flex-nowrap mt-10">

          {/* 1st Card */}
          <div className="w-10/12 md:w-5/12  border-2 border-gray-500">

              <div className="flex justify-center">
                   <Image src="/burger.avif"
                      width={200}
                      height={200}
                      alt="burger"
                    />
              </div>

              <p className="text-center py-2">Wagyu Burger</p>

              <p className="text-center py-1">Rs:200/-</p>

             <div className="flex justify-center my-2">
                 <button className="bg-orange-400 text-white py-1 px-8 rounded-md">Order Now</button>
             </div>

        </div>



         {/* 2nd Card */}
           <div className="w-10/12 md:w-5/12 border-2 border-gray-500">

              <div className="flex justify-center">
                   <Image src="/burger.avif"
                       width={200}
                       height={200}
                       alt="burger"
                     />
              </div>

                   <p className="text-center py-2">Wagyu Burger</p>

                   <p className="text-center py-1">Rs:200/-</p>

                     <div className="flex justify-center my-2">
                          <button className="bg-orange-400 text-white py-1 px-8 rounded-md">Order Now</button>
                    </div>

          </div>



           {/* 3rd Card */}
             <div className="w-10/12 md:w-5/12 border-2 border-gray-500">

               <div className="flex justify-center">
                    <Image src="/burger.avif"
                       width={200}
                       height={200}
                       alt="burger"
                     />
               </div>

                  <p className="text-center py-2">Wagyu Burger</p>

                  <p className="text-center py-1">Rs:200/-</p>

                    <div className="flex justify-center my-2">
                        <button className="bg-orange-400 text-white py-1 px-8 rounded-md">Order Now</button>
                     </div>

           </div>

      </div>  

  )
}

export default Cards