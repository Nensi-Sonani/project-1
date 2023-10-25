import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';


const SinglePage = () => {
    const [data, setData] = useState("")
    const { user } = useSelector((store) => store.reducer)
    console.log(user);
    const { id } = useParams()
    console.log(id);
    useEffect(() => {
        axios.get(`https://tesla-api.onrender.com/productpage-1/${id}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    const handleClick = () => {
        let obj = {
            ...data,
            count: 1,
            userID: user.id
        }
        console.log(obj);
        axios.post("http://localhost:9999/cart", obj)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className='main-single d-flex w-100 container'>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><div className='singlepage-image mx-5'>
                    <img src={data.image} alt={data.title} width={'100%'} />
                </div></SwiperSlide>
                <SwiperSlide>
                    <div className='singlepage-image mx-5'>
                        <img src={data.image1} alt={data.title} width={'100%'} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='singlepage-image mx-5'>
                        <img src={data.image2} alt={data.title} width={'100%'} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='singlepage-image mx-5'>
                        <img src={data.image3} alt={data.title} width={'100%'} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='singlepage-image mx-5'>
                        <img src={data.image4} alt={data.title} width={'100%'} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='singlepage-image mx-5'>
                        <img src={data.image5} alt={data.title} width={'100%'} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='singlepage-image mx-5'>
                        <img src={data.image6} alt={data.title} width={'100%'} />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='singlepage-texts'>
                <h2>{data.title}</h2>
                <p>{`$${data.price}`}</p>
                <h6 className='text-justify'>
                    <h5>Description</h5><p> {data.Description}</p></h6>
                <button onClick={handleClick} className='bg-primary border border-none text-white'>Add To Cart</button>
            </div>

        </div>
    )
}

export default SinglePage