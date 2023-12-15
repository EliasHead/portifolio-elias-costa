import { PageIntroduction } from '../components/pages/projects/page-introduction'
import { ProjectsList } from '../components/pages/projects/projects-list'
import { ProjectPageData } from '../types/page-info'
import { fetchHygraphQuery } from '../utils/fetch-hygraph-query'

const getPageData = async (): Promise<ProjectPageData> => {
  const query = `
  query ProjectsQuery {
    projects {
      shortDescription
      slug
      title
      thumbnail {
        url
      }
      technologies {
        name
      }
    }
  }
  `

  return fetchHygraphQuery(query, 60 * 60 * 24)
}

const Project = async () => {
  const { projects } = await getPageData()
  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projects} />
    </>
  )
}

export default Project
