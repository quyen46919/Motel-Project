import React from 'react';
import CustomizedAccordions from '../CustomizedAccordions';
import './styles.scss';
import CardItem from '../CardItem';
import img from '../../../../assets/images/bloom.jpg';
import img2 from '../../../../assets/images/blosom.jpg';
import img3 from '../../../../assets/images/liyue.jpg';
import img4 from '../../../../assets/images/liyue2.jpg';
import img5 from '../../../../assets/images/liyue3.jpg';
import img6 from '../../../../assets/images/liyue4.jpg';
import img7 from '../../../../assets/images/liyue5.jpg';
import img8 from '../../../../assets/images/pink-flower.jpg';
import img9 from '../../../../assets/images/grass.jpg';
import img10 from '../../../../assets/images/langque.jpg';
import SubLeftMenu from '../../../../components/Header/components/SubLeftMenu';
import Filter from '../../../Filter';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import CardSlide from '../CardSlide';

export function slide1() {
    return (
        <div className="rent-page__selfie">
            <div className="rent-page__self rent-page__invite-mess">
                <h1>92 Trần Phú - Hải Châu - Đà Nẵng</h1>
                <p>Đây là ảnh của những bạn đang cần ghép trọ tại 92 Trần Phú Đà Nẵng.</p>
                <Button variant="contained" color="primary" className="rent-page__bg1-btn">
                    <NavLink to="/main/details/12312">
                        Xem thông tin
                    </NavLink>
                </Button>
            </div>
            <div className="rent-page__img-block">
                <div className="rent-page__self rent-page__self1"></div>
                <div className="rent-page__self rent-page__self2"></div>
                <div className="rent-page__self rent-page__self3"></div>
            </div>
        </div>
    )
}
export function slide2() {
    return (
        <div className="rent-page__selfie">
            <div className="rent-page__self rent-page__invite-mess">
                <h1>K544/16 2 tháng 9 - Hải Châu - Đà Nẵng</h1>
                <p>Đây là ảnh của những bạn đang cần ghép trọ tại 92 Trần Phú Đà Nẵng.</p>
                <Button variant="contained" color="primary" className="rent-page__bg1-btn">
                    <NavLink to="/main/details/12312">
                        Xem thông tin
                    </NavLink>
                </Button>
            </div>
            <div className="rent-page__img-block">
                <div className="rent-page__self rent-page__self3"></div>
                <div className="rent-page__self rent-page__self1"></div>
                <div className="rent-page__self rent-page__self2"></div>    
            </div>
        </div>
    )
}
const SliderData = [
    {image: slide1()},
    {image: slide2()},

]

