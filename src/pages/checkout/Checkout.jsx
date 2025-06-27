import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Button, Form, Input } from 'antd';
import axios from "axios";
import { clearCart } from "@/redux/features/cart";

const BOT_TOKEN = "7772754635:AAHu_Kg7NNjBdTvVoSHU5Tam9wuok1f8VqY"
const USER_ID = "5164389809"

const Checkout = () => {
    const cart = useSelector((state) => state.cart.value);
    const dispatch = useDispatch()
    if(!cart.length) {
        return <Navigate replace to={"/cart"}/>
    }
    const onFinish = values => {
        let text = ""
        text += "Buyurtmalar %0A %0A"
        text += `FirstName: ${values.FirstName} %0A`
        text += `LastName: ${values.LastName} %0A`
        text += `StreetAddress: ${values.StreetAddress} %0A`
        text += `TownCity: ${values.TownCity} %0A`
        text += `Phone: ${values.Phone} %0A`
        text += `EmailAddress: ${values.EmailAddress} %0A %0A`

        cart.forEach((product)=> {
            text += `Nomi: ${product.title} %0A`
            text += `Nomi: ${product.quantity} %0A`
            text += `Nomi: ${product.price} %0A %0A`
        })
        text += `Jami: ${cart.reduce((sum, item) => Math.floor(sum + (item.price * item.quantity)) , 0)}$`
        axios.get(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${text}`)
        .then(res => {
            dispatch(clearCart())
        })
    };
      
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-6">Billing details</h2>
          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
        >
            <div className="flex gap-8">
            <Form.Item
            label="First Name"
            name="FirstName"
            rules={[{ required: true, message: 'Please input your firstName!'}]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Last Name"
            name="LastName"
            rules={[{ required: true, message: 'Please input your lastName!'}]}
            >
            <Input />
            </Form.Item>
            </div>

            <Form.Item
            label="Street address"
            name="StreetAddress"
            rules={[{ required: true, message: 'Please input your Street address!'}]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Town / City"
            name="TownCity"
            rules={[{ required: true, message: 'Please input your Town / City!'}]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Phone Number"
            name="Phone"
            rules={[{ required: true, message: 'Please input your Phone!'}]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Email address"
            name="EmailAddress"
            rules={[{ required: true, message: 'Please input your Email address!'}]}
            >
            <Input />
            </Form.Item>

            <Form.Item label={null}>
            <Button className="w-full" type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-2">Product</h2>
          <div className="flex justify-between text-sm border-b pb-2">
            <span>Asgaard sofa x {cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
            <span>Rs. {cart.reduce((sum, item) => Math.floor(sum + (item.price * item.quantity)) , 0)}</span>
          </div>
          <div className="flex justify-between text-sm border-b pb-2">
            <span>Subtotal</span>
            <span>Rs. {cart.reduce((sum, item) => Math.floor(sum + (item.price * item.quantity)) , 0)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-[#B88E2F] border-b pb-2">
            <span>Total</span>
            <span>Rs.{cart.reduce((sum, item) => Math.floor(sum + (item.price * item.quantity)) , 0)}</span>
          </div>
          <div className="space-y-4 mt-6 text-sm">
            <div>
              <label className="flex items-center gap-2"><input type="radio" name="payment" defaultChecked />Direct Bank Transfer</label>
              <p className="text-gray-500 mt-1 text-xs"> Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account. </p>
            </div>
            <div>
              <label className="flex items-center gap-2 opacity-50"><input type="radio" name="payment" disabled />Direct Bank Transfer</label>
            </div>
            <div>
              <label className="flex items-center gap-2 opacity-50"><input type="radio" name="payment" disabled />Cash On Delivery</label>
            </div>
            <p className="text-xs text-gray-600">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}<span className="font-semibold">privacy policy</span>.</p>
          </div>
          <div className="w-80 mx-auto">
          <button className="text-[#000000] py-3 px-12 rounded-[15px] font-medium border">Place order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Checkout);
