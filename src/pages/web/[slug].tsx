import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import AppDetailPage from '../../components/detail/AppDetailPage'
import { projectsData } from '../../data/profile'
import { getProjectDetail } from '../../data/projectDetails'
import { Project, ProjectDetail } from '../../types'

interface WebDetailRouteProps {
  project: Project
  detail: ProjectDetail
}

export default function WebDetailRoute({ project, detail }: WebDetailRouteProps) {
  return (
    <>
      <Head>
        <title>{project.title} | ケイタMax</title>
        <meta name="description" content={project.description} />
      </Head>
      <AppDetailPage project={project} detail={detail} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = projectsData
    .filter((project) => project.category === 'web' && project.detailSlug)
    .map((project) => ({ params: { slug: project.detailSlug as string } }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<WebDetailRouteProps> = ({ params }) => {
  const slug = params?.slug as string
  const project = projectsData.find(
    (item) => item.category === 'web' && item.detailSlug === slug
  )
  const detail = getProjectDetail(slug)

  if (!project || !detail) {
    return { notFound: true }
  }

  return { props: { project, detail } }
}
