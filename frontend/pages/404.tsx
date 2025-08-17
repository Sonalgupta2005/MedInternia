import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  if (typeof window !== 'undefined') {
    window.location.replace('/');
    return null;
  }
  return null;
}
