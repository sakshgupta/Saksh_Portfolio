import { defineType } from "sanity";

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },

        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'projectLink',
            title: 'Project Link',
            type: 'url',
        },
        {
            name: 'codeLink',
            title: 'Code Link',
            type: 'url',
        },
        {
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
        },

        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    name: 'tag',
                    title: 'Tag',
                    type: 'string',
                },
            ],
        },
    ],
})
