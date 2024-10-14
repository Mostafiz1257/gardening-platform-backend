
import { Payment } from "./payment.model";

import { v4 as uuidv4 } from "uuid"; // Import the UUID function
import { initiatePayment, verifyPayment } from "./payment.utils";
import { User } from "../user/user.model";
// import { User } from "../user/user.model";

const createPaymentIntoDB = async (
  totalAmount: number,
  customerName: string,
  customerEmail: string
) => {
  // Generate a unique transaction ID using uuid
  const transactionId = uuidv4();

  const premium = new Payment({
    transactionId, // Use the generated transactionId
    totalAmount,
    customerName,
    customerEmail,
  });

  await premium.save();

  const paymentData = {
    transactionId, // Use the generated transactionId
    totalAmount,
    customerName,
    customerEmail,
    customerAddress: "Dhaka, Bangladesh",
    customerPhone: "+880-17788372355",
  };

  const res = await initiatePayment(paymentData);
  return res;
};

const updateAndConfirmation = async (transactionId: string) => {
  const verifyResponse = await verifyPayment(transactionId);
  let result;
  if (verifyResponse && verifyResponse?.pay_status === "Successful") {
    result = await Payment.findOneAndUpdate(
      { transactionId },
      { isConfirmed: "paid" },
      { new: true, runValidators: true }
    );
    result = await User.findOneAndUpdate(
      { email: verifyResponse?.cus_email },
      { isPremium: true, verified: true },
      { new: true, runValidators: true }
    );
  }
  return result;
};

export const PaymentServices = {
  createPaymentIntoDB,
  updateAndConfirmation,
};