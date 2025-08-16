import React from 'react'

function Landing() {
  return (
    <>
     <section className='first md-5' style={{ height:"80vh", backgroundRepeat:"no-repeat",backgroundSize: "cover",
  backgroundPosition: "center",
      backgroundImage:"url('https://images.unsplash.com/photo-1697029749544-ffa7f15f9dd0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D')" }}>
        <div className="text-white d-flex justify-content-center align-items-center text-center flex-column" style={{height:"80vh",backgroundColor:"rgb(255, 255, 255,0.1)"}}>
            {/* <h4 className="mb-2">ONLINE BOOKSTORE</h4> */}
           <h1 className="fw-bold" style={{fontSize:"60px",width:"700px"}}>Discover - Favorite Book</h1>
           <div className='btn btn-outline-light border'style={{fontSize:"30px",borderRadius:"50px"}}>Browse Books </div>
        </div>

     </section>
     <section className='books '>
haii
     </section>
    </>
  )
}

export default Landing 