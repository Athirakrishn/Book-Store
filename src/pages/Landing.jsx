import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
     <section className='books my-5 '>
    
     <div className='row container-fluid d-flex justify-content-evenly'>
         <Card sx={{ maxWidth: 280  }} className='col-3 mx-3'>
        <CardMedia
          sx={{ height: 280 , width: 240}}
          image="https://5.imimg.com/data5/SELLER/Default/2024/9/451053603/BH/KA/SA/231929105/flipkart-images-7-png.png"
          title="book"
        />
        <CardContent className=''>
          <Typography gutterBottom variant="h5" component="div" className='d-flex justify-content-center'>
            Atomic Habbit
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} className='d-flex justify-content-center'>
            ₹450.00
          </Typography>
        </CardContent>
        <CardActions className='d-flex justify-content-center'>
          <Button size="small" className='center'>Add TO Cart</Button>
         
        </CardActions>
      </Card>
           <Card sx={{ maxWidth: 280  }} className='col-3 mx-3'>
        <CardMedia
          sx={{ height: 280 , width: 240}}
          image="https://5.imimg.com/data5/SELLER/Default/2024/9/451053603/BH/KA/SA/231929105/flipkart-images-7-png.png"
          title="book"
        />
        <CardContent className=''>
          <Typography gutterBottom variant="h5" component="div" className='d-flex justify-content-center'>
            Atomic Habbit
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} className='d-flex justify-content-center'>
            ₹450.00
          </Typography>
        </CardContent>
        <CardActions className='d-flex justify-content-center'>
          <Button size="small" className='center'>Add TO Cart</Button>
         
        </CardActions>
      </Card>
        <Card sx={{ maxWidth: 280  }} className='col-3 mx-3'>
        <CardMedia
          sx={{ height: 280 , width: 240}}
          image="https://5.imimg.com/data5/SELLER/Default/2024/9/451053603/BH/KA/SA/231929105/flipkart-images-7-png.png"
          title="book"
        />
        <CardContent className=''>
          <Typography gutterBottom variant="h5" component="div" className='d-flex justify-content-center'>
            Atomic Habbit
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} className='d-flex justify-content-center'>
            ₹450.00
          </Typography>
        </CardContent>
        <CardActions className='d-flex justify-content-center'>
          <Button size="small" className='center'>Add TO Cart</Button>
         
        </CardActions>
      </Card>
        <Card sx={{ maxWidth: 280  }} className='col-3 mx-3'>
        <CardMedia
          sx={{ height: 280 , width: 240}}
          image="https://5.imimg.com/data5/SELLER/Default/2024/9/451053603/BH/KA/SA/231929105/flipkart-images-7-png.png"
          title="book"
        />
        <CardContent className=''>
          <Typography gutterBottom variant="h5" component="div" className='d-flex justify-content-center'>
            Atomic Habbit
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} className='d-flex justify-content-center'>
            ₹450.00
          </Typography>
        </CardContent>
        <CardActions className='d-flex justify-content-center'>
          <Button size="small" className='center'>Add TO Cart</Button>
         
        </CardActions>
      </Card>

     </div>
     </section>
    </>
  )
}

export default Landing 