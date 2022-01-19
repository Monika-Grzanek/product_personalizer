import styles from '../Product/Product.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = props => {
    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
                {props.colors.map(color => <li key={color}><button type="button" className={clsx(props.prepareColorClassName(color), color === props.currentColor && styles.active)} onClick={() => props.setCurrentColor(color)} />{color}</li>)}
            </ul>
        </div>
    )
}

OptionColor.propTypes = {
    colors: PropTypes.array.isRequired,
    prepareColorClassName: PropTypes.func.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired
}

export default OptionColor;