import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ListCheckbox from '../Step3';
import './styles.scss';
import { Formik } from "formik";
import * as Yup from 'yup';
import { Button, MenuItem } from "@material-ui/core";

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

const streetName = [
    {
        value: '1',
        label: 'Cao Thắng',
    },
    {
        value: '2',
        label: ' Lê Đình Lý',
    },
    {
        value: '3',
        label: 'Hùng Vương',
    },
    {
        value: '4',
        label: 'Lê Lợi',
    },
    {
        value: '5',
        label: '3-2',
    },
    {
        value: '6',
        label: 'Nguyễn Chí Thanh',
    },
    {
        value: '7',
        label: 'Phan Châu Trinh',
    },
    {
        value: '8',
        label: 'Tiểu La',
    },
    {
        value: '9',
        label: '2-9',
    },
    {
        value: '10',
        label: 'Quang Trung',
    },
    {
        value: '11',
        label: 'Núi Thành',
    },
    {
        value: '12',
        label: 'Đống Đa',
    },
    {
        value: '13',
        label: 'Nguyễn Du',
    },
    {
        value: '14',
        label: 'Lý Tự Trọng',
    },
    {
        value: '15',
        label: 'Hoàng Diệu',
    },
    {
        value: '16',
        label: 'Ông Ích Khiêm',
    },
    {
        value: '17',
        label: 'Thái Phiên',
    },
    {
        value: '18',
        label: 'Lê Hồng Phong',
    },
    {
        value: '19',
        label: 'Hoàng Văn Thụ',
    },
    {
        value: '20',
        label: 'Yên Bái',
    },
    {
        value: '21',
        label: 'Trưng Nữ Vương',
    },
    {
        value: '22',
        label: 'Ngô Gia Tự',
    },
    {
        value: '23',
        label: 'Triệu Nữ Vương',
    },
    {
        value: '24',
        label: 'Cao Thắng',
    },
    {
        value: '25',
        label: 'Bắc Đẩu',
    },
    {
        value: '26',
        label: 'Hải Hồ',
    },
    {
        value: '27',
        label: 'Pasteur',
    },
    {
        value: '28',
        label: 'Lê Đình Dương',
    },
    {
        value: '29',
        label: 'Nguyễn Văn Linh',
    },
    {
        value: '30',
        label: 'Lê Thanh Nghị',
    },
    {
        value: '31',
        label: 'Xô Viết Nghệ Tĩnh',
    },
    {
        value: '32',
        label: 'Trần Phú',
    },
    {
        value: '33',
        label: 'Bạch Đằng',
    },
    {
        value: '34',
        label: 'Nguyễn Hoàng',
    },
]

