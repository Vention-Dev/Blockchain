"use client";
import { useEffect } from "react";
import classes from "@/styles/page.module.css";
import { useNotification } from "@/hooks/useNotification";
import BlockChain from "@/components/BlockChain";
import PageTemplate from "@/components/PageTemplate";

export default function Home() {
  const { NotificationHandler } = useNotification();
  useEffect(() => {
    NotificationHandler("Welcome", "Welcome to the Rainbow Bridge", "Info");
  }, []);

  return (
    <PageTemplate>
      <div className={classes["container"]}>
        <div className={classes["box"]}>
          <BlockChain />
        </div>
      </div>
    </PageTemplate>
  );
}
