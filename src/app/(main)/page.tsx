import { Metadata } from 'next';
import Link from 'next/link';
import JobCard from '@/components/JobCard';
import ResultCard from '@/components/ResultCard';
import AdmitCardCard from '@/components/AdmitCardCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContentManager from '@/components/ContentManager';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Job Alert - Latest Government Jobs, Results & Admit Cards 2024',
  description: 'Find latest government jobs, examination results, and admit cards. Stay updated with upcoming job notifications, UPSC, SSC, Railway, and Banking jobs.',
  keywords: 'government jobs, latest jobs, UPSC jobs, SSC jobs, railway jobs, banking jobs, job alerts, exam results, admit cards',
  openGraph: {
    title: 'Job Alert - Latest Government Jobs, Results & Admit Cards 2024',
    description: 'Find latest government jobs, examination results, and admit cards. Stay updated with upcoming job notifications.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Job Alert',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Job Alert - Latest Government Jobs, Results & Admit Cards 2024',
    description: 'Find latest government jobs, examination results, and admit cards. Stay updated with upcoming job notifications.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

// Sample data (replace with API calls in production)
const featuredJobs = [
  {
    id: '1',
    title: 'UPSC Civil Services Examination 2024',
    organization: 'Union Public Service Commission',
    location: 'All India',
    salary: 'As per 7th Pay Commission',
    lastDate: '2024-03-15',
    createdAt: '2024-02-14',
    applyLink: '/jobs/upsc-civil-services-2024',
  },
  // Add more jobs...
];

const latestResults = [
  {
    id: '1',
    title: 'UPSC Civil Services Prelims Result 2023',
    organization: 'Union Public Service Commission',
    examDate: '2023-05-28',
    resultDate: '2023-06-12',
    totalQualified: 14624,
    createdAt: '2024-02-14',
  },
  // Add more results...
];

const upcomingAdmitCards = [
  {
    id: '1',
    title: 'UPSC Civil Services Prelims Admit Card 2024',
    organization: 'Union Public Service Commission',
    examDate: '2024-05-26',
    downloadStartDate: '2024-05-15',
    lastDateToDownload: '2024-05-25',
    createdAt: '2024-02-14',
  },
  // Add more admit cards...
];

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Daily Updates Bulletin */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="text-red-600 text-2xl mr-3">📢</div>
              <h2 className="text-xl font-bold text-gray-800">Today's Updates</h2>
              <span className="ml-2 text-sm text-gray-500" id="todayDate"></span>
            </div>
            <ContentManager />
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link href="/daily-updates" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All Daily Updates →
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/latest-jobs" className="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">📋</div>
              <h3 className="font-semibold text-blue-600">Latest Jobs</h3>
            </Link>
            <Link href="/admit-cards" className="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition">
              <div className="text-green-600 text-2xl mb-2">🎫</div>
              <h3 className="font-semibold text-green-600">Admit Cards</h3>
            </Link>
            <Link href="/results" className="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition">
              <div className="text-purple-600 text-2xl mb-2">📊</div>
              <h3 className="font-semibold text-purple-600">Results</h3>
            </Link>
            <Link href="/answer-keys" className="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition">
              <div className="text-orange-600 text-2xl mb-2">🔑</div>
              <h3 className="font-semibold text-orange-600">Answer Keys</h3>
            </Link>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Jobs</h2>
            <Link href="/latest-jobs" className="text-blue-600 hover:text-blue-800">View All →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* UPSC Civil Services */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-blue-600">
                  <Link href="/jobs/upsc-civil-services-2024" className="hover:underline">UPSC Civil Services 2024</Link>
                </h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">New</span>
              </div>
              <div className="space-y-2 text-gray-600">
                <p><strong>Organization:</strong> Union Public Service Commission</p>
                <p><strong>Total Posts:</strong> 1105</p>
                <p><strong>Last Date:</strong> 05 March 2024</p>
                <p><strong>Qualification:</strong> Bachelor's Degree</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <Link href="/jobs/upsc-civil-services-2024" className="text-blue-600 hover:text-blue-800">View Details →</Link>
                <span className="text-sm text-gray-500">Posted: 14 Feb 2024</span>
              </div>
            </div>

            {/* SSC CGL */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-blue-600">
                  <Link href="/jobs/ssc-cgl-2024" className="hover:underline">SSC CGL 2024</Link>
                </h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">New</span>
              </div>
              <div className="space-y-2 text-gray-600">
                <p><strong>Organization:</strong> Staff Selection Commission</p>
                <p><strong>Total Posts:</strong> 7500</p>
                <p><strong>Last Date:</strong> 24 March 2024</p>
                <p><strong>Qualification:</strong> Bachelor's Degree</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <Link href="/jobs/ssc-cgl-2024" className="text-blue-600 hover:text-blue-800">View Details →</Link>
                <span className="text-sm text-gray-500">Posted: 13 Feb 2024</span>
              </div>
            </div>

            {/* IBPS PO */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-blue-600">
                  <Link href="/jobs/ibps-po-2024" className="hover:underline">IBPS PO 2024</Link>
                </h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">New</span>
              </div>
              <div className="space-y-2 text-gray-600">
                <p><strong>Organization:</strong> Institute of Banking Personnel Selection</p>
                <p><strong>Total Posts:</strong> 2000</p>
                <p><strong>Last Date:</strong> 28 March 2024</p>
                <p><strong>Qualification:</strong> Bachelor's Degree</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <Link href="/jobs/ibps-po-2024" className="text-blue-600 hover:text-blue-800">View Details →</Link>
                <span className="text-sm text-gray-500">Posted: 15 Feb 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Updates Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Results */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="text-green-600 text-2xl mr-3">📊</div>
                <h3 className="text-xl font-semibold text-gray-800">Latest Results</h3>
              </div>
              <div id="latestResults" className="space-y-4">
                {/* Results will be loaded here */}
              </div>
              <Link href="/results" className="text-blue-600 hover:text-blue-800 text-sm mt-4 inline-block">
                View All Results →
              </Link>
            </div>

            {/* Admit Cards */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="text-blue-600 text-2xl mr-3">🎫</div>
                <h3 className="text-xl font-semibold text-gray-800">Latest Admit Cards</h3>
              </div>
              <div id="latestAdmitCards" className="space-y-4">
                {/* Admit cards will be loaded here */}
              </div>
              <Link href="/admit-cards" className="text-blue-600 hover:text-blue-800 text-sm mt-4 inline-block">
                View All Admit Cards →
              </Link>
            </div>

            {/* Answer Keys */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="text-purple-600 text-2xl mr-3">🔑</div>
                <h3 className="text-xl font-semibold text-gray-800">Latest Answer Keys</h3>
              </div>
              <div id="latestAnswerKeys" className="space-y-4">
                {/* Answer keys will be loaded here */}
              </div>
              <Link href="/answer-keys" className="text-blue-600 hover:text-blue-800 text-sm mt-4 inline-block">
                View All Answer Keys →
              </Link>
            </div>
          </div>
        </section>

        {/* Job Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse Jobs by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/category/engineering" className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition">
              <h3 className="font-semibold text-blue-600 mb-2">Engineering Jobs</h3>
              <p className="text-sm text-gray-600">500+ Jobs</p>
            </Link>
            <Link href="/category/medical" className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition">
              <h3 className="font-semibold text-blue-600 mb-2">Medical Jobs</h3>
              <p className="text-sm text-gray-600">300+ Jobs</p>
            </Link>
            <Link href="/category/teaching" className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition">
              <h3 className="font-semibold text-blue-600 mb-2">Teaching Jobs</h3>
              <p className="text-sm text-gray-600">400+ Jobs</p>
            </Link>
            <Link href="/category/banking" className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition">
              <h3 className="font-semibold text-blue-600 mb-2">Banking Jobs</h3>
              <p className="text-sm text-gray-600">200+ Jobs</p>
            </Link>
          </div>
        </section>

        {/* Study Material */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Study Material</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Syllabus */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="text-blue-600 text-2xl mr-3">📚</div>
                <h3 className="text-xl font-semibold text-gray-800">Syllabus</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/syllabus/upsc-civil-services" className="flex justify-between items-center hover:text-blue-600">
                    <span>UPSC Civil Services</span>
                    <span className="text-sm text-gray-500">Updated</span>
                  </Link>
                </li>
                <li>
                  <Link href="/syllabus/ssc-cgl" className="flex justify-between items-center hover:text-blue-600">
                    <span>SSC CGL</span>
                    <span className="text-sm text-gray-500">Updated</span>
                  </Link>
                </li>
                <li>
                  <Link href="/syllabus/ibps-po" className="flex justify-between items-center hover:text-blue-600">
                    <span>IBPS PO</span>
                    <span className="text-sm text-gray-500">Updated</span>
                  </Link>
                </li>
              </ul>
              <Link href="/syllabus" className="text-blue-600 hover:text-blue-800 text-sm mt-4 inline-block">
                View All Syllabus →
              </Link>
            </div>

            {/* Previous Year Papers */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="text-green-600 text-2xl mr-3">📝</div>
                <h3 className="text-xl font-semibold text-gray-800">Previous Year Papers</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/papers/upsc-civil-services" className="flex justify-between items-center hover:text-blue-600">
                    <span>UPSC Civil Services</span>
                    <span className="text-sm text-gray-500">Last 10 Years</span>
                  </Link>
                </li>
                <li>
                  <Link href="/papers/ssc-cgl" className="flex justify-between items-center hover:text-blue-600">
                    <span>SSC CGL</span>
                    <span className="text-sm text-gray-500">Last 10 Years</span>
                  </Link>
                </li>
                <li>
                  <Link href="/papers/ibps-po" className="flex justify-between items-center hover:text-blue-600">
                    <span>IBPS PO</span>
                    <span className="text-sm text-gray-500">Last 10 Years</span>
                  </Link>
                </li>
              </ul>
              <Link href="/papers" className="text-blue-600 hover:text-blue-800 text-sm mt-4 inline-block">
                View All Papers →
              </Link>
            </div>

            {/* Certificate Verification */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="text-purple-600 text-2xl mr-3">✅</div>
                <h3 className="text-xl font-semibold text-gray-800">Certificate Verification</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/verification/upsc" className="flex justify-between items-center hover:text-blue-600">
                    <span>UPSC Document Verification</span>
                    <span className="text-sm text-gray-500">Active</span>
                  </Link>
                </li>
                <li>
                  <Link href="/verification/ssc" className="flex justify-between items-center hover:text-blue-600">
                    <span>SSC Document Verification</span>
                    <span className="text-sm text-gray-500">Active</span>
                  </Link>
                </li>
                <li>
                  <Link href="/verification/ibps" className="flex justify-between items-center hover:text-blue-600">
                    <span>IBPS Document Verification</span>
                    <span className="text-sm text-gray-500">Active</span>
                  </Link>
                </li>
              </ul>
              <Link href="/verification" className="text-blue-600 hover:text-blue-800 text-sm mt-4 inline-block">
                View All Verifications →
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Organizations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Organizations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/organization/upsc" className="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition">
              <img src="/images/upsc-logo.png" alt="UPSC Logo" className="h-12 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-600">UPSC</h3>
            </Link>
            <Link href="/organization/ssc" className="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition">
              <img src="/images/ssc-logo.png" alt="SSC Logo" className="h-12 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-600">SSC</h3>
            </Link>
            <Link href="/organization/ibps" className="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition">
              <img src="/images/ibps-logo.png" alt="IBPS Logo" className="h-12 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-600">IBPS</h3>
            </Link>
            <Link href="/organization/railway" className="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition">
              <img src="/images/railway-logo.png" alt="Railway Logo" className="h-12 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-600">Railway</h3>
            </Link>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
