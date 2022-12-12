import BGPH1 from '../../../assets/images/backgrounds/page-header-bg-1-1.jpg'
import { Link } from 'react-router-dom'
import React from 'react'

const Service = () => {
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
                    <li><span>Services</span></li>
                </ul>
                <h2>Our Services</h2>
            </div>
        </section>
        <section className="service-grid pt-120 pb-140">
            <div className="container">
                <div className="row row-gutter-y-50">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card">
                            <div className="service-card__image">
                                <img src="assets/images/services/services-1-1.png" alt="Auto Car Loan" />
                                <Link to="/servicedetails"></Link>
                            </div>
                            <div className="service-card__content">
                                <div className="service-card__content__inner">
                                    <div className="service-card__icon">
                                        <i className="icon-car"></i>
                                    </div>
                                    <h3 className="service-card__title">
                                        <Link to="/servicedetails">Auto Car Loan</Link>
                                    </h3>
                                    <p className="service-card__text">Car Loan provide low interest many variations of passages of lorem ipsum have
                                        some.</p>
                                    <Link to="/servicedetails" className="service-card__link">
                                        <i className="fa fa-angle-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card">
                            <div className="service-card__image">
                                <img src="assets/images/services/services-1-2.png" alt="Wedding Loan" />
                                <Link to="/servicedetails"></Link>
                            </div>
                            <div className="service-card__content">
                                <div className="service-card__content__inner">
                                    <div className="service-card__icon">
                                        <i className="icon-diamond"></i>
                                    </div>
                                    <h3 className="service-card__title">
                                        <Link to="/servicedetails">Wedding Loan</Link>
                                    </h3>
                                    <p className="service-card__text">Car Loan provide low interest many variations of passages of lorem ipsum have
                                        some.</p>
                                    <Link to="/servicedetails" className="service-card__link">
                                        <i className="fa fa-angle-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card">
                            <div className="service-card__image">
                                <img src="assets/images/services/services-1-3.png" alt="Property Loan" />
                                <Link to="/servicedetails"></Link>
                            </div>
                            <div className="service-card__content">
                                <div className="service-card__content__inner">
                                    <div className="service-card__icon">
                                        <i className="icon-house"></i>
                                    </div>
                                    <h3 className="service-card__title">
                                        <Link to="/servicedetails">Property Loan</Link>
                                    </h3>
                                    <p className="service-card__text">Car Loan provide low interest many variations of passages of lorem ipsum have
                                        some.</p>
                                    <Link to="/servicedetails" className="service-card__link">
                                        <i className="fa fa-angle-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card">
                            <div className="service-card__image">
                                <img src="assets/images/services/services-1-4.png" alt="Business Loan" />
                                <Link to="/servicedetails"></Link>
                            </div>
                            <div className="service-card__content">
                                <div className="service-card__content__inner">
                                    <div className="service-card__icon">
                                        <i className="icon-briefcase"></i>
                                    </div>
                                    <h3 className="service-card__title">
                                        <Link to="/servicedetails">Business Loan</Link>
                                    </h3>
                                    <p className="service-card__text">Car Loan provide low interest many variations of passages of lorem ipsum have
                                        some.</p>
                                    <Link to="/servicedetails" className="service-card__link">
                                        <i className="fa fa-angle-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card">
                            <div className="service-card__image">
                                <img src="assets/images/services/services-1-5.png" alt="Education Loan" />
                                <Link to="/servicedetails"></Link>
                            </div>
                            <div className="service-card__content">
                                <div className="service-card__content__inner">
                                    <div className="service-card__icon">
                                        <i className="icon-book"></i>
                                    </div>
                                    <h3 className="service-card__title">
                                        <Link to="/servicedetails">Education Loan</Link>
                                    </h3>
                                    <p className="service-card__text">Car Loan provide low interest many variations of passages of lorem ipsum have
                                        some.</p>
                                    <Link to="/servicedetails" className="service-card__link">
                                        <i className="fa fa-angle-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card">
                            <div className="service-card__image">
                                <img src="assets/images/services/services-1-6.png" alt="Personal Loan" />
                                <Link to="/servicedetails"></Link>
                            </div>
                            <div className="service-card__content">
                                <div className="service-card__content__inner">
                                    <div className="service-card__icon">
                                        <i className="icon-user"></i>
                                    </div>
                                    <h3 className="service-card__title">
                                        <Link to="/servicedetails">Personal Loan</Link>
                                    </h3>
                                    <p className="service-card__text">Car Loan provide low interest many variations of passages of lorem ipsum have
                                        some.</p>
                                    <Link to="/servicedetails" className="service-card__link">
                                        <i className="fa fa-angle-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link>
    </>
  )
}

export default Service
