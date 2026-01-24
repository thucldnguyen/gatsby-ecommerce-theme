import React, { useContext, useState } from 'react';
import { navigate } from 'gatsby';

import Container from '../components/Container';
import Layout from '../components/Layout/Layout';
import Button from '../components/Button';
import FormInputField from '../components/FormInputField';
import CurrencyFormatter from '../components/CurrencyFormatter';
import { CartContext } from '../context/CartProvider';

import * as styles from './checkout.module.css';

const CheckoutPage = () => {
    const { cart, cartTotal, clearCart } = useContext(CartContext);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        captchaAnswer: '',
    });
    const [captcha, setCaptcha] = useState({ a: 0, b: 0 });
    const [submitted, setSubmitted] = useState(false);

    React.useEffect(() => {
        setCaptcha({
            a: Math.floor(Math.random() * 10),
            b: Math.floor(Math.random() * 10),
        });
    }, []);

    const encode = (data) => {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    };

    const handleChange = (id, value) => {
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (parseInt(formData.captchaAnswer) !== captcha.a + captcha.b) {
            alert('Captcha không đúng. Vui lòng thử lại.');
            return;
        }

        const cartDetails = cart
            .map((item) => `${item.name} (x${item.quantity}) - ${item.price * item.quantity} VND`)
            .join('\n');

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': 'checkout',
                ...formData,
                orderSummary: cartDetails,
                totalPrice: cartTotal,
            }),
        })
            .then(() => {
                setSubmitted(true);
                clearCart();
            })
            .catch((error) => alert(error));
    };

    if (submitted) {
        return (
            <Layout>
                <Container size={'medium'}>
                    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
                        <h2>Cảm ơn bạn đã đặt hàng!</h2>
                        <p>Chúng tôi đã nhận được thông tin và sẽ gọi lại cho bạn sớm nhất để xác nhận đơn hàng.</p>
                        <Button onClick={() => navigate('/')} level={'primary'}>Về trang chủ</Button>
                    </div>
                </Container>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className={styles.contentContainer}>
                <Container size={'large'} spacing={'min'}>
                    <div className={styles.summaryContainer}>
                        <h3>Thanh toán</h3>
                        <div className={styles.cartContainer}>
                            <div className={`${styles.cartItemsContainer} ${styles.glassBox}`}>
                                <h4>Thông tin giao hàng</h4>
                                <form
                                    name="checkout"
                                    method="POST"
                                    data-netlify="true"
                                    onSubmit={handleSubmit}
                                    className={styles.checkoutForm}
                                >
                                    <input type="hidden" name="form-name" value="checkout" />
                                    <input type="hidden" name="orderSummary" />
                                    <input type="hidden" name="totalPrice" />

                                    <div style={{ marginBottom: '20px' }}>
                                        <FormInputField
                                            id="name"
                                            labelName="Họ và Tên"
                                            value={formData.name}
                                            handleChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div style={{ marginBottom: '20px' }}>
                                        <FormInputField
                                            id="phone"
                                            labelName="Số điện thoại"
                                            value={formData.phone}
                                            handleChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div style={{ marginBottom: '20px' }}>
                                        <FormInputField
                                            id="address"
                                            labelName="Địa chỉ giao hàng"
                                            value={formData.address}
                                            handleChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#eee', borderRadius: '4px' }}>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                                            Xác nhận bạn không phải là robot: {captcha.a} + {captcha.b} = ?
                                        </label>
                                        <FormInputField
                                            id="captchaAnswer"
                                            labelName="Câu trả lời"
                                            value={formData.captchaAnswer}
                                            handleChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div style={{ marginTop: '30px' }}>
                                        <Button type="submit" level={'primary'} fullWidth>
                                            Xác nhận đặt hàng
                                        </Button>
                                    </div>
                                </form>
                            </div>

                            <div className={styles.glassBox} style={{ flex: 1 }}>
                                <h4>Đơn hàng của bạn</h4>
                                {cart.map((item) => (
                                    <div key={item.productCode} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                        <span>{item.name} x {item.quantity}</span>
                                        <CurrencyFormatter amount={item.price * item.quantity} />
                                    </div>
                                ))}
                                <hr style={{ margin: '20px 0', opacity: 0.3 }} />
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                                    <span>Tổng cộng</span>
                                    <CurrencyFormatter amount={cartTotal} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
    );
};

export default CheckoutPage;
