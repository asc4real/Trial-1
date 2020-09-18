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
            <img style={{ maxWidth: '400px', maxHeight: '300px' }} src='https://scontent.frja1-1.fna.fbcdn.net/v/t1.0-9/119443202_2689440884630899_5462873735463640855_n.jpg?_nc_cat=108&_nc_sid=8bfeb9&_nc_ohc=JttaMAmAUVEAX_qKy-N&_nc_ht=scontent.frja1-1.fna&oh=cff07b1fd9df3fbd9752c11004a34f05&oe=5F88E9CE' />
          </div>
          <div>
            <img style={{ maxWidth: '400px', maxHeight: '300px' }} src='https://scontent.frja1-1.fna.fbcdn.net/v/t1.0-9/119438071_2689440934630894_1864643428185660904_n.jpg?_nc_cat=100&_nc_sid=8bfeb9&_nc_ohc=orNsA_TIGXUAX_xIxx7&_nc_ht=scontent.frja1-1.fna&oh=9bcf884dba579f6a08174e4c9a56c379&oe=5F8BDB4C' />
          </div>
          <div>
            <img style={{ maxWidth: '400px', maxHeight: '300px' }} src='https://scontent.frja1-1.fna.fbcdn.net/v/t1.0-9/119621978_2689440964630891_111252681990387992_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_ohc=LnWCVNpkFxcAX-UWZ9t&_nc_ht=scontent.frja1-1.fna&oh=365faaf49bef42e93895b35a06384fa7&oe=5F8C0743' />
          </div>
          <div>
            <img style={{ maxWidth: '400px', maxHeight: '300px' }} src='https://scontent.frja1-1.fna.fbcdn.net/v/t1.0-9/119528595_2689440871297567_7457070299950877393_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_ohc=_VkLMzWc6h0AX_LhrKD&_nc_oc=AQle1PzHDYINAU0vgEr17lpS-nIhTbtxRxx1j-F_oNU3LC2Np3DPowNxyorlgOX-Q1I&_nc_ht=scontent.frja1-1.fna&oh=9fee5309cc5b96a296df4001fb0bb685&oe=5F886EE6' />
          </div>
        </Slider>
      </div>
    );
  }