export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      </div>
      <div className="grid grid-cols-9 gap-2 w-full max-w-[80rem] mx-auto text-sm border-black">
        <div className="col-span-2 bg-blue-400 min-h-screen w-full">Test</div>
        <div className="grid grid-cols-7 col-span-7 gap-1 h-6">
          <h2 className="text-center w-full bg-blue-950 font-semibold text-white align-middle">
            Sunday
          </h2>

          <h2 className="text-center w-full bg-blue-950 font-semibold text-white">
            Monday
          </h2>

          <h2 className="text-center w-full bg-blue-950 font-semibold text-white">
            Tuesday
          </h2>

          <h2 className="text-center w-full bg-blue-950 font-semibold text-white">
            Wednesday
          </h2>

          <h2 className="text-center w-full bg-blue-950 font-semibold text-white">
            Thursday
          </h2>

          <h2 className="text-center w-full bg-blue-950 font-semibold text-white">
            Friday
          </h2>

          <h2 className="text-center w-full bg-blue-950 font-semibold text-white">
            Saturday
          </h2>
        </div>
        <div className="grid grid-cols-7 col-span-7 gap-1 h-6">
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import AllAccountsList from "@/components/ALLAccountsList";
// import transactions from "../data/data.json";
// import TableComponent from "@/components/table/TableComponent";
// import TxTopBar from "@/components/TxTopBar";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";

// export default function Home() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [advancedSearch, setAdvancedSearch] = useState({
//     fromDate: "",
//     toDate: "",
//     fromAmount: "",
//     toAmount: "",
//     category: "",
//     transactionType: "all",
//   });
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSearchResults, setShowSearchResults] = useState(false);

//   // Filter transactions based on search criteria
//   const filteredTransactions = transactions.filter((tx) => {
//     const hasSearchCriteria =
//       searchQuery ||
//       advancedSearch.fromDate ||
//       advancedSearch.toDate ||
//       advancedSearch.fromAmount ||
//       advancedSearch.toAmount ||
//       advancedSearch.category ||
//       advancedSearch.transactionType !== "all";

//     if (!hasSearchCriteria) {
//       return true; // Return all transactions if no criteria are provided
//     }

//     const matchesDescription = searchQuery
//       ? tx.description.toLowerCase().includes(searchQuery.toLowerCase())
//       : true;

//     const matchesDate =
//       (!advancedSearch.fromDate ||
//         new Date(tx.date) >= new Date(advancedSearch.fromDate)) &&
//       (!advancedSearch.toDate ||
//         new Date(tx.date) <= new Date(advancedSearch.toDate));

//     const matchesAmount =
//       (!advancedSearch.fromAmount ||
//         tx.amount >= parseFloat(advancedSearch.fromAmount)) &&
//       (!advancedSearch.toAmount ||
//         tx.amount <= parseFloat(advancedSearch.toAmount));

//     const matchesCategory = advancedSearch.category
//       ? tx.category
//           .toLowerCase()
//           .includes(advancedSearch.category.toLowerCase())
//       : true;

//     const matchesType =
//       advancedSearch.transactionType === "all" ||
//       tx.type === advancedSearch.transactionType;

//     return (
//       matchesDescription &&
//       matchesDate &&
//       matchesAmount &&
//       matchesCategory &&
//       matchesType
//     );
//   });

//   const handleResetSearch = () => {
//     setSearchQuery("");
//     setAdvancedSearch({
//       fromDate: "",
//       toDate: "",
//       fromAmount: "",
//       toAmount: "",
//       category: "",
//       transactionType: "all",
//     });
//     setIsOpen(false); // Close the advanced options
//     setShowSearchResults(false); // Reset search results visibility
//   };

//   return (
//     <div className="w-full">
//       <div className="w-full flex justify-evenly">
//         <div className="grow bg-[#17182f]">&nbsp;</div>
//         <div className="w-full max-w-4xl mx-auto flex justify-between items-center bg-[#17182f]">
//           <TxTopBar
//             setSearchQuery={setSearchQuery}
//             setAdvancedSearch={setAdvancedSearch}
//             setIsOpen={setIsOpen}
//             isOpen={isOpen} // Pass isOpen to TxTopBar
//             setShowSearchResults={setShowSearchResults}
//           />
//         </div>
//         <div className="grow bg-[#17182f]">&nbsp;</div>
//       </div>
//       <div className="max-w-4xl mx-auto w-full">
//         {showSearchResults && ( // Only show if there are results
//           <div className="ml-4 flex justify-between items-center h-20">
//             <div>Search Results</div>
//             <Button
//               className="rounded-none underline"
//               variant="link"
//               size="sm"
//               onClick={handleResetSearch}
//             >
//               Reset Search
//             </Button>
//           </div>
//         )}
//         <div className="my-5">
//           <div className="grid grid-cols-3 gap-4">
//             <div className="col-span-1 flex justify-between items-center h-20">
//               Accounts
//             </div>
//             <div className="col-span-2">
//               <div
//                 className={`${
//                   showSearchResults ? "hidden" : ""
//                 } ml-4 flex justify-between items-center h-20`}
//               >
//                 <h2>All Transactions</h2>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="hidden md:grid md:col-span-1">
//               <AllAccountsList />
//             </div>
//             <div className="col-span-1 md:col-span-2">
//               <TableComponent txs={filteredTransactions} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
