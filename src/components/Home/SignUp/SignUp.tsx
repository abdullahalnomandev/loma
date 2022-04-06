import React from "react";

const style = {
  backgroundColor: "rgb(97, 228, 197)",
  border: "1px soli black",
  width: " 158px",
  height: "48px",
  borderRadius: " 10px",
  fontWeight: 900,

  // backgroundColor:'#61E4C5',
};

const SignUp = () => {
  return (
    <div className=" text-center py-5 mt-5  " style={{ background: "#E7F8FC" }}>
      <div>
        <h1 className="pt-5" style={{ fontSize: "60px", fontFamily: "fantasy" }}>
          GET THE FULL LOMA EXPERIENCE
        </h1>
        <button style={style} className="my-5 ">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
