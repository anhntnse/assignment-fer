import React from 'react';
import './ImagesSlicer.scss';

function ImagesSlicer() {
    return (
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
                    <img src='https://cdn2.cellphones.com.vn/insecure/rs:fill:300:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-titan-sa-mac_3.png' />
                </button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2">
                    <img src='https://cdn2.cellphones.com.vn/insecure/rs:fill:300:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-titan-sa-mac_3.png' />
                </button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3">
                    <img src='https://cdn2.cellphones.com.vn/insecure/rs:fill:300:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-titan-sa-mac_3.png' />
                </button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3">
                    <img src='https://cdn2.cellphones.com.vn/insecure/rs:fill:300:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-titan-sa-mac_3.png' />
                </button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src='https://cdn2.cellphones.com.vn/insecure/rs:fill:300:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-titan-sa-mac_3.png' class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src='https://cdn2.cellphones.com.vn/insecure/rs:fill:300:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-titan-sa-mac_3.png' class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src='https://cdn2.cellphones.com.vn/insecure/rs:fill:300:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-titan-sa-mac_3.png' class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default ImagesSlicer;