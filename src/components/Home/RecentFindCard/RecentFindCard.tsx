import React from "react";
import { Card } from "react-bootstrap";

const RecentFindCard = () => {
  const data = [
    {
      title: "Barbour Jesey Cascade Sports cap",
      imgUrl:
        "https://res.cloudinary.com/dzghsspe7/image/upload/v1649209431/seaadf_tcojbu.png",
      price: 120,
    },
    {
      title: "Barbour Jesey Cascade Sports cap",
      imgUrl:
        "https://res.cloudinary.com/dzghsspe7/image/upload/v1649209431/seaadf_tcojbu.png",
      price: 120,
    },
    {
      title: "Barbour Jesey Cascade Sports cap",
      imgUrl:
        "https://res.cloudinary.com/dzghsspe7/image/upload/v1649209431/seaadf_tcojbu.png",
      price: 120,
    },
    {
      title: "Barbour Jesey Cascade Sports cap",
      imgUrl:
        "https://res.cloudinary.com/dzghsspe7/image/upload/v1649209431/seaadf_tcojbu.png",
      price: 120,
    },
    {
      title: "Barbour Jesey Cascade Sports cap",
      imgUrl:
        "https://res.cloudinary.com/dzghsspe7/image/upload/v1649209431/seaadf_tcojbu.png",
      price: 120,
    },
    {
      title: "Barbour Jesey Cascade Sports cap",
      imgUrl:
        "https://res.cloudinary.com/dzghsspe7/image/upload/v1649209431/seaadf_tcojbu.png",
      price: 120,
    },
    {
      title: "Barbour Jesey Cascade Sports cap",
      imgUrl:
        "https://res.cloudinary.com/dzghsspe7/image/upload/v1649209431/seaadf_tcojbu.png",
      price: 120,
    },
    {
      title: "Barbour Jesey Cascade Sports cap",
      imgUrl:
        "https://res.cloudinary.com/dzghsspe7/image/upload/v1649209431/seaadf_tcojbu.png",
      price: 120,
    }
  ];
  return (
    <div className="container pb-5 mb-5">
      <h4 className="py-2" style={{ fontFamily: "inherit" }}>
        Recent Finds:
      </h4>
      <div className=" row">
        {data.map(({ imgUrl, title, price }) => (
          <div className="col-md-4 col-sm-6 col-xs-12 mb-3 col-lg-3">
            <Card style={{borderRadius:'10px'}}>
              <Card.Img variant="top" src={imgUrl}  style={{borderTopLeftRadius: "10px",borderTopRightRadius: "10px"}}/>

              <div className="p-2">
                <p style={{fontWeight:600}}>{title}</p>
                <hr />
                <div className="footer d-flex gap-3 align-items-center">
                  <p style={{color:'#40cbd9'}}>₹ {price}</p>
                  <p>
                    <a href="!#" className="text-danger">Website</a>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentFindCard;
