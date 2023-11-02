import PropTypes from 'prop-types';

const Cart = ({price}) => {
    return (
        <div className="w-3/12 bg-white p-6">
            
            <hr />
            <h4>Total Credit Hour : 13</h4>
            <hr/>
            <h3 className='font-semibold text-xl'>Total Price : {price} USD</h3>
        </div>
    );
};

Cart.propTypes = {
    price: PropTypes.number,
};

export default Cart;