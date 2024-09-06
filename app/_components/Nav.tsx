"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { motion } from "framer-motion";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
  const activePath = usePathname();

  const menuItems = ["Home", "Projects", "About"];

  return (
    // <motion.div
    //   variants={{
    //     hidden: { opacity: 0 },
    //     visible: { opacity: 1 },
    //   }}
    //   initial="hidden"
    //   animate="visible"
    //   transition={{ duration: 0.8, delay: 0.2 }}
    // >
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden border-none"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <Link color="foreground" as={NextLink} href="/">
            <p className="font-bold  text-lg">DE</p>
            <p className="text-lg">Consult</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex gap-4 md:gap-10 lg:gap-28  xl:gap-52"
        justify="center"
      >
        <NavbarContent className="hidden sm:flex gap-12 " justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem
              key={item}
              isActive={
                activePath ===
                `${item === "Home" ? "/" : `/${item.toLowerCase()}`}`
              }
            >
              <Link
                color="foreground"
                size="lg"
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                as={NextLink}
              >
                {item}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarItem className="hidden sm:flex ">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="gap-9">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    // </motion.div>
  );
}
