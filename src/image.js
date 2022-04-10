import React, { Component } from "react";
import "./Logo.css";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

// export const imgContext = React.createContext();
export class Logo extends Component {
  imageHandler = (e, props) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        // this.setState({profileImg: reader.result})
        this.props.setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { image } = this.props;
    return (
      <div className="page">
        <div className="containers">
          {/* <h1 className="heading">Add your Image</h1> */}
          <div className="img-holder">
            <img src={image} alt="" id="img" className="img" />
            <div className="label">
              <label className="image-upload" htmlFor="input">
                {/* <i className="material-icons">add_photo_alternate</i> */}
                <AddPhotoAlternateIcon />
                YourPhoto
              </label>
            </div>
          </div>
          <div className="digi-para">
            <h5>Upload your Logo</h5>
            <p>
              {" "}
              The File should be less than 1MB and <br />
              format can be .jpeg, .PNG
            </p>
          </div>
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={this.imageHandler}
          />

          <img
            className="img-1"
            src="https://st2.depositphotos.com/1007566/11938/v/950/depositphotos_119380326-stock-illustration-university-building-education-construction-icon.jpg"
          />
        </div>
      </div>
    );
  }
}

export default Logo;
