import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaArrowRight } from "react-icons/fa";
// import About from './About';


function Landing() {
  return (
    <>
     <section className='first md-5 ' style={{ height:"80vh", backgroundRepeat:"no-repeat",backgroundSize: "cover",
  backgroundPosition: "center",
      backgroundImage:"url('https://images.unsplash.com/photo-1697029749544-ffa7f15f9dd0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D')" }}>
        <div className="text-white d-flex justify-content-center align-items-center text-center flex-column" style={{height:"80vh",backgroundColor:"rgb(255, 255, 255,0.1)"}}>
            {/* <h4 className="mb-2">ONLINE BOOKSTORE</h4> */}
           <h1 className="fw-bold" style={{fontSize: "clamp(28px, 6vw, 60px)"}}>Discover-Favorite Book</h1>
           <div className='btn btn-outline-light border 'style={{fontSize:"30px",borderRadius:"50px"}}>Browse Books </div>
        </div>

     </section>
     {/* <About/> */}

     <section className='books  text-center ' style={{  marginBottom:"0%",background: "linear-gradient(90deg, rgb(225, 201, 247), rgb(2, 104, 117))"}}>
  <div className='conatiner-fluid'>
        <h2 className='text-light p-4'>NEW RELEASES</h2>
    
       <div className='row container-fluid d-flex justify-content-evenly'>
        <Card sx={{ maxWidth: 240, m: 2, mx: "auto" }} className="col-12 col-sm-6 col-md-4 col-lg-3">
      <CardMedia
        className="img-fluid"
        sx={{ height: 280, maxWidth: 240, mx: "auto" }}
        image="https://cdn.shopify.com/s/files/1/0666/3471/1191/files/9780008325947.jpg?v=1737522348"
        title="book"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="d-flex justify-content-center">
        Pride and Prejudice 
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }} className="d-flex justify-content-center">
          ₹450.00
        </Typography>
      </CardContent>
      <CardActions className="d-flex justify-content-center">
        <Button size="small">Add To Cart</Button>
      </CardActions>
        </Card>
       <Card sx={{ maxWidth: 240, m: 2, mx: "auto" }} className="col-12 col-sm-6 col-md-4 col-lg-3">
      <CardMedia
        className="img-fluid"
        sx={{ height: 280, maxWidth: 240, mx: "auto" }}
        image="https://images.openai.com/thumbnails/4a3e92f08b26230c6b8376dbecc6250d.webp"
        title="book"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="d-flex justify-content-center">
         The Hobbit – paperback
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }} className="d-flex justify-content-center">
          ₹750.00
        </Typography>
      </CardContent>
      <CardActions className="d-flex justify-content-center">
        <Button size="small">Add To Cart</Button>
      </CardActions>
    </Card>
      <Card sx={{ maxWidth: 240, m: 2, mx: "auto" }} className="col-12 col-sm-6 col-md-4 col-lg-3">
      <CardMedia
        className="img-fluid"
        sx={{ height: 280, maxWidth: 240, mx: "auto" }}
        image="https://images.openai.com/thumbnails/fbbb6729e3859fe23e85f1a7fcc187fa.webp"
        title="book"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="d-flex justify-content-center">
         And Then There Were None
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }} className="d-flex justify-content-center">
          ₹250.00
        </Typography>
      </CardContent>
      <CardActions className="d-flex justify-content-center">
        <Button size="small">Add To Cart</Button>
      </CardActions>
    </Card>
      <Card sx={{ maxWidth: 240, m: 2, mx: "auto" }} className="col-12 col-sm-6 col-md-4 col-lg-3">
      <CardMedia
        className="img-fluid"
        sx={{ height: 280, maxWidth: 240, mx: "auto" }}
        image="https://dcbookstore.com/uploads/product/images/93434237102978-WhatsApp-Image-2025-06-19-at-5.25.41-PM.jpeg"
        title="book"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="d-flex justify-content-center">
          MULBERRY - ENNODU
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }} className="d-flex justify-content-center">
          ₹500.00
        </Typography>
      </CardContent>
      <CardActions className="d-flex justify-content-center">
        <Button size="small">Add To Cart</Button>
      </CardActions>
    </Card>
       </div>
       <div className='row container-fluid d-flex justify-content-evenly'>
        <Card sx={{ maxWidth: 240, m: 2, mx: "auto" }} className="col-12 col-sm-6 col-md-4 col-lg-3">
      <CardMedia
        className="img-fluid"
        sx={{ height: 280, maxWidth: 240, mx: "auto" }}
        image="https://dcbookstore.com/uploads/product/images/8275912835753-ujjayi.JPG"
        title="book"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="d-flex justify-content-center">
         UJJAYINIYILE
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }} className="d-flex justify-content-center">
          ₹340.00
        </Typography>
      </CardContent>
      <CardActions className="d-flex justify-content-center">
        <Button size="small">Add To Cart</Button>
      </CardActions>
        </Card>
       <Card sx={{ maxWidth: 240, m: 2, mx: "auto" }} className="col-12 col-sm-6 col-md-4 col-lg-3">
      <CardMedia
        className="img-fluid"
        sx={{ height: 240, maxWidth: 240, mx: "auto" }}
        image="https://dcbookstore.com/uploads/product/images/69053225884068-PREMANAGARAM.jpg"
        title="book"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="d-flex justify-content-center">
     Prema -
     Nagaram
  
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }} className="d-flex justify-content-center">
          ₹890.00
        </Typography>
      </CardContent>
      <CardActions className="d-flex justify-content-center">
        <Button size="small">Add To Cart</Button>
      </CardActions>
    </Card>
      <Card sx={{ maxWidth: 240, m: 2, mx: "auto" }} className="col-12 col-sm-6 col-md-4 col-lg-3">
      <CardMedia
        className="img-fluid"
        sx={{ height: 280, maxWidth: 240, mx: "auto" }}
  image='https://dcbookstore.com/uploads/product/images/62831979338978-sundara.JPG'      title="book"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="d-flex justify-content-center">
        Sudarajeevitham
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }} className="d-flex justify-content-center">
          ₹190.00
        </Typography>
      </CardContent>
      <CardActions className="d-flex justify-content-center">
        <Button size="small">Add To Cart</Button>
      </CardActions>
    </Card>
      <Card sx={{ maxWidth: 240, m: 2, mx: "auto" }} className="col-12 col-sm-6 col-md-4 col-lg-3">
      <CardMedia
        className="img-fluid"
        sx={{ height: 280, maxWidth: 240, mx: "auto" }}
        image="https://5.imimg.com/data5/SELLER/Default/2024/9/451053603/BH/KA/SA/231929105/flipkart-images-7-png.png"
        title="book"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="d-flex justify-content-center">
          Atomic Habit
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }} className="d-flex justify-content-center">
          ₹450.00
        </Typography>
      </CardContent>
      <CardActions className="d-flex justify-content-center">
        <Button size="small">Add To Cart</Button>
      </CardActions>
    </Card>
       </div>
       <div className='btn btn-outline-light text-center my-4' style={{borderRadius:"40px", width:"200px",height:"50px" }}><h2> View All <FaArrowRight />
  </h2> </div>
  </div>
     </section>
    
