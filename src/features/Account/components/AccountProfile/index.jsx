import avatar from '../../../../assets/images/genshin_12_4K.jpg';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';

const user = {
  avatar: avatar,
  jobTitle: 'Senior Developer',
  name: 'Nguyễn Châu Quyền',
  timezone: 'GTM-7'
};


const AccountProfile = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div className="avatar">
          <img src={avatar} alt="" style={{width: "100%", height: "200px"}}/>
        </div>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        color="primary"
        fullWidth
        variant="text"
        className="button-box"
      >
        Tải ảnh avatar
      </Button>
    </CardActions>
  </Card>
);

export default AccountProfile;
