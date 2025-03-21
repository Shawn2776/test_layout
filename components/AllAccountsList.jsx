import AccountSidebar from "./AccountSidebar";
import { BsDot } from "react-icons/bs";

const AllAccountsList = () => {
  const title = "Central Checking";
  const amount = "0.03";
  const acctNumber = "3019";

  return (
    <div className="">
      <div className="">
        <div className="flex justify-between items-center w-full">
          <h2 className="flex gap-1 items-center text-red-500">
            <BsDot /> Checking
          </h2>
          <p className="">$0.03</p>
        </div>
        <p className="">1 account</p>

        {/* Account Section */}
        <AccountSidebar info={{ title, amount, acctNumber }} />
      </div>
    </div>
  );
};

export default AllAccountsList;
