"use client";

import { Avatar } from "@/components/base/avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/base/dropdown";
import {
  Navbar,
  NavbarDivider,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/components/base/navbar";
import {
  ArrowRightStartOnRectangleIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  PlusIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants";
import { Button } from "./base/button";

const AuthNavbar = () => {
  const pathname = usePathname();
  return (
    <Navbar>
      <Logo />
      <NavbarDivider className="max-lg:hidden" />
      <NavbarSection className="max-lg:hidden">
        {navItems.map(({ label, url }) => (
          <Link
            className={`px-4 py-2 text-sm transition-all rounded-lg ${
              pathname === url ? "bg-black/5" : "hover:bg-black/5"
            }`}
            key={label}
            href={url}
          >
            {label}
          </Link>
        ))}
      </NavbarSection>
      <NavbarSpacer />
      <NavbarSection>
        <NavbarItem href="/search" aria-label="Search">
          <MagnifyingGlassIcon />
        </NavbarItem>
        <Dropdown>
          <DropdownButton as={NavbarItem}>
            <Avatar
              className={"bg-white border"}
              src="https://api.dicebear.com/9.x/croodles-neutral/svg"
              square
            />
          </DropdownButton>
          <DropdownMenu className="min-w-64" anchor="bottom end">
            <DropdownItem href="/my-profile">
              <UserIcon />
              <DropdownLabel>My profile</DropdownLabel>
            </DropdownItem>
            <DropdownItem href="/settings">
              <Cog8ToothIcon />
              <DropdownLabel>Settings</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href="/share-feedback">
              <LightBulbIcon />
              <DropdownLabel>Share feedback</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href="/logout">
              <ArrowRightStartOnRectangleIcon />
              <DropdownLabel>Sign out</DropdownLabel>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarSection>
    </Navbar>
  );
};

export default AuthNavbar;
