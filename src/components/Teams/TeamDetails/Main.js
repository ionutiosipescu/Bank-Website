import BGPH1 from '../../../assets/images/backgrounds/page-header-bg-1-1.jpg'
import { Link } from 'react-router-dom'
import React  from 'react'
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const TeamDetails = () => {


  return (
    <>
        <div className="stricky-header stricked-menu main-menu">
            <div className="sticky-header__content"></div>
        </div>
        <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: `url(${BGPH1})`}}></div>
            <div className="container">
                <ul className="thm-breadcrumb list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><span>Team</span></li>
                </ul>
                <h2>Team Details</h2>
            </div>
        </section>

        <section className="team-details pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="team-details__image wow fadeInUp" data-wow-duration="1500ms">
                            <img src="assets/images/team/team-d-1-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="team-details__content">
                            <div className="team-details__floated">jessica</div>
                            <div className="block-title text-left">
                                <p className="block-title__tagline">CEO & Co Founder</p>
                                <h2 className="block-title__title">Jessica Brown</h2>
                            </div>
                            <div className="team-details__social">
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-facebook"></i></Link>
                                <Link to="#"><i className="fab fa-pinterest"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                            <p className="team-details__highlight">Duis irure dolor lipsum is simply free text available.</p>
                            
                            <p className="team-details__text">Lorem ipsum dolor sit amet, con adipiscing elit tiam convallis elit id
                                impedie. Quisq commodo simply free ornare tortor. </p>
                            <p className="team-details__text">If you are going to use a passage of Lorem Ipsum, you need to be sure
                                there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="container">
            <hr className="block-separator" />
        </div>

        <section className="team-progress pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="block-title text-left">
                            <p className="block-title__tagline">About Company</p>
                            <h2 className="block-title__title">I serves with a focus on <br /> maximizing resource</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="team-progress__content">
                            <div className="team-progress__item">
                                <h4 className="team-progress__title">Consulting</h4>
                                <div className="team-progress__bar">
                                    <div className="team-progress__bar__inner count-bar" data-percent="67%" style={{width: '67%'}}>
                                        <div className="team-progress__bar__text count-text" >67%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="team-progress__item">
                                <h4 className="team-progress__title">Credit Card</h4>
                                <div className="team-progress__bar">
                                    <div className="team-progress__bar__inner count-bar" data-percent="46%" style={{width: '46%'}}>
                                        <div className="team-progress__bar__text count-text">46%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="team-progress__item">
                                <h4 className="team-progress__title">Personal Loan</h4>
                                <div className="team-progress__bar">
                                    <div className="team-progress__bar__inner count-bar" data-percent="28%" style={{width: '28%'}}>
                                        <div className="team-progress__bar__text count-text">28%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="client-carousel client-carousel--team-details">
            <div className="container">
            <Swiper
                    className="thm-swiper__slider swiper-container" 
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={5}
                    autoplay={{delay:5000}}
                    breakpoints= {{
                     "0": {
                         "spaceBetween": 10,
                         "slidesPerView": 2
                     },
                     "375": {
                         "spaceBetween": 10,
                         "slidesPerView": 2
                     },
                     "575": {
                         "spaceBetween": 10,
                         "slidesPerView": 3
                     },
                     "767": {
                         "spaceBetween": 10,
                         "slidesPerView": 4
                     },
                     "991": {
                         "spaceBetween": 15,
                         "slidesPerView": 5
                     },
                     "1199": {
                         "spaceBetween": 30,
                         "slidesPerView": 5
                     }
                    }} 
                >
                    <div className="swiper-wrapper">
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <img src="assets/images/resources/brand-2-1.png" alt="" />
                            </div>
                        </SwiperSlide>  
                        <SwiperSlide> 
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/resources/brand-2-1.png" alt="" />
                        </div>
                        </SwiperSlide>
                    </div>
        </Swiper>
            </div>
        </div>
        <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link>


    </>
  )
}

export default TeamDetails