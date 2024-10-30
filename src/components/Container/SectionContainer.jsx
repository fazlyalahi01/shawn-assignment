import PropTypes from 'prop-types';

const SectionContainer = (props) => {
    return (
        <div
            className={`mx-auto max-w-[1270px] px-6 sm:px-6 lg:px-8 ${props.className}`}
        >
            {props.children}
        </div>
    );
};

SectionContainer.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

export default SectionContainer;
