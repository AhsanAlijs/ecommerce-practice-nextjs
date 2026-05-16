import { api } from "@/lib/axios";
import { SignupPayload } from "@/types";

// Signup user
export const signup = async (data: SignupPayload) => {
    const res = await api.post("/auth/signup", data);
    return res.data;
};

// Login user
export const login = async (data: { email: string; password: string }) => {
    const res = await api.post("/auth/signin", data);
    return res.data;
};