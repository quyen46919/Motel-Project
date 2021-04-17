import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


LastStep.propTypes = {
    
};

function LastStep(props) {
    return (
        <div className="last-step">
            <h3>Điều khoản và chính sách</h3>
            <div className="last-step__line">
                <h1>1</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tenetur nostrum nobis quas placeat voluptatem magni blanditiis quod aperiam unde porro, dolorem mollitia natus! Veritatis dolor doloribus fuga fugiat dolores?</p>
            </div>
            <div className="last-step__line">
                <h1>2</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tenetur nostrum nobis quas placeat voluptatem magni blanditiis quod aperiam unde porro, dolorem mollitia natus! Veritatis dolor doloribus fuga fugiat dolores?</p>
            </div>
            <div className="last-step__line">
                <h1>3</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tenetur nostrum nobis quas placeat voluptatem magni blanditiis quod aperiam unde porro, dolorem mollitia natus! Veritatis dolor doloribus fuga fugiat dolores?</p>
            </div>
            <div className="last-step__line">
                <input type="checkbox" name="read" id=""/>
                <p>Tôi đã đọc và chấp nhận thực hiện chính sách này</p>
            </div>
        </div>
    );
}

export default LastStep;