function Step2(props) {
    const classes = useStyles();

    const [streetNameChoose, setStreetNameChoose] = React.useState('1');
    const handleStreetHomeChange = (event) => {
        setStreetNameChoose(event.target.value);
    };
    const handleSubmit = () => {
        props.handleNext();
    }
    const handleBack = () => {
        props.handleBack();
    }

    const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    return (
        <Formik
            initialValues={{
              name: '',
              phone: '',
              houseNumber: '1',
              prices: '',
              acreage: '',
              mezzanine: '',
              maxPeople: '',
              elec: '',
              water: '',
              sameRoom: '',
              details: ''
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string().max(255).required('Đây là thông tin bắt buộc!'),
                phone: Yup.string().max(10, 'Số điện thoại quá dài').min(9, 'Số điện thoại quá ngắn!').matches(phoneRegex, 'Số điện thoại sai1').required('Đây là thông tin bắt buộc!'),
                houseNumber: Yup.string().max(30).required('Đây là thông tin bắt buộc!'),
                prices: Yup.number().max(100000000, 'Giá phòng tối đa là 10 triệu').min(0, 'Giá phòng phải lớn hơn hoặc bằng 0').required('Đây là thông tin bắt buộc!'),
                acreage: Yup.number().max(1000).min(0, 'Diện tích phải lớn hơn 0').required('Đây là thông tin bắt buộc!'),
                mezzanine: Yup.number().max(1000).min(0, 'Diện tích gác lửng phải lớn hơn hoặc bằng 0').required('Đây là thông tin bắt buộc!'),
                maxPeople: Yup.number().max(10).min(1).required('Đây là thông tin bắt buộc!'),
                elec: Yup.number().max(100000).min(0, 'Giá điện phải lớn hơn 0').required('Đây là thông tin bắt buộc!'),
                water: Yup.number().max(100000).min(0, 'Giá nước phải lớn hơn 0').required('Đây là thông tin bắt buộc!'),
                sameRoom: Yup.number().max(200).min(0, 'Số phòng tương tự phải lớn hơn hoặc bằng 0').required('Đây là thông tin bắt buộc!'),
                details: Yup.string().max(255),
            })}
            onSubmit={(values) => {
                props.getStep2Values(values);
                props.handleNext();
            }}

            // {() => {
            //     navigate('/app/dashboard', { replace: true });
            //       console.log(values);
            //   }}
          >
              {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
        <form className="step2" onSubmit={handleSubmit}>
                <div className="step2__line">
                    <h3>Thông tin chủ nhà trọ</h3>
                    <TextField
                        id="standard"
                        className="step2__input"
                        name="name"       
                        margin="normal"
                        label="Họ và tên chủ trọ"
                        InputLabelProps={{
                            shrink: true
                        }}
                        value={values.name}
                        error={Boolean(touched.name && errors.name)}
                        helperText={touched.name && errors.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    <TextField
                        id="standard-number"
                        type="number"
                        label="Số điện thoại chủ trọ"
                        className="step2__input"                  
                        margin="normal"
                        name="phone"
                        InputLabelProps={{
                            shrink: true
                        }}
                        value={values.phone}
                        error={Boolean(touched.phone && errors.phone)}
                        helperText={touched.phone && errors.phone}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                </div>
                <div className="step2__line">
                <h3>Thông tin phòng trọ</h3>
                <div className="step2__title">
                    <label>1. Địa chỉ</label>
                </div>
                <div className="step2__multi-line">
                    <TextField
                        id="standard"
                        type="text"
                        label="Số nhà"
                        className="step2__small-input"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                        name="houseNumber"
                        value={values.houseNumber}
                        error={Boolean(touched.houseNumber && errors.houseNumber)}
                        helperText={touched.houseNumber && errors.houseNumber}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Tên đường"
                        className="step2__small-input"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                        name="streetName"
                        value={streetNameChoose}
                        error={Boolean(touched.houseNumber && errors.streetName)}
                        helperText={touched.streetName && errors.streetName}
                        onBlur={handleBlur}
                        onChange={handleStreetHomeChange}
                    >
                        {streetName.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Quận / Huyện"
                        className="step2__small-input"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                        defaultValue="haichau"
                        onChange={handleChange}
                    >
                        <MenuItem value="haichau">Hải Châu</MenuItem>
                        <MenuItem value="camle">Cẩm Lệ</MenuItem>
                        <MenuItem value="lienchieu">Liên Chiểu</MenuItem>
                        <MenuItem value="sontra">Sơn Trà</MenuItem>
                        <MenuItem value="nguhanhson">Ngũ Hành Sơn</MenuItem>
                        <MenuItem value="thanhkhe">Thanh Khê</MenuItem>
                    </TextField>
                    <TextField
                        id="standard"
                        label="Tỉnh / Thành phố"
                        className="step2__small-input"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                        disabled
                        value="Đà Nẵng"
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
                        placeholder="Đơn vị: triệu đồng"
                        name="prices"
                        value={values.prices}
                        error={Boolean(touched.prices && errors.prices)}
                        helperText={touched.prices && errors.prices}
                        onBlur={handleBlur}
                        onChange={handleChange}
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
                        name="acreage"
                        value={values.acreage}
                        error={Boolean(touched.acreage && errors.acreage)}
                        helperText={touched.acreage && errors.acreage}
                        onBlur={handleBlur}
                        onChange={handleChange}
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
                        name="mezzanine"
                        value={values.mezzanine}
                        error={Boolean(touched.mezzanine && errors.mezzanine)}
                        helperText={touched.mezzanine && errors.mezzanine}
                        onBlur={handleBlur}
                        onChange={handleChange}
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
                        name="maxPeople"
                        value={values.maxPeople}
                        error={Boolean(touched.maxPeople && errors.maxPeople)}
                        helperText={touched.maxPeople && errors.maxPeople}
                        onBlur={handleBlur}
                        onChange={handleChange}
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
                        name="elec"
                        value={values.elec}
                        error={Boolean(touched.elec && errors.elec)}
                        helperText={touched.elec && errors.elec}
                        onBlur={handleBlur}
                        onChange={handleChange}
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
                        name="water"
                        value={values.water}
                        error={Boolean(touched.elec && errors.water)}
                        helperText={touched.water && errors.water}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    
                    <TextField
                        id="standard-number"
                        type="number"
                        label="Số phòng tương tự"
                        className="step2__small-input"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                        name="sameRoom"
                        value={values.sameRoom}
                        error={Boolean(touched.sameRoom && errors.sameRoom)}
                        helperText={touched.sameRoom && errors.sameRoom}
                        onBlur={handleBlur}
                        onChange={handleChange}
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
                    name="details"
                    value={values.details}
                    error={Boolean(touched.details && errors.details)}
                    helperText={touched.details && errors.details}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
            </div>
            <div className="step__btn-block">
                <Button variant="contained" onClick={handleBack} className="step-btn--2">
                    Quay lại
                </Button>
                <Button variant="contained" onClick={handleSubmit} className="step-btn--1">
                    Bước tiếp theo
                </Button>
            </div>
        </form>
            )}
        </Formik>
    );
}

export default Step2;