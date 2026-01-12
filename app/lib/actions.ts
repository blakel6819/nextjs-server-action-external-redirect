"use server";

import { redirect } from "next/navigation";

export async function redirectExternallyWithSameHost(redirectUrl: string, delayInMilliseconds: number) {
  await new Promise(resolve => setTimeout(resolve, delayInMilliseconds));
  redirect(redirectUrl);
}