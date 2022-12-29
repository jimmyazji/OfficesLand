import slideImage from '../../../assets/products/1.jpg'

export default function Hero({ children }) {
    return (
        <section className='bg-minorBackground w-full -mt-20'>
            {children}
        </section>
    )
}

Hero.Container = function HeroContainer({ children }) {
    return (
        <div className={`relative flex flex-col justify-center items-start md:h-[700px] h-96`}>
            {children}
        </div>
    )
}

Hero.Image = function HeroImage({ slide_id }) {
    return (
        <img className="absolute z-0 top-0 w-full h-full"
            src={slideImage}
            alt="" />
    )
}

Hero.Shadow = function HeroShadow() {
    return (
        <div className="absolute z-10 h-full w-full hero-shadow">
        </div>
    )
}