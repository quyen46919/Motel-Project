import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ListCheckbox from '../ListCheckbox';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    }
  }));

function Step2(props) {
    const classes = useStyles();

    return (
        <div className="step2">
                <div className="step2__line">
                    <h3>Thông tin chủ nhà trọ</h3>
                    <TextField
                        id="standard"
                        label="Họ và tên"
                        className="step2__input"       
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <TextField
                        id="standard-number"
                        type="number"
                        label="Số điện thoại"
                        className="step2__input"                  
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                </div>
                <div className="step2__line">
                <h3>Thông tin phòng trọ</h3>
                <div className="step2__title">
                    <label>1. Địa chỉ</label>
                </div>
                <div className="step2__multi-line">
                    <TextField
                        id="standard-number"
                        type="number"
                        label="Số nhà"
                        className="step2__small-input"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <TextField
                        id="standard"
                        label="Tên đường"
                        className="step2__small-input"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <TextField
                        id="standard"
                        label="Quận / Huyện"
                        className="step2__small-input"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <TextField
                        id="standard"
                        label="Tỉnh / Thành phố"
                        className="step2__small-input"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                </div>
                <div className="step2__title">
                    <label>2. Phòng trọ</label>
                </div>
                <div className="step2__multi-line">
                    <TextField
                        id="standard-number"
                        type="number"
                        label="Giá phòng"
                        className="step2__small-input"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <TextField
                        id="standard-number"
                        type="number"
                        label="Diện tích"
                        className="step2__small-input"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <TextField
                        id="standard-number"
                        type="number"
                        label="Diện tích gác lửng"
                        className="step2__small-input"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <TextField
                        id="standard-number"
                        type="number"
                        label="Số người tối đa"
                        className="step2__small-input"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <TextField
                        id="standard-number"
                        type="number"
                        label="Tiền điện"
                        className="step2__small-input"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <TextField
                        id="standard-number"
                        type="number"
                        label="Tiền nước"
                        className="step2__small-input"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    
                    <TextField
                        id="standard-number"
                        type="number"
                        label="Số phòng tương tự"
                        className="step2__small-input"
                        defaultValue={0}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                </div>
                <TextField
                    id="standard"
                    label="Mô tả"
                    className="step2__input step2__details"
                    placeholder="Bạn muốn người thuê / người ghép trọ là người như thế nào?"           
                    margin="normal"
                    InputLabelProps={{
                        shrink: true
                    }}
                />
            </div>
                <ListCheckbox/>
        </div>
    );
}

export default Step2;