import './loader.css';
import PropTypes from 'prop-types';

const Loader = (props) => {
    let {color, width, height, only, className} = props;
    return (
        <div className={`loader mx-auto ${only ? '' : 'dots'} ${className ?? ""}`} style={{"--path": color ? color : '', 'width': width, 'height': height, }}>
            <svg className="svg" viewBox="0 0 80 80">
                <circle id="test" cx="40" cy="40" r="32"></circle>
            </svg>
        </div>
    )
}

Loader.propTypes = {
    color: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    only: PropTypes.bool
};

export {
    Loader
}
