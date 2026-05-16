"use client";
import { navItems } from "@/constants/constants";
import { useAuth, useLogout } from "@/hooks/auth/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import {
  FiMenu,
  FiX,
  FiSearch,
  FiHeart,
  FiUser,
  FiShoppingCart,
  FiLogOut,
} from "react-icons/fi";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { data } = useAuth();
  const route = useRouter();
  const logout = useLogout();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          sticky top-0 z-50
          transition-all duration-300
          border-b border-[var(--border-light)]
          ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl shadow-[var(--shadow-md)]"
              : "bg-white/80 backdrop-blur-lg"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[78px] flex items-center justify-between gap-4">
            {/* =========================================
                LOGO
            ========================================= */}

            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div
                className="
                  w-11 h-11 rounded-2xl
                  flex items-center justify-center
                  shadow-[var(--shadow-md)]
                "
                style={{ background: "var(--gradient-primary)" }}
              >
                <span className="text-white text-lg font-bold">E</span>
              </div>

              <div className="hidden xs:block">
                <h2 className="font-bold text-lg leading-none">Ecommerce</h2>

                <p className="text-xs text-[var(--text-muted)] mt-1">
                  Modern Shopping
                </p>
              </div>
            </Link>

            {/* =========================================
                DESKTOP NAV
            ========================================= */}

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    relative font-medium
                    text-[var(--text-secondary)]
                    hover:text-[var(--primary-blue)]
                    transition-all duration-300
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0
                    after:bg-[var(--primary-blue)]
                    after:transition-all after:duration-300
                    hover:after:w-full
                  "
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* =========================================
                RIGHT SIDE
            ========================================= */}

            <div className="flex items-center gap-2 sm:gap-3">
              {/* SEARCH */}
              <button
                className="
                  hidden sm:flex
                  w-11 h-11 rounded-xl
                  items-center justify-center
                  hover:bg-[var(--bg-secondary)]
                  transition-all duration-300
                "
              >
                <FiSearch className="w-5 h-5" />
              </button>

              {/* WISHLIST */}
              <button
                className="
                  relative hidden sm:flex
                  w-11 h-11 rounded-xl
                  items-center justify-center
                  hover:bg-[var(--bg-secondary)]
                  transition-all duration-300
                "
              >
                <FiHeart className="w-5 h-5" />

                <span
                  className="
                    absolute -top-1 -right-1
                    w-5 h-5 rounded-full
                    text-[10px] font-bold
                    flex items-center justify-center
                    text-white
                  "
                  style={{ background: "var(--primary-red)" }}
                >
                  2
                </span>
              </button>

              {/* CART */}
              <button
                className="
                  relative
                  w-11 h-11 rounded-xl
                  flex items-center justify-center
                  hover:bg-[var(--bg-secondary)]
                  transition-all duration-300
                "
              >
                <FiShoppingCart className="w-5 h-5" />

                <span
                  className="
                    absolute -top-1 -right-1
                    w-5 h-5 rounded-full
                    text-[10px] font-bold
                    flex items-center justify-center
                    text-white
                  "
                  style={{ background: "var(--primary-blue)" }}
                >
                  3
                </span>
              </button>

              {/* USER */}
              {data?.authenticated ? (
                <button
                  onClick={logout}
                  className="
                  hidden md:flex
                  w-11 h-11 rounded-xl
                  items-center justify-center
                  hover:bg-[var(--bg-secondary)]
                  transition-all duration-300 cursor-pointer
                "
                >
                  <FiLogOut className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={() => route.push("/signin")}
                  className="
                  hidden md:flex
                  w-11 h-11 rounded-xl
                  items-center justify-center
                  hover:bg-[var(--bg-secondary)]
                  transition-all duration-300 cursor-pointer
                "
                >
                  <FiUser className="w-5 h-5" />
                </button>
              )}

              {/* SHOP BUTTON */}
              <button
                className="
                  hidden md:flex
                  px-5 py-3 rounded-xl
                  text-white font-semibold
                  shadow-[var(--shadow-md)]
                  hover:scale-105
                  active:scale-95
                  transition-all duration-300
                "
                style={{ background: "var(--gradient-primary)" }}
              >
                Shop Now
              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="
                  lg:hidden
                  w-11 h-11 rounded-xl
                  border border-[var(--border-light)]
                  flex items-center justify-center
                  hover:bg-[var(--bg-secondary)]
                  transition-all duration-300
                "
              >
                {mobileMenu ? (
                  <FiX className="w-5 h-5" />
                ) : (
                  <FiMenu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* =========================================
            MOBILE MENU
        ========================================= */}

        <div
          className={`
            lg:hidden overflow-hidden
            transition-all duration-500
            ${mobileMenu ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div
            className="
              border-t border-[var(--border-light)]
              bg-white
              px-4 py-5
              space-y-2
            "
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="
                  flex items-center justify-between
                  px-4 py-3 rounded-xl
                  text-[var(--text-secondary)]
                  hover:bg-[var(--bg-secondary)]
                  hover:text-[var(--primary-blue)]
                  font-medium
                  transition-all duration-300
                "
              >
                {item.name}
              </Link>
            ))}

            {/* MOBILE ACTIONS */}

            <div className="grid grid-cols-2 gap-3 pt-4">
              <button
                className="
                  rounded-xl py-3
                  border border-[var(--border-light)]
                  font-medium
                  hover:bg-[var(--bg-secondary)]
                  transition-all
                "
              >
                Login
              </button>

              <button
                className="
                  rounded-xl py-3
                  text-white font-semibold
                  shadow-[var(--shadow-md)]
                "
                style={{ background: "var(--gradient-primary)" }}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================
          MOBILE MENU OVERLAY
      ========================================= */}

      {mobileMenu && (
        <div
          onClick={() => setMobileMenu(false)}
          className="
            fixed inset-0 z-40
            bg-black/30 backdrop-blur-sm
            lg:hidden
          "
        />
      )}
    </>
  );
}
