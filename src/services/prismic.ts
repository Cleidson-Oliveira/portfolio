import * as prismic from '@prismicio/client'

export const repositoryName = "cleidson-portfolio";

export const client = prismic.createClient(repositoryName, {
  accessToken: import.meta.env.VITE_PRISMIC_ACCESS_TOKEN,
})