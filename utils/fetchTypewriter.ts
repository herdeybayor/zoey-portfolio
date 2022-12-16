import { Typewriter } from "../typings";

export const fetchTypewriter = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getTypewriter`
    );

    const data = await res.json();
    const typewriter: Typewriter[] = data.typewriter;

    // console.log("fetching", typewriter);

    return typewriter;
};
