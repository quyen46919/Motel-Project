import './styles.scss';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import AccountProfile from './components/AccountProfile';
import AccountProfileDetails from './components/AccountProfileDetails';
import SettingsPassword from './components/SettingsPassword';


const Account = () => (
  <div className="account">
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AccountProfile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountProfileDetails />
          </Grid>
        </Grid>
      </Container>
      <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ pt: 3 }}>
          <SettingsPassword />
        </Box>
      </Container>
    </Box>
    </Box>
  </div>
);

export default Account;
