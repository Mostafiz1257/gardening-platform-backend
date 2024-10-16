/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";


export const initiatePayment = async (paymentData: any) => {
  const response = await axios.post(process.env.PAYMENT_URL!, {
    store_id: process.env.STORE_ID,
    signature_key:process.env.SIGNATURE_KEY,
    tran_id:paymentData.transactionId,
    success_url: `https://gardening-platform-backend-pi.vercel.app/api/payment/confirmation?transactionId=${paymentData?.transactionId}&status=success`,
    fail_url: `https://gardening-platform-backend-pi.vercel.app/api/payment/confirmation?status=failed`,
    cancel_url: "https://gardening-platform-client.vercel.app",
    amount: paymentData.totalAmount,
    currency: "BDT",
    desc: "Merchant Registration Payment",
    cus_name: paymentData.customerName,
    cus_email: paymentData.customerEmail,
    cus_add1: paymentData.customerAddress,
    cus_add2: "N/A",
    cus_city: "N/A",
    cus_state: "N/A",
    cus_postcode: "N/A",
    cus_country: "Bangladesh",
    cus_phone: paymentData.customerPhone,
    type: "json",
  });
  return response.data;
};

export const verifyPayment = async (tnxId: string) => {
  try {
    const response = await axios.get(process.env.VERIFY_URL!, {
      params: {
        store_id:  process.env.STORE_ID,
        signature_key: process.env.SIGNATURE_KEY,
        type: "json",
        request_id: tnxId,
      },
    });

    return response.data;
  } catch (err) {
    throw new Error("Payment validation failed!");
  }
};