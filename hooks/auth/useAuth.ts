import { login, signup } from "@/services/authService";
import { resetPassword, sendOtp, verifyOtp } from "@/services/otpService";
import { useMutation } from "@tanstack/react-query";

// SIGNUP
export const useSignup = () => {
    return useMutation({
        mutationFn: signup,
    });
};

// LOGIN
export const useLogin = () => {
    return useMutation({
        mutationFn: login,
    });
};

// SEND OTP
export const useSendOtp = () => {
    return useMutation({
        mutationFn: sendOtp,
    });
};

// VERIFY OTP
export const useVerifyOtp = () => {
    return useMutation({
        mutationFn: verifyOtp,
    });
};

// reset password
export const useResetPassword = () => {
    return useMutation({
        mutationFn: resetPassword,
    });
};