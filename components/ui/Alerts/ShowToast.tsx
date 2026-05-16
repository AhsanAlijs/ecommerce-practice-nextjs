"use client";

import { toastStyles } from "@/constants/constants";
import { ShowToastProps } from "@/types";
import toast from "react-hot-toast";

export const ShowToast = ({
    type,
    message,
}: ShowToastProps) => {
    switch (type) {
        case "success":
            toast.success(message, { style: toastStyles.success });
            break;
        case "error":
            toast.error(message, { style: toastStyles.error });
            break;

        default:
            toast(message);
    }
};
