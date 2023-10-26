import banner1 from '../../../../assets/images/banner/1.jpg';
import banner2 from '../../../../assets/images/banner/2.jpg';
import banner3 from '../../../../assets/images/banner/3.jpg';
import banner4 from '../../../../assets/images/banner/4.jpg';
// import banner5 from '../../../../assets/images/banner/5.jpg';
// import banner6 from '../../../../assets/images/banner/6.jpg';
const Banner = () => {
    return (
        <div className="carousel w-full h-[500px] rounded-md">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full" />
                <div className="absolute flex items-center h-full top-0  left-0 space-y-7 lg:pl-12  space-x-5  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ] ">
                    <div className='space-y-5 lg:pl-7 pl-2 lg:w-1/3'>
                        <h1 className='text-4xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4'>
                            <button className="btn btn-error">Discover MOre</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-5">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute flex items-center h-full top-0  left-0 space-y-7 lg:pl-12  space-x-5  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ] ">
                    <div className='space-y-5 lg:pl-7 pl-2 lg:w-1/3'>
                        <h1 className='text-4xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4'>
                            <button className="btn btn-error">Discover MOre</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-5">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className="absolute flex items-center h-full top-0  left-0 space-y-7 lg:pl-12  space-x-5  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ] ">
                    <div className='space-y-5 lg:pl-7 pl-2 lg:w-1/3'>
                        <h1 className='text-4xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4'>
                            <button className="btn btn-error">Discover MOre</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-5">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full" />
                <div className="absolute flex items-center h-full top-0  left-0 space-y-7 lg:pl-12  space-x-5  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ] ">
                    <div className='space-y-5 lg:pl-7 pl-2 lg:w-1/3'>
                        <h1 className='text-4xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4'>
                            <button className="btn btn-error">Discover MOre</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-5">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;