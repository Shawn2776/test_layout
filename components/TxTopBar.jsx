"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FaCaretDown, FaSearch } from "react-icons/fa";
import AdvancedOptions from "./AdvancedOptions";
import AddTransaction from "./AddTransaction";

const TxTopBar = ({
  setSearchQuery,
  setAdvancedSearch,
  setIsOpen,
  isOpen,
  setShowSearchResults,
}) => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center gap-1">
        <div className="flex items-center gap-2 h-12 p-2 w-full">
          <span className="text-xs font-bold">
            Search by
            <br />
            Description
          </span>
          <div className="flex items-center justify-start w-full">
            <Input
              type="text"
              className="bg-white rounded-none"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Description"
            />
            <Button className="rounded-none" size="sm">
              <FaSearch />
            </Button>
          </div>
        </div>
        <div>
          <Button
            className="rounded-none"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            Advanced <FaCaretDown className={isOpen ? "rotate-180" : ""} />
          </Button>
        </div>

        <div className="w-full flex justify-end">
          <AddTransaction />
        </div>
      </div>
      {isOpen && (
        <div className="w-full">
          <AdvancedOptions
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            setAdvancedSearch={setAdvancedSearch}
            setSearchQuery={setSearchQuery}
            setShowSearchResults={setShowSearchResults}
          />
        </div>
      )}
    </div>
  );
};

export default TxTopBar;