function RentPage({id}) {
    return (
        <div className="rent-page">
            <div className="rent-page__bg1">
                <h1 className="rent-page__bg-title">Tìm phòng trọ</h1>
                <p className="rent-page__bg-text">Tìm kiếm phòng trọ nhanh chóng và tiện lợi theo các tiêu chí cụ thể</p>
                <Button variant="contained" color="primary" className="rent-page__bg1-btn">
                    Tìm hiểu thêm
                </Button>
            </div>
            <div className="rent-page__bgdetails"></div>
            <div className="rent-page__list-items">
                {/* <div className="test1"></div> */}
                <div className="rent-page__list-title">
                    <h1>Phòng trọ gợi ý cho bạn</h1>
                </div>

                <div className="rent-page__list">
                    <CardItem img={img}/>
                    <CardItem img={img2}/>
                    <CardItem img={img3}/>
                    <CardItem img={img4}/>
                    <CardItem img={img5}/>
                    <CardItem img={img6}/>
                    <CardItem img={img7}/>
                    <CardItem img={img8}/>
                </div>
                <div className="rent-page__list">
                    <Button variant="outlined" color="primary" className="rent-page__btn">
                        Xem thêm 10 trọ khác
                    </Button>
                </div>
                <div className="rent-page__test2"></div>
                <div className="rent-page__list-title">
                    <h1>Phòng trọ khu vực Hải Châu</h1>
                </div>

                <div className="rent-page__list">
                    <CardItem img={img}/>
                    <CardItem img={img2}/>
                    <CardItem img={img3}/>
                    <CardItem img={img3}/>
                </div>
                <div className="rent-page__list">
                    <Button variant="outlined" color="primary" className="rent-page__btn">
                        Xem thêm 10 trọ khác
                    </Button>
                </div>
                <div className="rent-page__list-title">
                    <h1>Phòng trọ khu vực Cẩm Lệ</h1>
                </div>

                <div className="rent-page__list">
                    <CardItem img={img}/>
                    <CardItem img={img}/>
                    <CardItem img={img2}/>
                    <CardItem img={img3}/>
                </div>
                <div className="rent-page__list">
                    <Button variant="outlined" color="primary" className="rent-page__btn">
                        Xem thêm 10 trọ khác
                    </Button>
                </div>
                <div className="rent-page__list-title">
                    <h1>Phòng trọ khu vực Sơn Trà</h1>
                </div>

                <div className="rent-page__list">
                    <CardItem img={img}/>
                    <CardItem img={img}/>
                    <CardItem img={img2}/>
                    <CardItem img={img3}/>
                </div>
                <div className="rent-page__list">
                    <Button variant="outlined" color="primary" className="rent-page__btn">
                        Xem thêm 10 trọ khác
                    </Button>
                </div>
                {/* <div className="rent-page__test"></div> */}
                {/* <div className="rent-page__bg1">
                    <h1 className="rent-page__bg-title">Ghép trọ</h1>
                    <p className="rent-page__bg-text">Các bạn sinh viên có nhu cầu tuyển bạn ghép trọ sẽ đăng tin tại đây</p>
                    <Button variant="contained" color="primary" className="rent-page__bg1-btn">
                        Xem Ngay
                    </Button>
                </div> */}
                {/* <div className="rent-page__list-title">
                    <h1>Ghép trọ với sinh viên tại Đà Nẵng</h1>
                </div>
                <div className="rent-page__selfie">
                    <CardSlide SliderData={SliderData}/>
                </div>
                <div className="rent-page__list-title">
                    <h1>Gợi ý cho bạn</h1>
                </div>
                <div className="rent-page__list">
                    <CardItem img={img}/>
                    <CardItem img={img}/>
                    <CardItem img={img}/>
                    <CardItem img={img}/>
                    <CardItem img={img}/>
                    <CardItem img={img}/>
                    <CardItem img={img}/>
                    <CardItem img={img}/>
                    <CardItem img={img}/>
                    <CardItem img={img}/>
                </div>
                <div className="rent-page__list">
                    <Button variant="outlined" color="primary" className="rent-page__btn">
                        Xem thêm 10 trọ khác
                    </Button>
                </div>
                <div className="rent-page__bg1 rent-page__bg3">
                    <h1 className="rent-page__bg-title">Thuê căn hộ</h1>
                    <p className="rent-page__bg-text">Tìm kiếm căn hộ có đầy đủ tiện ích bạn mong muốn</p>
                    <Button variant="contained" color="primary" className="rent-page__bg1-btn">
                        Xem Ngay
                    </Button>
                </div> */}
                {/* <div className="test3"></div> */}
                {/* <div className="rent-page__house">
                    <CardSlide SliderData={SliderData}/>
                </div> */}
                {/* <div className="rent-page__list-title">
                    <h1>Căn hộ đề xuất cho bạn</h1>
                </div>
                <div className="rent-page__list">
                    <CardItem img={img2}/>
                    <CardItem img={img2}/>
                    <CardItem img={img2}/>
                    <CardItem img={img2}/>
                    <CardItem img={img2}/>
                    <CardItem img={img2}/>
                    <CardItem img={img2}/>
                    <CardItem img={img2}/>
                    <CardItem img={img2}/>
                    <CardItem img={img2}/>
                </div> */}
                {/* <div className="rent-page__list">
                    <Button variant="outlined" color="primary" className="rent-page__btn">
                        Xem thêm 10 trọ khác
                    </Button>
                </div> */}
            </div>
        </div>
    );
}

export default RentPage;