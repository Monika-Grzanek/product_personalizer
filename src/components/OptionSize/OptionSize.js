import styles from '../Product/Product.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';


const OptionSize = props => {
    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
                {props.sizes.map(size => <li key={props.sizes.name}><button type="button" className={clsx(size === props.currentSize && styles.active)} onClick={() => props.setCurrentSize(size.name)}>{size.name}</button></li>)}
            </ul>
        </div>
    )
}

OptionSize.propType = {
    sizes: PropTypes.array.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired
}

export default OptionSize;