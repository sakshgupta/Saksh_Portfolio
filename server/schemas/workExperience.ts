import { defineType } from "sanity";

export default defineType({
    name: 'workExperience',
    title: 'Work Experience',
    type: 'document',
    fields: [
        {
            name: 'role',
            title: 'Role',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'string'
        }
    ]
})