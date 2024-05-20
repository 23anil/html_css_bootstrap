import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function SlideShow() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1.06,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div class="container">
      <div class="row">
        <div class="col mt-3" >
          <div className="slider-container" >
            <Slider {...settings} style={{height:"50%"}} className="mb-0">
              <div className="h-75 w-100" >
                <img
                  src="https://media.istockphoto.com/id/1385520487/photo/business-man-holding-digital-network.jpg?s=612x612&w=0&k=20&c=sIvS12dvnAEJdelN6ZZDCdzJ17yXGpOf9L6n2cNE8Hw="
                  alt="image01"
                  height={"100%"} width={"100%"}
                />
              </div>
              <div className="h-100 w-100" >
                <img
                  src="https://media.istockphoto.com/id/1488972759/photo/social-internet-network-technology-digital-software-development.jpg?s=612x612&w=0&k=20&c=nT4SZfj7SzfcBV82SIry9s2Xa3-QmNNfjAKg2z4Qr0s="
                  alt="image02"
                  height={"100%"} width={"100%"}
                />
              </div>
              <div className="h-100 w-100" >
                <img
                  src="https://media.istockphoto.com/id/1996831167/photo/engineer-programmer-coding-on-laptop-software-development-and-data-management-data-science.jpg?s=612x612&w=0&k=20&c=JlcRJbDxa3DnMjGySD-VweJSoWtsQ5TAT5BuRHTbUqU="
                  alt="image03"
                  height={"100%"} width={"100%"}
                />
              </div>

              <div className="h-100 w-100" >
                <img
                  src="https://media.istockphoto.com/id/1432973671/photo/the-illustrated-man-is-climbing-an-incline.jpg?s=612x612&w=0&k=20&c=PMeqFp_pgKV8yepibHxH0X8WpsGjfvO0_GAbnoq8nm0="
                  alt="image04"
                  height={"100%"} width={"100%"}
                />
              </div>

              <div className="h-100 w-100" >
                <img
                  src="https://media.istockphoto.com/id/1274394073/photo/machine-learning-with-data-technology-businessman-touching-the-brain-of-artificial.jpg?s=612x612&w=0&k=20&c=nvM4aLMLoFzAKiBbqBi9OoDG9ZsIL_tQAsqfnQdjWaE="
                  alt="image05"
                  height={"100%"} width={"100%"}
                />
              </div>
              <div className="h-100 w-100" >
                <img
                  src="https://media.istockphoto.com/id/1659312858/photo/concept-of-artificial-intelligence-ai-robot-brain-idea-development-think-futuristic.jpg?s=612x612&w=0&k=20&c=6rfu7juqNs7ap7tdCdBZgih-mqr9x4yqmEEEYZKUWII="
                  alt="image06"
                  height={"100%"} width={"100%"}
                />
              </div>
             
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideShow;
