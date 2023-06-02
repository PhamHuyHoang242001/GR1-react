import React, { useState } from "react";
import { Pagination, Select } from "antd";
import lungArticelData from "../data/lungArticelData";
import LungArticle from "./LungArticle";
import SeachArticle from "../search/SeachArticle";

const { Option } = Select;

function PaginationLung() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterValue, setFilterValue] = useState("All");
  const [searchData, setSearchData] = useState(lungArticelData);
  const [isSearch, setIsSearch] = useState(false);

  const pageSize = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (value) => {
    setFilterValue(value);
    setIsSearch(false);
    setCurrentPage(1);
  };

  const handleSearchDataChange = (data) => {
    setSearchData(data);
    setIsSearch(true);
    setCurrentPage(1);
  };

  const filteredArticles = lungArticelData.filter((lung) => {
    if (filterValue === "All") {
      return true;
    }
    return lung.Category === filterValue;
  });

  const currentArticle = filteredArticles.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const totalItems = isSearch ? searchData.length : filteredArticles.length;

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div style={{ flex: 1 }}>
          <SeachArticle
            lungArticles={lungArticelData}
            setSearchData={handleSearchDataChange}
            setIsSearch={setIsSearch}
            paginate={handlePageChange}
          />
        </div>
        <p
          style={{
            flex: 1,
            textAlign: "center",
            position: "fixed",
            top: "0",
            right: "0",
          }}
        >
          {totalItems}
        </p>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label
            style={{ marginRight: "10px", fontWeight: "bold" }}
            htmlFor="filter"
          >
            Filter by Category:
          </label>
          <Select
            id="filter"
            style={{ width: "200px" }}
            value={filterValue}
            onChange={handleFilterChange}
          >
            <Option value="All">All</Option>
            <Option value="1">Liên quan đến gen đột biến</Option>
            <Option value="0">Không liên quan đến gen đột biến</Option>
          </Select>
        </div>
      </div>
      <LungArticle article={currentArticle} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={totalItems}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default PaginationLung;
