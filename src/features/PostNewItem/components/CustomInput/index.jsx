import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import UploadButton from '../UploadButton';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
  root2: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: "1.5rem"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "30ch",
    
  },
  ["@media (max-width: 600px)"] : {
    textField: {
      width: '80vw'
    },
    wrapDiv: {
      flexWrap: "wrap",
      flexDirection: "column",
      gap: "1rem 0"
    },
    textField2: {
      width: "80vw!important"
    }
  },
  textField2: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "calc(60ch + 32px)"
  },
  wrapDiv: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    gap: "1rem!important"
  },
  titleWrap: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },
  titleColor:{
    color: "#20274d"
  }
}));

export default function CustomInput({title}) {
  const classes = useStyles();

  return (
    <div className={`${classes.root2} custom-input`}>
        <div className={classes.titleWrap}>
          <h1 className={classes.titleColor}>Thông tin về nhà trọ</h1>
        </div>
        <div className={`${classes.wrapDiv} custom-input__line`}>
          <div className={classes.wrapDiv}>
            <TextField
              label="Số nhà / Số hẻm"
              id="standard-helperText"
              className={classes.textField}
              defaultValue="Default Value"
            />
            <TextField
              label="Tên đường"
              id="standard-helperText"
              defaultValue="Xô Viết Nghệ Tĩnh"
              className={classes.textField}
            />
          </div>
          <div className={classes.wrapDiv}>
            <TextField
              label="Quận / Huyện"
              id="standard-helperText"
              defaultValue="Hải Châu"
              className={classes.textField}
            />
            <TextField
              label="Thành phố"
              id="standard-helperText"
              defaultValue="Đà Nẵng"
              className={classes.textField}
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
        </div>
        <div className={`${classes.wrapDiv} custom-input__line`}>
          <div className={classes.wrapDiv}>
            <TextField
                label="Giá trọ"
              id="standard-number"
              defaultValue="2000000"
              className={classes.textField}
              helperText="Giá 1 phòng không phụ thuộc số người"
              type="number"
            />
            <TextField
                label="Hình thức"
                id="standard-helperText"
                defaultValue="Không chung chủ"
                className={classes.textField}
                helperText="Chung chủ / Không chung chủ"
            />
            </div>
            <div className={classes.wrapDiv}>
                <TextField
                    label="Diện tích phòng"
                    id="standard-helperText"
                    defaultValue="25"
                    className={classes.textField}
                    helperText="Đơn vị: m2"
                />
              <TextField
                label="Diện tích gác lửng"
                id="standard-helperText"
                defaultValue="0"
                className={classes.textField}
                helperText="Bỏ trống nếu không có gác lửng (Đơn vị: m2)"
                />
            </div>
        </div>
        <div className={`${classes.wrapDiv} custom-input__line`}>
          <div className={classes.wrapDiv}>
            <TextField
              label="Giá điện"
              id="standard-number"
              defaultValue="3000"
              className={classes.textField}
              helperText="Đơn vị: VND/kWh"
              type="number"
            />
            <TextField
                label="Giá nước"
                id="standard-number"
                defaultValue="7000"
                className={classes.textField}
                helperText="Đơn vị: VND/Khối (hoặc thỏa thuận)"
                type="number"
            />
            </div>
            <div className={classes.wrapDiv}>
              <TextField
                  label="Số người tối đa"
                  id="standard-number"
                  defaultValue="3"
                  className={classes.textField}
                  type="number"
              />
              <TextField
                    label="Số phòng tương tự"
                    id="standard-number"
                    defaultValue="0"
                    className={classes.textField}
                    helperText="Trong trường hợp có nhiều phòng tương tự muốn đăng tin cùng lúc"
                    type="number"
                />
            </div>
        </div>

        <div className={`${classes.wrapDiv} custom-input__line`}>
          <div className={classes.wrapDiv}>
            <TextField
                label="Tiêu đề bài đăng"
                id="standard-helperText"
                defaultValue="Cho thuê 1 phòng trọ cho 3 người"
                className={classes.textField2}
                helperText="Cho thuê phòng cho mấy người, yêu cầu người thuê phải như thế nào,..."
            />
            </div>
            <div className={classes.wrapDiv}>
             <TextField
                label="Mô tả chung"
                id="standard-helperText"
                defaultValue="Trọ có đầy đủ tiện nghi, giờ giấc linh hoạt"
                className={classes.textField2}
                helperText="Mô tả về phòng trọ, nhà trọ, ..."
            />
            </div>
        </div>

        <div className={`${classes.wrapDiv} custom-input__line`} >
          <div className={`${classes.wrapDiv} custom-input__upload`}>   
              <UploadButton title="TẢI LÊN ẢNH PHÒNG TRỌ"/>
              <UploadButton title="TẢI LÊN ẢNH PHÒNG TRỌ"/>
              <UploadButton title="TẢI LÊN ẢNH PHÒNG TRỌ"/>
              <UploadButton title="TẢI LÊN ẢNH NHÀ TRỌ"/>
            </div>
        </div>

    </div>
  );
}
