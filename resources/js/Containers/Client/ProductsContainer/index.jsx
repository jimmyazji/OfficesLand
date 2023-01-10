import { Link } from "@inertiajs/inertia-react";
import { BsArrowRightShort } from 'react-icons/bs'
import Slider from "@/Components/Slider";

export default function ProdcutsContainer() {
    const DUMMY_DATA = [
        {
            id: '1',
            imageURL: "https://picsum.photos/250/350?random=1",
        },
        {
            id: '2',
            imageURL: "https://picsum.photos/250/350?random=2",
        },
        {
            id: '3',
            imageURL: "https://picsum.photos/250/350?random=3",
        },
        {
            id: '4',
            imageURL: "https://picsum.photos/250/350?random=4",
        },
        {
            id: '5',
            imageURL: "https://picsum.photos/250/350?random=5",
        },
        {
            id: '6',
            imageURL: "https://picsum.photos/250/350?random=6",
        },
    ]

    return (
        <section id='products' className='bg-majorBackground py-12'>
            <div className='relative container w-full h-full mx-auto flex flex-col lg:flex-row justify-between lg:items-center'>
                <div className="flex flex-col items-baseline lg:h-64 justify-center">
                    <h2 className="font-bold text-3xl text-accent max-w-xs mb-2 lg:mb-6">New in Store Now</h2>
                    <p className="text-accent max-w-xs mb-6 lg:mb-8">Get the latest item with promo prices</p>
                    <div className="hidden lg:flex items-center text-primary w-full" href="/products">
                        <Link className="leading-none hover:border-b border-primary lg:items-center font-medium transition-all">
                            See more
                        </Link>
                        <BsArrowRightShort className="text-2xl" />
                    </div>
                </div>
                <div className="lg:absolute top-0 ltr:right-6 rtl:left-6">
                    <Slider className="h-72 lg:max-w-2xl xl:max-w-4xl"
                        DUMMY_DATA={DUMMY_DATA}
                        pagination={{ clickable: true }}
                        imageHight="h-[85%]"
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 16,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 18,
                            },
                            1280: {
                                slidesPerView: 5,
                                spaceBetween: 18,
                            },
                        }}
                    >
                        <div className="absolute top-2 w-full">
                            <p className="w-14 text-center mx-auto bg-accent text-minorBackground rounded-full">title</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}
