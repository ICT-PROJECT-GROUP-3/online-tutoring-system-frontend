import { MdMessage } from 'react-icons/md';
import MessageNotification from '../../../components/pagecomponents/student_dashboard/Notifications/msg-notify';
import RecommendationNotification from '../../../components/pagecomponents/student_dashboard/Notifications/rec-notify';
import VideoChatNotification from '../../../components/pagecomponents/student_dashboard/Notifications/vid-notify';
import Layout from './layout';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifications = () => {
  const notify = () =>
    toast.info('Wow so easy!', {
      icon: ({ theme, type }) => (
        <div className="p-1 w-6 h-6 bg-blue-500 rounded-[3px]">
          <MdMessage className="w-4 h-4 text-[#eee9e2]" />
        </div>
      ),
    });

  return (
    <>
      <Layout>
        <div className="flex flex-col w-full justify-items-center">
          <h1 className="text-xl sm:text-2xl md:text-4xl text-center text-[#1c1c1c] my-8">
            Notifications
          </h1>
          <div className="m-4">
            <div>
              <div
                className="w-full max-w-5xl p-4"
                style={{ boxShadow: '0px 10px 10px 0px #ebe8e4' }}
              >
                All
              </div>
              <div className="bg-[#eee9e2] w-auto max-w-5xl">
                <MessageNotification />
                <VideoChatNotification />
                <RecommendationNotification />
              </div>
            </div>
          </div>
          <div>
            <button onClick={notify}>Send Message</button>
            <ToastContainer />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default notifications;
