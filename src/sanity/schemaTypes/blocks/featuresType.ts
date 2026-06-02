import { defineArrayMember, defineField, defineType } from "sanity";

export const featuresType = defineType({
  name: "features",
  title: "Features",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "features",
      type: "array",
      of: [
        defineArrayMember({
          name: "feature",
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "string",
            }),
            defineField({
              name: "text",
              type: "string",
            }),
          ],
        }),
      ],
    }),
  ],
});
