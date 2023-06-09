import Link from 'next/link';
import { useRouter } from 'next/router';
import PageWrapper from '../../../components/shared/PageWrapper';

const Dashboard = () => {
  const router = useRouter();

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen py-5 pt-5 mx-4 sm:pt-0 sm:mx-2">
        <div>Dashboard</div>
        <button className="p-4 text-white bg-blue-500 rounded btn btn-secondary ">
          {' '}
          log out
        </button>

        <Link href="/payment">
          <button className="p-4 my-10 text-white bg-orange-500 rounded btn btn-secondary">
            {' '}
            pay to be listed as a tutor
          </button>
        </Link>
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
