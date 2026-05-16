import { api } from "@/lib/axios";

// Send OTP
export const sendOtp = async (email: string) => {
    const res = await api.post("/auth/forgot-password", { email });
    return res.data;
};

// Verify OTP
export const verifyOtp = async (data: {
    email: string;
    otp: string;
}) => {
    const res = await api.post("/auth/verify-otp", data);
    return res.data;
};

// Reset Password
export const resetPassword = async (data: {
    email: string;
    newPassword: string;
}) => {
    const res = await api.post("/auth/reset-password", data);
    return res.data;
};