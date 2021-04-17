import React from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import "./styles.scss";

export default function Upload(props) {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="upload">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "unset" } : null}
              onClick={onImageUpload}
              {...dragProps}
              className="upload__btn"
            >
              {props.title}
            </button>
            &nbsp;
            <div className="image-item__wrapper">
            {imageList.map((image, index) => (
              <div key={index} className={index >= 1 ? "image-item image-item--2" : "image-item"}>
                <img src={image.data_url} alt="" className="image-item__img"/>
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)} className="image-item__btn">Update</button>
                  <button onClick={() => onImageRemove(index)} className="image-item__btn">Remove</button>
                </div>
              </div>
            ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
