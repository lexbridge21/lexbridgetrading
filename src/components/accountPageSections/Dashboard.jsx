import SmartsuppLiveChat from "../SmartsuppLiveChat";
import AccountMain from "./AccountMain";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <div>
      <SideBar />
      <AccountMain />
      <SmartsuppLiveChat />
    </div>
  );
};

export default Dashboard;
