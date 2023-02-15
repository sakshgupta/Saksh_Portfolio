interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image{
    _type: "image";
    assets: {
        _ref: string;
        _type: "reference";
    };
}

export interface About extends SanityBody {
    _type: "about";
    title: string;
    description: array;
    heroimgUrl: Image;
    profilePic: Image;
    resumeLink: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    name: string;
    bgColor: string;
    order: number;
    icon: Image;
}

export interface Experience extends SanityBody {
    _type: "experience";
    year: string;
    works: array;
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
    order: number;
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    description: string;
    projectLink: string;
    codeLink: string;
    imgUrl: Image;
    order: number;
    tags: array;
}