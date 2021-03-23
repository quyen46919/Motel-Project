import TextField from '@material-ui/core/TextField';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React from 'react';
import './styles.scss';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%"
    },
    btnStyles: {
      margin: "2rem 0rem",
      backgroundColor: "#1379ff!important",
      color: "white",
      height: "50px",
      width: "250px"
    }
  }));

function Contact(props) {
    const classes = useStyles();
    const {register, handleSubmit, errors, control} = useForm({
        defaultValues: {
            guessName: "",
            guessMail: "",
            guessMessage: ""
        },
        mode: "onChange"
       });
    
    const onSubmit = (values) => {
        console.log("FORM DATA: ", values);
    }

    return (
        <div className="contact">
            <div className="contact__content">
                <h1 className="contact__h1">Liên lạc với chúng tôi</h1>
                <p className="contact__p">Để lại lời nhắn của bạn và chúng tôi sẽ liên lạc trong vòng 2 ngày làm việc</p>
                <div className="contact__info">
                    <div className="contact__1-info">
                        <PhoneIcon/>
                        <p>035.124.1235</p>
                    </div>
                    <div className="contact__1-info">
                        <MailOutlineIcon/>
                        <p>nhatrouda@donga.edu.vn</p>
                    </div>
                    <div className="contact__1-info">
                        <LocationOnIcon/>
                        <p>33 Xô Viết Nghệ Tĩnh, Hải Châu, Đà Nẵng</p>
                    </div>
                </div>
                <div className="contact__social-icon">
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <LanguageIcon/>
                </div>
            </div>
            <div className="contact__form-div">
                <form 
                    action="" 
                    className="contact__form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <p>Tên của bạn</p>
                    <TextField 
                        id="outlined-basic" 
                        variant="outlined"
                        className={classes.root}
                        name="guessName"
                        inputRef={register}
                    />
                    <p>Địa chỉ email</p>
                    <TextField 
                        id="outlined-basic" 
                        variant="outlined"
                        className={classes.root}
                        name="guessMail"
                        inputRef={register}
                    />
                    <p>Để lại lời nhắn</p>
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={5}
                        defaultValue=""
                        variant="outlined"
                        className={classes.root}
                        name="guessMessage"
                        inputRef={register}
                    />
                    <div className="contact__btn-wrapper">
                        <Button
                            type="submit" 
                            variant="contained" 
                            disableElevation
                            className={classes.btnStyles}
                        >
                            Gửi tin nhắn
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;