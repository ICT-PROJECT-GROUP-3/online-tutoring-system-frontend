import MessageNotification from '../../../components/pagecomponents/student_dashboard/Notifications/msg-notify';
import RecommendationNotification from '../../../components/pagecomponents/student_dashboard/Notifications/rec-notify';
import VideoChatNotification from '../../../components/pagecomponents/student_dashboard/Notifications/vid-notify';
import Layout from './layout';

const notifications = () => {
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
        </div>
      </Layout>
    </>
  );
};

export default notifications;
