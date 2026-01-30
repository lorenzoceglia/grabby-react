import Demo from "@/components/apps/Demo";

export const APPS = {
	demo: Demo,
} as const;

export type AppsType = keyof typeof APPS;
