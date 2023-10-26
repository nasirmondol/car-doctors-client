import person from '../../../../assets/images/about_us/person.jpg'
import parts from '../../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen mt-20 mb-20">
            <div className="hero-content gap-15 flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="lg:w-full lg:mr-10 rounded-lg shadow-2xl" />
                    <img src={parts} className="lg:visible invisible absolute border-white border-8 -bottom-20 -right-10 w-1/2 rounded-lg shadow-2xl " />
                </div>
                <div className='lg:w-1/2 lg:px-10'>
                    <h3 className='text-2xl font-bold text-[#FF3811] mb-5'>About us</h3>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experienc <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. </p>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. </p>
                    <button className="btn btn-primary bg-[#FF3811] text-white border-0">Get More Inof</button>
                </div>
            </div>
        </div>
    );
};

export default About;