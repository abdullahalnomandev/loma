import React from "react";
import { Card } from "react-bootstrap";

const SecondHandCard = () => {
  const data = [
    {
      title: "compare across multiple sites",
      imgUrl:
        "https://res.cloudinary.com/dzghsspe7/image/upload/v1649211685/Frame_145_2_etmli4.png",
      details: "One click and see every listing of that item on the internet",
    },
    {
      title: "compare across multiple sites",
      imgUrl:
        "https://res.cloudinary.com/dzghsspe7/image/upload/v1649211702/Frame_145_warozu.png",
      details: "One click and see every listing of that item on the internet",
    },
    {
      title: "compare across multiple sites",
      imgUrl:
        "https://res.cloudinary.com/dzghsspe7/image/upload/v1649211685/Frame_145_2_etmli4.png",
      details: "One click and see every listing of that item on the internet",
    },
  ];
  return (
    <div className="container py-5" style={{background:'#FFFBF9'}}>
      <h1 style={{fontFamily:'fantasy',color:'black'}} className='text-center py-3'>START YOUR SECONDHAND SEARCH ON LOMA</h1>
      <div className=" row">
        {data.map(({ imgUrl, title, details }) => (
          <div className="col-md-4 mb-4">
            <Card style={{ borderRadius: "10px" ,borderBottom:'2px solid black',cursor:'pointer'}}>
              <Card.Img
                variant="top"
                src={imgUrl}
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />

              <div className="p-2">
                <h4 style={{ fontFamily:'fantasy' }}>{title}</h4>
                <p>{details}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondHandCard;
