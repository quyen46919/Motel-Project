import { Button, makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import ImageUploading from "react-images-uploading";
import '../Upload/styles.scss';
import './styles.scss';


const useStyles = makeStyles((theme) => ({
    buttonStyles: {
        background: "#1379ff!important",
        height: "50px",
        padding: "0 2rem",
        marginBottom: "2rem",
        "& > *": {
            color: "white!important"
        }
    },
    disabledStyles: {
        "& span": {
            textDecoration: "line-through"
        }
    }
  }));

function Step4(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleBtnClick = () => {
        setOpen(!open);
    }
    const handleSubmit = (values) => {
        props.getStep4Values(imagesCollection);
        props.handleNext();
    }
    const handleBack = () => {
        props.handleBack();
    }

    const [imagesCollection, setImagesCollection] = useState({
      img1: '',
      img2: '',
      img3: '',
      img4: '',
      img5: '',
      img6: '',
    })
    const maxNumber = 1;

    const [images1, setImages1] = useState([]);
    const onChangeImage1 = (imageList) => {
      setImages1(imageList);
      setImagesCollection(imagesCollection => ({...imagesCollection, img1: imageList}));
      console.log(imagesCollection);
    };
    const [images2, setImages2] = useState([]);
    const onChangeImage2 = (imageList) => {
      setImages2(imageList);
      setImagesCollection(imagesCollection => ({...imagesCollection, img2: imageList}));
      console.log(imagesCollection);
    };
    const [images3, setImages3] = useState([]);
    const onChangeImage3 = (imageList) => {
      setImages3(imageList);
      setImagesCollection(imagesCollection => ({...imagesCollection, img3: imageList}));
      console.log(imagesCollection);
    };
    const [images4, setImages4] = useState([]);
    const onChangeImage4 = (imageList) => {
      setImages4(imageList);
      setImagesCollection(imagesCollection => ({...imagesCollection, img4: imageList}));
      console.log(imagesCollection);
    };
    const [images5, setImages5] = useState([]);
    const onChangeImage5 = (imageList) => {
      setImages5(imageList);
      setImagesCollection(imagesCollection => ({...imagesCollection, img5: imageList}));
      console.log(imagesCollection);
    };
    const [images6, setImages6] = useState([]);
    const onChangeImage6 = (imageList) => {
      setImages6(imageList);
      setImagesCollection(imagesCollection => ({...imagesCollection, img6: imageList}));
      console.log(imagesCollection);
    };
    
    return (

        <form className="step4">
            <p>Bạn phải tải lên ít nhất <span className="step4__span">1 ảnh về nhà trọ</span> và <span className="step4__span">2 ảnh về phòng trọ</span></p>
            {open ? (
                <div className="step4__block">
                    <div className="upload">
                    <ImageUploading
                        value={images1}
                        onChange={onChangeImage1}
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
                                Chèn ảnh phòng trọ
                            </button>
                            &nbsp;
                            <div className="image-item__wrapper">
                            {imageList.map((image, index) => (
                            <div key={index} className={index >= 1 ? "image-item image-item--2" : "image-item"}>
                                <img src={image.data_url} alt="" className="image-item__img"/>
                                <div className="image-item__btn-wrapper"
                                >
                                <motion.button 
                                    onClick={() => onImageUpdate(index)} 
                                    className="image-item__btn"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    Thay ảnh khác
                                </motion.button>
                                <motion.button 
                                    onClick={() => onImageRemove(index)} 
                                    className="image-item__btn"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    Bỏ ảnh này
                                </motion.button>
                                </div>
                            </div>
                            ))}
                            </div>
                        </div>
                        )}
                    </ImageUploading>
                </div>
                <div className="upload">
                    <ImageUploading
                        value={images2}
                        onChange={onChangeImage2}
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
                                Chèn ảnh phòng trọ
                            </button>
                            &nbsp;
                            <div className="image-item__wrapper">
                            {imageList.map((image, index) => (
                            <div key={index} className={index >= 1 ? "image-item image-item--2" : "image-item"}>
                                <img src={image.data_url} alt="" className="image-item__img"/>
                                <div className="image-item__btn-wrapper"
                                >
                                <motion.button 
                                    onClick={() => onImageUpdate(index)} 
                                    className="image-item__btn"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    Thay ảnh khác
                                </motion.button>
                                <motion.button 
                                    onClick={() => onImageRemove(index)} 
                                    className="image-item__btn"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    Bỏ ảnh này
                                </motion.button>
                                </div>
                            </div>
                            ))}
                            </div>
                        </div>
                        )}
                    </ImageUploading>
                </div>
                <div className="upload">
                    <ImageUploading
                        value={images3}
                        onChange={onChangeImage3}
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
                                Chèn ảnh phòng trọ
                            </button>
                            &nbsp;
                            <div className="image-item__wrapper">
                            {imageList.map((image, index) => (
                            <div key={index} className={index >= 1 ? "image-item image-item--2" : "image-item"}>
                                <img src={image.data_url} alt="" className="image-item__img"/>
                                <div className="image-item__btn-wrapper"
                                >
                                <motion.button 
                                    onClick={() => onImageUpdate(index)} 
                                    className="image-item__btn"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    Thay ảnh khác
                                </motion.button>
                                <motion.button 
                                    onClick={() => onImageRemove(index)} 
                                    className="image-item__btn"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    Bỏ ảnh này
                                </motion.button>
                                </div>
                            </div>
                            ))}
                            </div>
                        </div>
                        )}
                    </ImageUploading>
                </div>
                <div className="upload">
                    <ImageUploading
                        value={images4}
                        onChange={onChangeImage4}
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
                                Chèn ảnh phòng trọ
                            </button>
                            &nbsp;
                            <div className="image-item__wrapper">
                            {imageList.map((image, index) => (
                            <div key={index} className={index >= 1 ? "image-item image-item--2" : "image-item"}>
                                <img src={image.data_url} alt="" className="image-item__img"/>
                                <div className="image-item__btn-wrapper"
                                >
                                <motion.button 
                                    onClick={() => onImageUpdate(index)} 
                                    className="image-item__btn"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    Thay ảnh khác
                                </motion.button>
                                <motion.button 
                                    onClick={() => onImageRemove(index)} 
                                    className="image-item__btn"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    Bỏ ảnh này
                                </motion.button>
                                </div>
                            </div>
                            ))}
                            </div>
                        </div>
                        )}
                    </ImageUploading>
                </div>
                <div className="upload">
                    <ImageUploading
                        value={images5}
                        onChange={onChangeImage5}
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
                                Chèn ảnh phòng trọ
                            </button>
                            &nbsp;
                            <div className="image-item__wrapper">
                            {imageList.map((image, index) => (
                            <div key={index} className={index >= 1 ? "image-item image-item--2" : "image-item"}>
                                <img src={image.data_url} alt="" className="image-item__img"/>
                                <div className="image-item__btn-wrapper"
                                >
                                <motion.button 
                                    onClick={() => onImageUpdate(index)} 
                                    className="image-item__btn"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    Thay ảnh khác
                                </motion.button>
                                <motion.button 
                                    onClick={() => onImageRemove(index)} 
                                    className="image-item__btn"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    Bỏ ảnh này
                                </motion.button>
                                </div>
                            </div>
                            ))}
                            </div>
                        </div>
                        )}
                    </ImageUploading>
                </div>
                <div className="upload">
                    <ImageUploading
                        value={images6}
                        onChange={onChangeImage6}
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
                                Chèn ảnh phòng trọ
                            </button>
                            &nbsp;
                            <div className="image-item__wrapper">
                            {imageList.map((image, index) => (
                            <div key={index} className={index >= 1 ? "image-item image-item--2" : "image-item"}>
                                <img src={image.data_url} alt="" className="image-item__img"/>
                                <div className="image-item__btn-wrapper"
                                >
                                <motion.button 
                                    onClick={() => onImageUpdate(index)} 
                                    className="image-item__btn"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    Thay ảnh khác
                                </motion.button>
                                <motion.button 
                                    onClick={() => onImageRemove(index)} 
                                    className="image-item__btn"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    Bỏ ảnh này
                                </motion.button>
                                </div>
                            </div>
                            ))}
                            </div>
                        </div>
                        )}
                    </ImageUploading>
                </div>
                </div>
            ) : (
            <div className="step4__block">
                <div className="upload">
                    <ImageUploading
                        value={images1}
                        onChange={onChangeImage1}
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
                                Chèn ảnh phòng trọ
                            </button>
                            &nbsp;
                            <div className="image-item__wrapper">
                            {imageList.map((image, index) => (
                            <div key={index} className={index >= 1 ? "image-item image-item--2" : "image-item"}>
                                <img src={image.data_url} alt="" className="image-item__img"/>
                                <div className="image-item__btn-wrapper"
                                >
                                <motion.button 
                                    onClick={() => onImageUpdate(index)} 
                                    className="image-item__btn"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    Thay ảnh khác
                                </motion.button>
                                <motion.button 
                                    onClick={() => onImageRemove(index)} 
                                    className="image-item__btn"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    Bỏ ảnh này
                                </motion.button>
                                </div>
                            </div>
                            ))}
                            </div>
                        </div>
                        )}
                    </ImageUploading>
                </div>
                <div className="upload">
                    <ImageUploading
                        value={images2}
                        onChange={onChangeImage2}
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
                                Chèn ảnh phòng trọ
                            </button>
                            &nbsp;
                            <div className="image-item__wrapper">
                            {imageList.map((image, index) => (
                            <div key={index} className={index >= 1 ? "image-item image-item--2" : "image-item"}>
                                <img src={image.data_url} alt="" className="image-item__img"/>
                                <div className="image-item__btn-wrapper"
                                >
                                <motion.button 
                                    onClick={() => onImageUpdate(index)} 
                                    className="image-item__btn"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    Thay ảnh khác
                                </motion.button>
                                <motion.button 
                                    onClick={() => onImageRemove(index)} 
                                    className="image-item__btn"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    Bỏ ảnh này
                                </motion.button>
                                </div>
                            </div>
                            ))}
                            </div>
                        </div>
                        )}
                    </ImageUploading>
                </div>
                <div className="upload">
                    <ImageUploading
                        value={images3}
                        onChange={onChangeImage3}
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
                                Chèn ảnh phòng trọ
                            </button>
                            &nbsp;
                            <div className="image-item__wrapper">
                            {imageList.map((image, index) => (
                            <div key={index} className={index >= 1 ? "image-item image-item--2" : "image-item"}>
                                <img src={image.data_url} alt="" className="image-item__img"/>
                                <div className="image-item__btn-wrapper"
                                >
                                <motion.button 
                                    onClick={() => onImageUpdate(index)} 
                                    className="image-item__btn"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    Thay ảnh khác
                                </motion.button>
                                <motion.button 
                                    onClick={() => onImageRemove(index)} 
                                    className="image-item__btn"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    Bỏ ảnh này
                                </motion.button>
                                </div>
                            </div>
                            ))}
                            </div>
                        </div>
                        )}
                    </ImageUploading>
                </div>

            </div>
                
            )}
            {open ? (
                    <Button className={classes.buttonStyles} onClick={handleBtnClick}>
                        Ẩn bớt
                    </Button>
                ) : (
                    <Button className={classes.buttonStyles} onClick={handleBtnClick}>
                        Hiển thị thêm
                    </Button>
                )
            }
            <div className="step__btn-block">
                <Button variant="contained" onClick={handleBack} className="step-btn--2">
                    Quay lại
                </Button>
                <Button variant="contained" type="submit" onClick={handleSubmit} className="step-btn--1">
                    Bước tiếp theo
                </Button>
            </div>
        </form>
    );
}

export default Step4;