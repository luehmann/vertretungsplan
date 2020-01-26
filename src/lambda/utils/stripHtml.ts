import { AllHtmlEntities } from 'html-entities'

const { decode } = new AllHtmlEntities()

const stripHtml = (html: string): string => decode(html.replace(/<[^>]+>/g, ''))

export { stripHtml }
