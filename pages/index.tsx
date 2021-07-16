import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import NavbarContainer from '../components/navbar'

// export default function Home({
//   allPostsData
// }: {
//   allPostsData: {
//     date: string
//     title: string
//     id: string
//   }[]
// }) {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>[Your Self Introduction]</p>
//         <p>
//           (This is a sample website - you’ll be building a site like this in{' '}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>
//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//         <h2 className={utilStyles.headingLg}>Blog</h2>
//         <ul className={utilStyles.list}>
//           {allPostsData.map(({ id, date, title }) => (
//             <li className={utilStyles.listItem} key={id}>
//               <Link href={`/posts/${id}`}>
//                 <a>{title}</a>
//               </Link>
//               <br />
//               <small className={utilStyles.lightText}>
//                 <Date dateString={date} />
//               </small>
//             </li>
//           ))}
//         </ul>
//       </section>

// }

export default function Home() {
  return (
    <div>
      <NavbarContainer bg_enabled={true}>
        <div className="mx-auto w-screen h-full">
          <div className="flex justify-around flex-row h-full">
            <div className="flex flex-col w-2/5 h-full space-y-6">
              <div className="flex flex-row justify-center">
                <div className="bg-indigo-600 mt-32 rounded-2xl">
                  <p className="px-4 py-4 text-white font-bold text-9xl">
                    Testlet
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start bg-white bg-opacity-50 w-3/5 h-full rounded-l-3xl">
              <div className="flex flex-row mt-32 justify-end">
                <div className="transform bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400 w-11/12 h-16 rounded-l-lg hover:transition duration-500 hover:scale-110 hover:-translate-x-14">
                  <p className="font-semibold font-trial px-4 py-4 text-lg text-white">
                    Create Flashcards for all Occasions!
                  </p>
                </div>
              </div>

              <div className="flex flex-row mt-14 justify-end">
                <div className="transform bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400 w-11/12 h-16 rounded-l-lg hover:transition duration-500 hover:scale-110 hover:-translate-x-14">
                  <p className="px-4 py-4 font-semibold font-trial text-lg text-white">
                    Upload Text and Images!
                  </p>
                </div>
              </div>
              <div className="flex flex-row mt-14 justify-end">
                <button
                  className="transform bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400 w-11/12 h-32 text-white text-4xl font-semibold font-trial rounded-l-lg hover:bg-indigo-600 transition duration-500 hover:scale-110 hover:-translate-x-14"
                  onClick={() => alert('Nothing Happened')}
                >
                  Click Here to Get Started!
                </button>
              </div>
              <p className="text-5xl mt-14 text-center">
                "It's like Quizlet but Worse"
              </p>
              <p className="text-lg text-right mr-4">
                -Nadil Gamage, Loser, New York, USA
              </p>
            </div>
          </div>
        </div>
      </NavbarContainer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
