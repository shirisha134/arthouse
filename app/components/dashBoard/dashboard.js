import React from 'react';
import Slider from 'react-slick';

const images=[
"../../assets/images/300.jpg",
"../../assets/images/300(1).jpg"
];

export default class Dashboard extends React.Component{
    render(){
        var settings={
            dots: false,
            autoplay: true,
            speed: 300,
            arrows : true
        };
        var urls = images.map(function(imgUrl, key) {
            return <div key={key}><img src={imgUrl} style={{width:"1200px"}}/></div>
        });
        return (
        <Slider {...settings}>
            {urls}
        </Slider>
        );
    }
}