import {
  Box,
  Button,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';
import { useState } from 'react';
import img from '../../../../assets/images/genshin_12_4K.jpg';

const states = [
  {
    value: 'danang',
    label: 'Đà Nẵng'
  },
  {
    value: 'notDaNang',
    label: 'Ngoài Đà Nẵng'
  },
];

const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: 'Nguyễn Châu',
    lastName: 'Quyền',
    email: 'quyen46919@donga.edu.vn',
    phone: '0345121124',
    state: 'Hải Châu',
    country: 'USA'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  const [selectedFile, setSelectedFile] = useState(null);
  console.log(selectedFile)
  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
        <CardHeader
          title="Cập nhật ảnh đại diện"
        />
        <Divider />
        <CardContent>
          <Grid
              item
              md={6}
              xs={12}
              className="displayFlexRow"
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  p: 2,
                  
                }}
                className="button-box"
              >
                <div className="user__avatar">
                          <img src={selectedFile ? selectedFile : img} alt="avatar"/>
                      </div>
                      <input type="file" name="file" onChange={(e) => setSelectedFile(e.target.files[0])}/>
              </Box>
                
            </Grid>
        </CardContent>
        <CardHeader
          title="Cập nhật thông tin"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="Họ đệm"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Tên"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Địa chỉ email"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Số điện thoại"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2,
            
          }}
          className="button-box"
        >
          <Button
            color="primary"
            variant="contained"
          >
            Lưu thông tin
          </Button>
        </Box>
    </form>
  );
};

export default AccountProfileDetails;
