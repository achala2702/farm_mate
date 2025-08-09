"use client";

export async function GetUserInfo() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/me`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    return null;
  }

  const text = await res.text();
  if(!text) {
    return null;
  } 

  const data = JSON.parse(text)

  return data;
}
