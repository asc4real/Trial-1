import React from 'react';
import Slider from "react-slick";

export default function PicPlayer() {
    
    const settings = {
        fade: true,
        dots: false,
      infinite: true,
      centerMode: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      centerPadding: 50
      };

    return (
        <div style={{ paddingTop:'38px' }}>
        <Slider {...settings} style={{ maxWidth: '400px', maxHeight: '300px' }}>
          <div>
            <img style={{ maxWidth: '400px', maxHeight: '300px' }} src='https://scontent.frja1-1.fna.fbcdn.net/v/t1.0-9/119604964_172347614472870_8855896629420420454_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=9pF4r8pRv4AAX84Sefy&_nc_ht=scontent.frja1-1.fna&oh=0bcf9aac0d3e6539f30b4e19f171790d&oe=5F863972' />
          </div>
          <div>
            <img style={{ maxWidth: '400px', maxHeight: '300px' }} src='https://scontent.frja1-1.fna.fbcdn.net/v/t1.0-9/119179591_172347607806204_8393668315636272082_o.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=f4RFoAfO7oEAX9LHDkH&_nc_ht=scontent.frja1-1.fna&oh=516d865779ac698ba8fed0d8d0d528b4&oe=5F883C9E' />
          </div>
          <div>
            <img style={{ maxWidth: '400px', maxHeight: '300px' }} src='https://scontent.frja1-1.fna.fbcdn.net/v/t1.0-9/119182496_172347601139538_6071772174696369417_o.jpg?_nc_cat=111&_nc_sid=8024bb&_nc_ohc=7ACsulSCetQAX9FL94K&_nc_ht=scontent.frja1-1.fna&oh=ee63c0b02d34b8ad5a47dd28d979090a&oe=5F8761D6' />
          </div>
          <div>
            <img style={{ maxWidth: '400px', maxHeight: '300px' }} src='https://scontent.frja1-1.fna.fbcdn.net/v/t1.0-9/119471331_172347664472865_8970185411929659979_o.jpg?_nc_cat=107&_nc_sid=8024bb&_nc_ohc=mpcJhRnu_KIAX8T9YXe&_nc_ht=scontent.frja1-1.fna&oh=0e7105c7a9842172d9659091efe14700&oe=5F86F8EE' />
          </div>
        </Slider>
      </div>
    );
  }