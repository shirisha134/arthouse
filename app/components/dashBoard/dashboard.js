import React from 'react';
import Slider from 'react-slick';

const images=[
"../images/1.jpeg",
"../images/2.jpeg",
"../images/3.jpeg"

];

export default class Dashboard extends React.Component{
    render(){
        var settings={
            dots: false,
            autoplay: true,
            speed: 300,
            arrows : true,
            dots:true,
        };
        var urls = images.map(function(imgUrl, key) {
            return <div key={key}><img src={imgUrl} style={{width:"1200px",height:"300px" }}/></div>
        });
        return (
        <Slider {...settings}>
            {urls}
        </Slider>
        );
    }
}