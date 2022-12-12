import BGPH1 from '../../../assets/images/backgrounds/page-header-bg-1-1.jpg'
import { Link } from 'react-router-dom'
import React from 'react'

const NewsMain = () => {
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
                    <li><span>Blog</span></li>
                </ul>                                         
                <h2>Blog Grid</h2>
            </div>
        </section>

        <section className="blog-grid pt-120 pb-120">
            <div className="container">
                <div className="row row-gutter-y-30">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="blog-card">
                            <div className="blog-card__image">
                                <div className="blog-card__date"><span>05</span> Mar</div>
                                <img src="assets/images/blog/blog-1-1.png" alt="Which growth strategies you should adopt" />
                                <Link to="/newsdetails"></Link>
                            </div>
                            <div className="blog-card__content">
                                <div className="blog-card__meta">
                                    <Link to="/newsdetails"><i className="far fa-user-circle"></i> by Admin</Link>
                                    <Link to="/newsdetails"><i className="far fa-comments"></i> 2 Comments</Link>
                                </div>
                                <h3 className="blog-card__title"><Link to="/newsdetails">Which growth strategies you should adopt</Link></h3>
                                <p className="blog-card__text">Duis aute irure dolor lipsum simply free text the local markets.</p>
                                <Link to="/newsdetails" className="blog-card__link">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="blog-card">
                            <div className="blog-card__image">
                                <div className="blog-card__date"><span>05</span> Mar</div>
                                <img src="assets/images/blog/blog-1-2.png" alt="Which growth strategies you should adopt" />
                                <Link to="/newsdetails"></Link>
                            </div>
                            <div className="blog-card__content">
                                <div className="blog-card__meta">
                                    <Link to="/newsdetails"><i className="far fa-user-circle"></i> by Admin</Link>
                                    <Link to="/newsdetails"><i className="far fa-comments"></i> 2 Comments</Link>
                                </div>
                                <h3 className="blog-card__title"><Link to="/newsdetails">Which growth strategies you should adopt</Link></h3>
                                <p className="blog-card__text">Duis aute irure dolor lipsum simply free text the local markets.</p>
                                <Link to="/newsdetails" className="blog-card__link">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="blog-card">
                            <div className="blog-card__image">
                                <div className="blog-card__date"><span>05</span> Mar</div>
                                <img src="assets/images/blog/blog-1-3.png" alt="Which growth strategies you should adopt" />
                                <Link to="/newsdetails"></Link>
                            </div>
                            <div className="blog-card__content">
                                <div className="blog-card__meta">
                                    <Link to="/newsdetails"><i className="far fa-user-circle"></i> by Admin</Link>
                                    <Link to="/newsdetails"><i className="far fa-comments"></i> 2 Comments</Link>
                                </div>
                                <h3 className="blog-card__title"><Link to="/newsdetails">Which growth strategies you should adopt</Link></h3>
                                <p className="blog-card__text">Duis aute irure dolor lipsum simply free text the local markets.</p>
                                <Link to="/newsdetails" className="blog-card__link">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="blog-card">
                            <div className="blog-card__image">
                                <div className="blog-card__date"><span>05</span> Mar</div>
                                <img src="assets/images/blog/blog-1-4.png" alt="Which growth strategies you should adopt" />
                                <Link to="/newsdetails"></Link>
                            </div>
                            <div className="blog-card__content">
                                <div className="blog-card__meta">
                                    <Link to="/newsdetails"><i className="far fa-user-circle"></i> by Admin</Link>
                                    <Link to="/newsdetails"><i className="far fa-comments"></i> 2 Comments</Link>
                                </div>
                                <h3 className="blog-card__title"><Link to="/newsdetails">Which growth strategies you should adopt</Link></h3>
                                <p className="blog-card__text">Duis aute irure dolor lipsum simply free text the local markets.</p>
                                <Link to="/newsdetails" className="blog-card__link">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="blog-card">
                            <div className="blog-card__image">
                                <div className="blog-card__date"><span>05</span> Mar</div>
                                <img src="assets/images/blog/blog-1-5.png" alt="Which growth strategies you should adopt" />
                                <Link to="/newsdetails"></Link>
                            </div>
                            <div className="blog-card__content">
                                <div className="blog-card__meta">
                                    <Link to="/newsdetails"><i className="far fa-user-circle"></i> by Admin</Link>
                                    <Link to="/newsdetails"><i className="far fa-comments"></i> 2 Comments</Link>
                                </div>
                                <h3 className="blog-card__title"><Link to="/newsdetails">Which growth strategies you should adopt</Link></h3>
                                <p className="blog-card__text">Duis aute irure dolor lipsum simply free text the local markets.</p>
                                <Link to="/newsdetails" className="blog-card__link">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="blog-card">
                            <div className="blog-card__image">
                                <div className="blog-card__date"><span>05</span> Mar</div>
                                <img src="assets/images/blog/blog-1-6.png" alt="Which growth strategies you should adopt" />
                                <Link to="/newsdetails"></Link>
                            </div>
                            <div className="blog-card__content">
                                <div className="blog-card__meta">
                                    <Link to="/newsdetails"><i className="far fa-user-circle"></i> by Admin</Link>
                                    <Link to="/newsdetails"><i className="far fa-comments"></i> 2 Comments</Link>
                                </div>
                                <h3 className="blog-card__title"><Link to="/newsdetails">Which growth strategies you should adopt</Link></h3>
                                <p className="blog-card__text">Duis aute irure dolor lipsum simply free text the local markets.</p>
                                <Link to="/newsdetails" className="blog-card__link">Read More</Link>
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

export default NewsMain