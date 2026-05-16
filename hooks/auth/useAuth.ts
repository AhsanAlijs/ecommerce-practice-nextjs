import { api } from "@/lib/axios";
import { login, signup } from "@/services/authService";
import { resetPassword, sendOtp, verifyOtp } from "@/services/otpService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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

// Auth Me
export const useAuth = () => {
    return useQuery({
        queryKey: ["auth-user"],
        queryFn: async () => {
            const res = await api.get("/auth/me");
            return res.data;
        },
        retry: false,
        staleTime: 1000 * 60 * 5,
    });
};

export const useLogout = () => {
    const queryClient = useQueryClient();

    return async () => {
        await api.post("/auth/logout");
        queryClient.invalidateQueries({ queryKey: ["auth-user"] });
        window.location.href = "/signin";
    };
};