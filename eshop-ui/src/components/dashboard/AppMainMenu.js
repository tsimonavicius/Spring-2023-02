import * as React from "react";
import {AdminPanelSettings, Home, Info} from "@mui/icons-material";
import AppleIcon from "@mui/icons-material/Apple";
import MenuItem from "./MenuItem";
import { Translation } from "react-i18next";

export const AppMainMenu = (
  <Translation>
    {(t, { i18n }) => (
      <>
        <MenuItem label={t("mHome")} link="/" icon={<Home />} />
        <MenuItem label={t("mProducts")} matchSubPaths link="/products" icon={<AppleIcon />} />
        <MenuItem label={t("mAbout")} link="/about" icon={<Info />} />
        <MenuItem label="Admin console" link="/admin" icon={<AdminPanelSettings />} />
      </>
    )}
  </Translation>
);
