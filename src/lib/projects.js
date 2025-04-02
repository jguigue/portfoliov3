import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const projectsDirectory = path.join(process.cwd(), 'src/data/projects')

export function getSortedProjectsData(locale = 'fr') {
  // Lire tous les fichiers du répertoire
  const fileNames = fs.readdirSync(projectsDirectory)
  const allData = [];

  fileNames.forEach(fileName => {
    // Récupérer l'ID à partir du nom de fichier
    const id = fileName.replace(/\.md$/, '')
    
    // Lire le contenu du fichier Markdown
    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Utiliser gray-matter pour parser le contenu
    const matterResult = matter(fileContents)

    // Vérifier que les données nécessaires existent
    const title = matterResult.data.title?.[locale] || null;
    const category = matterResult.data.category?.[locale] || null;
    const image = matterResult.data.image || null;
    
    // N'ajouter que si les données essentielles sont présentes
    if (title && category && image) {
      allData.push({
        id,
        title,
        image,
        category
      });
    }
  });

  // Trier les projets
  return allData.sort((a, b) => {
    if (a.id > b.id) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllProjectsIds({ locales }) {
  const fileNames = fs.readdirSync(projectsDirectory);
  
  // Pour chaque fichier, créer un path pour chaque locale
  return fileNames.flatMap(fileName => {
    const id = fileName.replace(/\.md$/, '');
    
    return locales.map(locale => ({
      params: { id },
      locale: locale // Ajouter la locale
    }));
  });
}

export async function getProjectData(id, locale = 'fr') {
  const fullPath = path.join(projectsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Vérifier et traiter les données avec des valeurs par défaut
  const description = matterResult.data.description || { enabled: 0, content: {} }
  const gallery = matterResult.data.gallery || { enabled: 0, items: [] }
  const description2 = matterResult.data.description2 || { enabled: 0, content: {}, button: null }
  const gallery2 = matterResult.data.gallery2 || { enabled: 0, items: [] }

  // Traiter les détails en vérifiant l'existence des propriétés
  const processedDetails = (matterResult.data.details || []).map(detail => {
    if (detail.label === '$category') {
      return {
        label: locale === 'fr' ? "Catégorie :" : "Category:",
        value: matterResult.data.category?.[locale] || null
      }
    }
    return {
      label: detail.label?.[locale] || '',
      value: detail.value || ''
    }
  }).filter(detail => detail.label !== null && detail.value !== null)

  // S'assurer que toutes les propriétés sont définies avec des valeurs par défaut
  return {
    id,
    contentHtml: contentHtml || '',
    title: matterResult.data.title?.[locale] || '',
    image: matterResult.data.image || '',
    category: matterResult.data.category?.[locale] || '',
    fullWidth: matterResult.data.fullWidth || false,
    details: processedDetails,
    description: {
      enabled: description.enabled || 0,
      content: description.content?.[locale] || ''
    },
    gallery: {
      enabled: gallery.enabled || 0,
      items: (gallery.items || []).map(item => ({
        image: item.image || '',
        alt: item.alt?.[locale] || ''
      }))
    },
    description2: {
      enabled: description2.enabled || 0,
      heading: description2.heading?.[locale] || '',
      content: description2.content?.[locale] || '',
      button: description2.button ? {
        label: description2.button.label?.[locale] || '',
        link: description2.button.link || '',
        target: description2.button.target || '_self'
      } : null
    },
    gallery2: {
      enabled: gallery2.enabled || 0,
      items: (gallery2.items || []).map(item => ({
        image: item.image || '',
        alt: item.alt?.[locale] || ''
      }))
    }
  }
}

export function getRelatedProjects(current_id, locale = 'fr') {
  const fileNames = fs.readdirSync(projectsDirectory)
  const allData = []

  fileNames.forEach(fileName => {
    const id = fileName.replace(/\.md$/, '')

    if (id !== current_id) {
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      // Vérifier que les données nécessaires existent
      const title = matterResult.data.title?.[locale] || null;
      const category = matterResult.data.category?.[locale] || null;
      const image = matterResult.data.image || null;

      // N'ajouter que si les données essentielles sont présentes
      if (title && category && image) {
        allData.push({
          id,
          title,
          image,
          category
        });
      }
    }
  });

  return allData.sort((a, b) => {
    if (a.category > b.category) {
      return 1
    } else {
      return -1
    }
  })
}