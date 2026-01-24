import React, { useState, useEffect } from 'react';
import Container from '../Container';
import FormInputField from '../FormInputField';
import Button from '../Button';
import Toast from '../Toast/Toast';
import * as styles from './ContactForm.module.css';

const ContactForm = ({ formName = 'contact' }) => {
    // Form State
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        captchaAnswer: '',
    });
    const [captcha, setCaptcha] = useState({ a: 0, b: 0 });
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
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

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': formName,
                ...formData,
            }),
        })
            .then(() => {
                setShowToast(true);
                setFormData({
                    name: '',
                    phone: '',
                    address: '',
                    captchaAnswer: '',
                });
                // Reset captcha
                setCaptcha({
                    a: Math.floor(Math.random() * 10),
                    b: Math.floor(Math.random() * 10),
                });
            })
            .catch((error) => alert(error));
    };

    return (
        <div className={styles.formContainer}>
            <Toast
                show={showToast}
                message="Thông tin đã được gửi thành công!"
                onClose={() => setShowToast(false)}
            />
            <Container size={'large'}>
                <div className={styles.glassBox}>
                    <h4>Thông tin khách hàng</h4>
                    <form
                        name={formName}
                        method="POST"
                        data-netlify="true"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="form-name" value={formName} />

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
                                Liên Hệ
                            </Button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default ContactForm;
