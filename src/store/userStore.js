import api from "@/lib/api";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import { create } from "zustand";


export const useUserStore = create((set) => ({
    user: null,
    loading: false,
    error: null,
    message: null,
    isAuthenticated: false,
    organization: null,
    token: null,

    login: async (Credentials) => {
        const { email, password } = Credentials;
        if (!email) {
            toast.error("Please enter your email address");
            set({ error: "Please enter your email address" });
            return;
        }
        if (!password) {
            toast.error("Please enter your password");
            set({ error: "Please enter your password" });
            return;
        }
        try {
            set({ loading: true, error: null, message: null });
            const response = await api.post("/auth/login", Credentials);
            console.log("Login response:", response.data);
            const { userId, name, email: userEmail, avatar, token } = response.data.user;
            localStorage.setItem("token", token);
            set({
                message: response.data.message,
                token,
                user: {
                    userId,
                    name,
                    email: userEmail,
                    avatar,
                },
                isAuthenticated: true,
            })
            toast.success(response.data.message || "Login successful!");
            set({ message: response.data.message || "Login successful!" });
            setTimeout(() => {
                redirect('/')
            }, 2000);
        } catch (error) {
            console.error("Login error:", error);
            set({ error: error.response.data.message });
            toast.error(error.response.data.message || "Login failed. Please try again.");
        } finally {
            set({ loading: false });
        }

    },
    logout: () => {
        localStorage.removeItem("token");
        set({ user: null, isAuthenticated: false, token: null, message: null, error: null });
        toast.success("Logout successful!");
    },
    register: async (userData) => {
        const { name, email, password } = userData;
        if (!name) {
            toast.error("Please enter your name");
            set({ error: "Please enter your name" });
            return;
        }
        if (!email) {
            toast.error("Please enter your email address");
            set({ error: "Please enter your email address" });
            return;
        }
        if (!password) {
            toast.error("Please enter your password");
            set({ error: "Please enter your password" });
            return;
        }
        const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (!passwordRegex.test(password)) {
            toast.error("Weak password: must meet complexity requirements.");
            set({ error: "Weak password: must include 1 uppercase, 1 lowercase, 1 number, and 1 special character, with at least 8 characters.", });
            return;
        }
        // API Call
        try {
            set({ loading: true, error: null, message: null });
            const response = await api.post("/auth/signup", userData);
            set({ message: response.data.message });
            toast.success(response.data.message || "Registration successful!");
            return true; // Indicate success
        } catch (error) {
            console.error("Registration error:", error);
            set({ error: error.response?.data?.message || "Registration failed" });
            toast.error(error.response?.data?.message || "Registration failed. Please try again.");
            return false; // Indicate failure
        } finally {
            set({ loading: false });
        }
    },
    fetchUser: async () => {
        try {
            set({ loading: true, error: null, message: null });
            console.log("Fetching user data...");

            const token = localStorage.getItem("token");
            if (!token) {
                set({ user: null, isAuthenticated: false });
                return;
            }

            const response = await api.get("/user/me");
            const { user, organization } = response.data.data;

            set({
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    avatar: user.avatar,
                    isVerified: user.isVerified,
                },
                organization,
                isAuthenticated: true,
            });
            toast.success(response.data.message || "User fetched successfully.");
        } catch (error) {
            console.error("Fetch user error:", error);
            set({
                error: error.response?.data?.message || "Failed to fetch user",
                user: null,
                isAuthenticated: false,
            });
            toast.error(error.response?.data?.message || "Failed to fetch user. Please try again.");
        } finally {
            set({ loading: false });
        }
    },
}));