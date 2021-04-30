import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField
} from '@material-ui/core';


const SettingsPassword = (props) => {
  const [values, setValues] = useState({
    password: '',
    confirm: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form {...props}>
        <CardHeader
          title="Đổi mật khẩu"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Mật khẩu mới"
            margin="normal"
            name="password"
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Xác nhận mật khẩu"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2
          }}
          className="button-box"
        >
          <Button
            color="primary"
            variant="contained"
          >
            Đổi mật khẩu
          </Button>
        </Box>
    </form>
  );
};

export default SettingsPassword;
