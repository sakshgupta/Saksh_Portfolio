import { About } from "typings";

export const fetchAbouts = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAbout`);
        const data = await res.json();
        const about: About[] = data.abouts;
        return about;
    } catch (error) {
        console.error(error);
        return [];
    }
}