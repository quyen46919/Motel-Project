import React from 'react';
import CustomizedAccordions from '../CustomizedAccordions';
import './styles.scss';
import CardItem from '../CardItem';
import img from '../../../../assets/images/bloom.jpg';
import img2 from '../../../../assets/images/blosom.jpg';
RentPage.propTypes = {
    
};

function RentPage({id}) {
    return (
        <div className="rent-page">
            <CustomizedAccordions className="rent-page__option"/>
            <div className="rent-page__list-items">
                <CardItem img={id === "1" ? img : img2}/>
                <CardItem img={id === "1" ? img : img2}/>
                <CardItem img={id === "1" ? img : img2}/>
                <CardItem img={id === "1" ? img : img2}/>
                <CardItem img={id === "1" ? img : img2}/>
                <CardItem img={id === "1" ? img : img2}/>
                
            </div>
        </div>
    );
}

export default RentPage;