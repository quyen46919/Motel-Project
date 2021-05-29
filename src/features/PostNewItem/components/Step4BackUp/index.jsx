import { Button, makeStyles } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { insertStep4Values } from '../../PostNewItemSlice';
import Upload from '../Upload';
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

function Step4BackUp(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const handleBtnClick = () => {
        setOpen(!open);
    }
    const handleSubmit = (values) => {
        const action = insertStep4Values(values);
        dispatch(action);
        props.handleNext();
    }
    const handleBack = () => {
        props.handleBack();
    }

    return (
        <Formik
            initialValues={{
              img1: '',
              img2: '',
              img3: '',
              img4: '',
              img5: '',
              img6: '',
            }}
            onSubmit={(values) => {
                console.log(values);
                const action = insertStep4Values(values);
                dispatch(action);
                props.getStep4Values(values);
                // props.handleNext();
            }}>
                {( formProps) => (
        <Form className="step4">
            <p>Bạn phải tải lên ít nhất <span className="step4__span">1 ảnh về nhà trọ</span> và <span className="step4__span">2 ảnh về phòng trọ</span></p>
            {open ? (
                <div className="step4__block">
                    <Upload title="Ảnh nhà trọ"  name="img1"/>
                    {/* <Upload title="Ảnh nhà trọ"  name="img1"/> */}
                    
                    {/* <div className="step4__img--upload">
                        <input
                            accept="image/*"
                            // style={{ display: 'none' }}
                            id="raised-button-file"
                            name="img1"
                            type="file"
                            onChange={(event) => 
                                {
                                    formProps.setFieldValue('img1', event.target.files[0]);
                                    console.log(formProps.values);
                                }
                            }
                        />
                    </div> */}
                </div>
            ) : (
                <div className="step4__block">
                    {/* <Upload title="Ảnh nhà trọ" handleUploadImg1={handleUploadImg1} name="img1"/>
                    <Upload title="Ảnh phòng trọ" handleUploadImg1={handleUploadImg1} name="img2"/>
                    <Upload title="Ảnh phòng trọ" handleUploadImg1={handleUploadImg1} name="img3"/> */}
                    <div className="step4__img--upload">
                        <input
                            accept="image/*"
                            // style={{ display: 'none' }}
                            // id="raised-button-file"
                            name="img1"
                            type="file"
                            onChange={(event) => 
                                {
                                    formProps.setFieldValue('img1', event.target.files[0]);
                                    console.log(formProps.values);
                                }
                            }
                        />
                        {/* <label htmlFor="raised-button-file" name="img1">
                            <Button variant="contained" component="span">
                                Upload
                            </Button>
                        </label> */}
                    </div>
                    <div className="step4__img--upload">
                        <input
                            accept="image/*"
                            // style={{ display: 'none' }}
                            // id="raised-button-file"
                            name="img2"
                            type="file"
                            onChange={(event) => 
                                {
                                    formProps.setFieldValue('img2', event.target.files[0]);
                                    console.log(formProps.values);
                                }
                            }
                        />
                    </div>  
                    <div className="step4__img--upload">
                        <input
                            accept="image/*"
                            // style={{ display: 'none' }}
                            // id="raised-button-file"
                            name="img3"
                            type="file"
                            onChange={(event) => 
                                {
                                    formProps.setFieldValue('img3', event.target.files[0]);
                                    console.log(formProps.values);
                                }
                            }
                        />
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
        </Form>
            )}
        </Formik>
    );
}

export default Step4BackUp;