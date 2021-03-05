import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import UploadButton from '../UploadButton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "30ch",
  },
  textField2: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "calc(60ch + 16px)"
  },
  wrapDiv: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
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
    <form className={classes.root}>
        <div className={classes.titleWrap}>
          <h1 className={classes.titleColor}>{title}</h1>
        </div>
        <div className={`${classes.wrapDiv} _1line`}>
          <div className={classes.wrapDiv}>
            <TextField
              label="Số nhà / Số hẻm"
              id="outlined-margin-normal"
              defaultValue="33"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Tên đường"
              id="outlined-margin-normal"
              defaultValue="Xô Viết Nghệ Tĩnh"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className={classes.wrapDiv}>
            <TextField
              label="Quận / Huyện"
              id="outlined-margin-normal"
              defaultValue="Hải Châu"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Thành phố"
              id="standard-read-only-input"
              defaultValue="Đà Nẵng"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
        </div>
        <div className={`${classes.wrapDiv} _1line`}>
          <div className={classes.wrapDiv}>
              <TextField
                label="Giá trọ"
                id="outlined-margin-normal"
                defaultValue="2.000.000"
                className={classes.textField}
                helperText="Giá 1 phòng không phụ thuộc số người"
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Hình thức"
                id="outlined-margin-normal"
                defaultValue="Không chung chủ"
                className={classes.textField}
                helperText="Chung chủ / Không chung chủ"
                margin="normal"
                variant="outlined"
              />
            </div>
            <div className={classes.wrapDiv}>
              <TextField
                label="Diện tích phòng"
                id="outlined-margin-normal"
                defaultValue="25"
                className={classes.textField}
                helperText="Đơn vị: m2"
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Diện tích gác lửng"
                id="outlined-margin-normal"
                defaultValue="0"
                className={classes.textField}
                helperText="Bỏ trống nếu không có gác lửng"
                margin="normal"
                variant="outlined"
              />
            </div>
        </div>

        <div className={`${classes.wrapDiv} _1line`}>
          <div className={classes.wrapDiv}>
              <TextField
                label="Tiêu đề bài đăng"
                id="outlined-margin-normal"
                defaultValue="Cho thuê 1 phòng trọ cho 3 người"
                className={classes.textField2}
                helperText="Cho thuê phòng cho mấy người, yêu cầu người thuê phải như thế nào,..."
                margin="normal"
                variant="outlined"
              />
              
            </div>
            <div className={classes.wrapDiv}>
              <TextField
                  label="Mô tả chung"
                  id="outlined-margin-normal"
                  defaultValue="Trọ có đầy đủ tiện nghi, giờ giấc linh hoạt"
                  className={classes.textField2}
                  helperText="Mô tả về phòng trọ, nhà trọ, ..."
                  margin="normal"
                  variant="outlined"
                />
            </div>
        </div>

        <div className={`${classes.wrapDiv} _1line`} >
          <div className={classes.wrapDiv} style={{marginTop: '1rem'}}>
              
              <UploadButton title="TẢI LÊN ẢNH PHÒNG TRỌ"/>
              <UploadButton title="TẢI LÊN ẢNH PHÒNG TRỌ"/>
              <UploadButton title="TẢI LÊN ẢNH PHÒNG TRỌ"/>
              <UploadButton title="TẢI LÊN ẢNH NHÀ TRỌ"/>
              <UploadButton title="ẢNH DỰ PHÒNG"/>
            </div>
        </div>

    </form>
  );
}
