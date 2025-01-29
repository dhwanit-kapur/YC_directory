import { defineQuery } from "next-sanity";

export const STARTUPS_QUERIES = defineQuery(`
    *[_type == "startup" && defined(slug.current)] | order(_createdAt desc){
  _id,
  title, 
  slug,
  category,
  _createdAt,
  author -> {
    _id,
    name,
    image,
    bio
  },
  views,
  description,
  image
}`);