{/* img section */}
<section className=' m-0 w-100' >
  <img src="https://dcbookstore.com/uploads/homeslider/images/4864107377154-Rush-Hour-Banner.jpg" alt=""  className="img-fluid w-100" />
  </section>


   <section>
  <h1 
    className="text-center mb-4"
  >
    BROWSE BY AUTHORS
  </h1>

  <div className="row container mx-auto justify-content-center">
    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center" style={{width:"140px",height:"140px"}}>
      <img src="https://dcbookstore.com/uploads/author/images/82014942448723-cv-balakrishnan..jpg" alt="author1" className="img-fluid " />
    </div>
    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center" style={{width:"140px",height:"140px"}}>
      <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRw4PEA0hrv-7V3j73zE9sjhv-7168wZpeWh-KKuoCAapG8p2BM" alt="author2" className="img-fluid " />
    </div>
    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center" style={{width:"140px",height:"140px"}}>
      <img src="https://keralainsider.com/wp-content/uploads/2020/07/pixlr_20200702184832776-799x1024.jpg" alt="author3" className="img-fluid " />
    </div>
    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center" style={{width:"140px",height:"140px"}}>
      <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRyLRQc7vJ_dqN23WTwd7SQ3T6M_w_C2HbYZ-BDzr5zVN_PiP_q" alt="author4" className="img-fluid "/>
    </div>
    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center" style={{width:"140px",height:"140px"}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Vijayan.jpg" alt="author5" className="img-fluid " />
    </div>
    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center" style={{width:"140px",height:"140px"}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Sugathakumari.jpg" alt="author6" className="img-fluid " />
    </div>
  </div>
   {/* secod row */}
    <div className="row container mx-auto justify-content-center">
    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center" style={{width:"140px",height:"140px"}}>
      <img src="https://dcbookstore.com/uploads/author/images/43663833507128-arundhati-roy-rep1-1651742588.jpg" alt="author1" className="img-fluid " />
    </div>
    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center" style={{width:"140px",height:"140px"}}>
      <img src="https://dcbookstore.com/uploads/author/images/95288988167340-m-mukundan.jpg" alt="author2" className="img-fluid " />
    </div>
    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center" style={{width:"140px",height:"140px"}}>
      <img src="https://dcbookstore.com/uploads/author/images/42528547266911-KrMeera.jpg" alt="author3" className="img-fluid " />
    </div>
    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center" style={{width:"140px",height:"140px"}}>
      <img src="https://dcbookstore.com/uploads/author/images/99411929356387-padmarajan..jpg" alt="author4" className="img-fluid "/>
    </div>
    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center" style={{width:"140px",height:"140px"}}>
      <img src="https://dcbookstore.com/uploads/author/images/4503608526605-ns-madhavan.jpg" alt="author5" className="img-fluid " />
    </div>
    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center" style={{width:"140px",height:"140px"}}>
      <img src="https://dcbookstore.com/uploads/author/images/92133434021467-O.V.-Vijayan.jpg" alt="author6" className="img-fluid " />
    </div>
  </div>
  <div className="text-center my-4">
  <button 
    className="btn btn-outline-dark px-4 py-2" 
    style={{ borderRadius: "40px", minWidth: "200px", height: "50px" }}
  >
    <h5 className="mb-0">View More</h5>
  </button>
</div>
</section>


    </>
  )
}

export default Landing 