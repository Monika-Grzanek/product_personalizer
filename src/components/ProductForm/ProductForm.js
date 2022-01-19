import Button from '../Button/Button';
import styles from '../Product/Product.module.scss';
import OptionSize from '../OptionSize/OptionSize.js';
import OptionColor from '../OptionColor/OptionColor.js';
import PropTypes from 'prop-types';

const ProductForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} />
            <OptionColor colors={props.colors} prepareColorClassName={props.prepareColorClassName} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
            <Button className={styles.button}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </form>
    )
}

ProductForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    sizes: PropTypes.array.isRequired,
    colors: PropTypes.array.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    prepareColorClassName: PropTypes.func.isRequired
}

export default ProductForm;