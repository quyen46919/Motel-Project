
import { Chip } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Popover from '@material-ui/core/Popover';
import { makeStyles } from "@material-ui/core/styles";
import ShareIcon from '@material-ui/icons/Share';
import Rating from "@material-ui/lab/Rating";
import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import './styles.scss';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 380,
    width: 300,
    height: 380,
    position :"relative",
    border: "none",
    outline: "none",
    boxShadow: "none!important",
    borderRadius: "3px!important"
  },
  media: {
    height: 0,
    paddingTop: "57.25%", // 16:9
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
    margin: "0",
    fontWeight: '500'
  },
  textStyles: {
    margin: "0.1rem 0",
  },
  prices: {
    fontSize: "20px!important",
    fontWeight: "400",
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
    }
  },
  chip: {
    borderRadius: "0 3px 3px 0",
    marginRight: "0.3rem",
    background: "#ffc107",
    border: "none",
    fontWeight: "500",
    marginTop: "5px",
    marginRight: "5px"
  },
  // popoverChip:{
  //   position: "absolute",
  //   top: "15px",
  //   left: 0,
  //   width: "100px",
  //   fontWeight: "700!important",
  //   margin: 0
  // },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
    maxWidth: "320px",
    // transform: "translateX(-10px)!important",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "1.5rem",
  },
}));


export default function CardItem(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  
  return (
    <motion.div>
      <Card className={`${classes.root} card-item`} >
      <NavLink to={`/main/details/${props.id}`} className={classes.navLink}>
        <CardMedia
          className={classes.media}
          image={props.img}
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
            <h3 className={classes.titleStyles}>
              {
                props.category == 'merge_motel' ? 
                `Cần ghép ${props.sameRoom + 1} phòng tại ${props.address}` : 
                `Cho thuê ${props.sameRoom + 1} phòng tại ${props.address}`
              }
            </h3>
            <Box component="fieldset" borderColor="transparent" className={classes.rating}>
              <p className="rating-p">4.1</p>
              <Rating name="read-only" value={4} readOnly style={{fontSize: "20px"}}/>
            </Box>
            <p className={classes.prices}>
              {props.prices}
            </p>
            <div className="item-details__info">
                <div className="item-details__info-content card-item__popover">
                    <div className="card-item__address card-item__details-p">
                        <p>Địa chỉ: {props.address} </p>
                    </div>
                    <div className="card-item__details-p">
                        <p>Tiền điện: {props.elecPrices} / kWh</p>
                    </div>
                    <div className="card-item__details-p">
                        <p>Hình thức: Không chung chủ</p>
                    </div>
                    
                    <div className="card-item__details-p">
                        <p>Tiền nước: {props.waterPrices} / Khối</p>
                    </div>
                    <div className="card-item__details-p">
                        <p>Diện tích phòng: {props.acreage}m2</p>
                    </div>
                    
                    <div className="card-item__details-p">
                        <p>Số người tối đa: {props.maxPeople} người</p>
                    </div>
                    <div className="card-item__details-p">
                        <p>Diện tích gác lửng: {props.mezzanine}m2</p>
                    </div>
                </div>
              </div>
              <p className="card-item__request">
                {props.description}
              </p>
            <div className={classes.chips}>
              <Chip variant="outlined" label="Cần gấp" className={`${classes.popoverChip} ${classes.chip}`}/>
              <Chip variant="outlined" label="Trọ tốt" className={`${classes.popoverChip} ${classes.chip}`}/>
            </div>
          </Popover>
        </NavLink>
        <CardContent className={classes.cardContent}>
          <h4 className={classes.titleStyles}>
          {`cho thuê ${props.sameRoom + 1} phòng tại ${props.address}`}
          </h4>
          <p className={classes.textStyles2}>
            {/* {details.district} */}
          </p>
          <Box component="fieldset" borderColor="transparent" className={classes.rating}>
            <p className="rating-p">4.1</p>
            <Rating name="read-only" value={4} readOnly style={{fontSize: "20px"}}/>
          </Box>
          <p className={classes.prices}>
            {String(props.prices).replace(/(.)(?=(\d{3})+$)/g,'$1,') + " VND"}  
          </p>
          <div className={classes.chipWrapper}>
            <Chip variant="outlined" label="Cần gấp" className={classes.chip}/>
            <Chip variant="outlined" label="Trọ tốt" className={classes.chip} />
          </div>
        </CardContent>
        <IconButton className={classes.iconWrapper}>
          <ShareIcon/>
        </IconButton>
    </Card>
    </motion.div>

  );
}
