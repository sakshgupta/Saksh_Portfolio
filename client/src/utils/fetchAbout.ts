import { About } from "typings";

export const fetchAbouts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAbout`);

    const data = await res.json();
    const about: About[] = data.abouts;
    
    return about;
}