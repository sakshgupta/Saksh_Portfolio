import { defineType } from "sanity";

export default defineType ({
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
                {
                    name: 'para',
                    title: 'Para',
                    type: 'string',
                },
            ],
        },
        {
            name: 'heroimgUrl',
            title: 'HeroImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: "profilePic",
            title: "ProfilePic",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: 'resumeLink',
            title: 'ResumeLink',
            type: 'url',
            validation: (Rule:any) => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        }
    ]
})