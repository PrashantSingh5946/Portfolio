import React from 'react';
import "./style.css"

export default function work() {
  return <div>
         
    <section id="work" className="">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">
                Works
              </h3>
              <p className="subtitle-a">
                Few of my Works..
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="work-box">
              <a href="/trello" data-gallery="portfolioGallery" className="portfolio-lightbox">
                <div className="work-img">
                  <img src="assets/img/trello.png" alt="Trello Clone" className="img-fluid"/>
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Trello Clone</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Design</span> / <span className="w-date">20 Jan. 2022</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="#"> <span className="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="/food" data-gallery="portfolioGallery" className="portfolio-lightbox">
                <div className="work-img">
                  <img src="assets/img/food.png" alt="Food Order app" className="img-fluid"/>
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Food Order App</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Design</span> / <span className="w-date">31 May 2021</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="/bigsur" data-gallery="portfolioGallery" className="portfolio-lightbox">
                <div className="work-img">
                  <img src="assets/img/bigsur.png" alt="" className="img-fluid"/>
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Big Sur</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="/bigsur"> <span className="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  </div>;
}
