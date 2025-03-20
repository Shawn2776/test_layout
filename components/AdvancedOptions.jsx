"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { Input } from "./ui/input";

const AdvancedOptions = ({
  setIsOpen,
  isOpen,
  setAdvancedSearch,
  setSearchQuery,
  setShowSearchResults,
}) => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [category, setCategory] = useState("");
  const [transactionType, setTransactionType] = useState("all");

  const handleSearch = () => {
    setAdvancedSearch({
      fromDate,
      toDate,
      fromAmount,
      toAmount,
      category,
      transactionType,
    });
    setIsOpen(false); // Close the advanced options
    setShowSearchResults(true);
  };

  const handleClear = () => {
    setFromDate("");
    setToDate("");
    setFromAmount("");
    setToAmount("");
    setCategory("");
    setTransactionType("all");

    setSearchQuery("");
  };

  const handleXClose = () => {
    setIsOpen(false);
    setSearchQuery(""); // Clear the search query when closing
    setAdvancedSearch({
      fromDate: "",
      toDate: "",
      fromAmount: "",
      toAmount: "",
      category: "",
      transactionType: "all",
    });
  };

  return (
    <div className="p-4 w-full flex gap-5 flex-col dark:text-black">
      <div className="w-full flex justify-between items-center dark:text-white">
        <p className="font-semibold">Advanced Search Options:</p>

        <Button
          variant="ghost"
          size="lg"
          className="cursor-pointer font-semibold"
          onClick={handleXClose}
        >
          X
        </Button>
      </div>

      {/* Date Range */}
      <div className="flex w-full justify-evenly gap-5">
        <div className="w-full bg-white p-2">
          <p>Date Range</p>
          <p>&nbsp;</p>
          <p className="flex justify-between items-center">
            <span>90 Days</span>
            <span>
              <FaAngleDown />
            </span>
          </p>
        </div>
        <div className="w-full bg-white p-2">
          <p className="text-sm">From Date</p>
          <p className="text-red-900 text-md">MM/DD/YYYY</p>
          <p className="flex justify-between text-blue-700 items-center">
            {/* <span>12/17/2024</span> */}
            <span className="w-full">
              {/* <MdOutlineCalendarMonth /> */}
              <Input
                className="w-full"
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </span>
          </p>
        </div>
        <div className="w-full bg-white p-2">
          <p className="text-sm">To Date</p>
          <p className="text-red-900 text-md">MM/DD/YYYY</p>
          <p className="flex justify-between text-blue-700 items-center">
            {/* <span>03/17/2025</span> */}
            <span className="w-full">
              {/* <MdOutlineCalendarMonth /> */}
              <Input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </span>
          </p>
        </div>
      </div>

      {/* Amount Range */}
      <div className="w-full grid grid-cols-5 gap-5">
        <div className="w-full bg-white col-span-3 flex justify-between p-2">
          <div className="border-r p-2 w-full">
            <p>From Amount</p>
            <p className="flex items-center">
              $
              <Input
                type="number"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                placeholder="Min amount"
              />
            </p>
          </div>
          <div className="p-2 w-full">
            <p>To Amount</p>
            <p className="flex items-center">
              $
              <Input
                type="number"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                placeholder="Max amount"
              />
            </p>
          </div>
        </div>

        {/* Category */}
        <div className="w-full bg-white col-span-2 p-4">
          <p>Category</p>
          <p className="flex items-center">
            <Input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category"
            />
          </p>
        </div>
      </div>

      {/* Transaction Type */}
      <div className="grid grid-cols-6 w-full">
        <div className="col-span-3 bg-white pt-2 pr-2">
          <p className="text-sm pl-2">Transaction Type</p>
          <div className="flex justify-evenly pt-4">
            <div className="text-start w-full border-r border-b-4 border-b-blue-500">
              <span className="px-2">All</span>
            </div>
            <div className=" px-2 text-start w-full border-r">Deposits</div>
            <div className=" px-2 text-start w-full ">Withdrawals</div>
          </div>
        </div>
        <div className="col-span-1"></div>

        {/* Buttons */}
        <div className="col-span-2 gap-1 flex justify-end self-end">
          <Button
            onClick={handleClear}
            variant="outline"
            className="outline bg-gray-100/50 border-2 border-red-500 font-bold text-red-500 hover:text-white rounded-none cursor-pointer hover:bg-red-500"
          >
            Clear
          </Button>
          <Button
            onClick={handleSearch}
            variant="outline"
            className="outline bg-gray-100/50 border-2 font-bold border-blue-500 text-blue-500 hover:text-white rounded-none cursor-pointer hover:bg-blue-500"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedOptions;
