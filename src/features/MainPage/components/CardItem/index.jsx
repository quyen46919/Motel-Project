
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import ShareIcon from '@material-ui/icons/Share';
import { NavLink } from "react-router-dom";
import SvgLoveIcons from "./component/LoveIcon";
import Popover from '@material-ui/core/Popover';
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import './styles.scss';
import { Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    width: 350,
    height: 400,
    position :"relative",
    border: "none",
    outline: "none",
    boxShadow: "none!important",
    borderRadius: "1px!important"
  },
  media: {
    height: 0,
    paddingTop: "60.25%", // 16:9
    // border: "1px solid #a2aeb3",

  },
  textStyles: {
    color: "rgba(0, 0, 0, 0.54)",
    transform: "translateY(-4px)",
  },
  navLink: {
    textDecoration: "none",
    color: "unset"
  },
  cardContent: {
    paddingBottom: "0",
    paddingLeft: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    cursor: "auto",
    width: "100%",
    textAlign: "left"
  },
  iconWrapper: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  titleStyles: {
    textTransform: "uppercase",
    margin: "0"
  },
  popoverTitle: {
    paddingTop: "25px"
  },
  textStyles: {
    margin: "0.1rem 0",
  },
  prices: {
    fontSize: "23px!important",
    fontWeight: "500",
    margin: 0
  },
  textStyles2: {
    margin: "0.1rem 0",
    textTransform: "uppercase"
  },
  rating: {
    padding : "0",
    margin : "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffb400",
    "& > p" : {
      padding : "0",
      margin : "0",
      marginRight: "0.3rem",
      transform: "translateY(3px)"
    }
  },
  chip: {
    borderRadius: "0 3px 3px 0",
    marginRight: "0.3rem",
    background: "#ffc107",
    border: "none",
    fontWeight: "500",
    position: "absolute",
    top: "15px",
    left: 0,
    width: "100px",
    fontWeight: "700!important",

  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
    maxWidth: "320px",
    transform: "translateX(-10px)!important",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "1.5rem",
  },
}));


export default function CardItem({img}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  // as;d'sad

  
  return (
    <Card className={`${classes.root} card-item`} >
      <NavLink to="/main/details/12312" className={classes.navLink}>
        <CardMedia
          className={classes.media}
          image={img}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        />
          <Popover
            id="mouse-over-popover"
            className={classes.popover}
            classes={{
              paper: classes.paper,
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'right',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <h4 className={`${classes.titleStyles} ${classes.popoverTitle}`}>
              Cho thuê 5 phòng tại K544/16 đường 2-9
            </h4>
            <Box component="fieldset" borderColor="transparent" className={classes.rating}>
              <p className="rating-p">3.6</p>
              <Rating name="read-only" value={3} readOnly style={{fontSize: "20px"}}/>
            </Box>
            <p className={classes.prices}>
              2.500.000 VND
            </p>
            <p className={classes.textStyles}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eveniet aperiam quae obcaecati. Consequuntur eius sit rerum voluptatum soluta. Amet commodi, animi maiores exercitationem eius tempora. Mollitia modi dicta quae.
            </p>
            <div className={classes.chips}>
              <Chip variant="outlined" label="Cần gấp" className={classes.chip}/>
              <Chip variant="outlined" label="Trọ tốt" className={classes.chip} />
            </div>
          </Popover>
        </NavLink>
        <CardContent className={classes.cardContent}>
          <h4 className={classes.titleStyles}>
            Cho thuê 5 phòng tại K544/16 đường 2-9
          </h4>
          <p className={classes.textStyles2}>
            Hải Châu
          </p>
          <Box component="fieldset" borderColor="transparent" className={classes.rating}>
            <p className="rating-p">3.6</p>
            <Rating name="read-only" value={3} readOnly style={{fontSize: "20px"}}/>
          </Box>
          <p className={classes.prices}>
            2.500.000 VND
          </p>
          <div className={classes.chipWrapper}>
            <Chip variant="outlined" label="Cần gấp" className={classes.chip}/>
          </div>
        </CardContent>
        <IconButton className={classes.iconWrapper}>
          <ShareIcon/>
        </IconButton>
    </Card>

  );
}
