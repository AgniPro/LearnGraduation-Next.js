'use client';
import { useSession, signIn } from "next-auth/react";
import React, { useEffect } from "react";

const Protected = ({ children }) => {
  const { data: session, status } = useSession();


  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);

  if (status === "authenticated") {
    return <>{children}</>;
  }

  return <div>Loading...</div>;
};

export default Protected;