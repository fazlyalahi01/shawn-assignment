import useEmblaCarousel from 'embla-carousel-react'
import "../styles/embla.css"

import { testimonialData } from '../data/testimonialData'
import SectionContainer from './Container/SectionContainer'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'


function Testimonaials1() {
    const OPTIONS = { align: 'start' }
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)


    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <div className="bg-gradient-to-b from-light to-white py-10 md:pt-20" id="testimonaials">
            <SectionContainer>
                <div className="flex justify-center items-center mb-4">

                </div>
                <div className="flex justify-center mb-4">
                    <h1 className='section_title font-sans'>
                        What Our Clients Say About Us
                    </h1>
                </div>
                <section className="embla_3slides">
                    <div className="embla__viewport -mb-6" ref={emblaRef}>
                        <div className="embla__container py-6">
                            {testimonialData.map((testimonial) => (
                                <div className="embla__slide bg-white mx-2 shadow-custom-lg rounded-md p-4 shadow border border-gray-100" key={testimonial.id}>
                                    <div className="relative">
                                        <img className="absolute top-0 left-0 h-12 pt-4" src="../../public/images/testimonial/testimonial_quote.png" alt="testimonial quote" />
                                        <p className="description_bold font-urbanist pt-16">
                                            {testimonial.review}
                                        </p>
                                        <div className="flex items-end gap-2">
                                            <img className='h-12' src={testimonial.image} alt="user avatar" />
                                            <div>
                                                <h1 className="text-base text-title mt-4 font-bold">{testimonial.name}</h1>
                                                <p className="description_lite font-urbanist mb-2">
                                                    {testimonial.designation}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="embla__controls ">
                        <div className="embla__buttons">
                            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                        </div>

                    </div>
                </section>
            </SectionContainer>
        </div>
    )
}

export default Testimonaials1
