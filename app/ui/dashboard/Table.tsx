import Image from "next/image";
import React from "react";
import filter from "@/public/icons/filter-results-button (1).png"
import options from "@/public/icons/ic-more-vert-18px.png"
import './Table.css'
import Options from "./Options";


const Table = () => {
  const tableHeaders = [
    "ORGANIZATION",
    "USERNAME",
    "EMAIL",
    "PHONE NUMBER",
    "DATE JOINED",
    "STATUS",
  ];

  const mobileHeaders = ["USERNAME", "STATUS"];

  const dataToDisplay = [
    {
        organization: "Dangote",
        username: "pablo mania",
        email: "pablomania@mail.com",
        phone: "08123456789",
        joined: "11-08-2021",
        status: "Active"
    },
    {
        organization: "MTN",
        username: "pablo venz",
        email: "pablovenz@mail.com",
        phone: "08987654321",
        joined: "11-08-2021",
        status: "Inactive", 
    },
    {
        organization: "GTCO",
        username: "pablo makanaki",
        email: "pablomaka@mail.com",
        phone: "08123454321",
        joined: "11-08-2021",
        status: "Blacklisted", 
    }
  ]

  return (
    <div className="usersTable">
      <table className="desktopTable">
        <thead>
          <tr>
            {tableHeaders.map((header) => {
              return (
                <th key={header} className="headers">
                  {header}
                  <Image src={filter} alt="filter" />
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {dataToDisplay.map((user, index) => {
            return (
              <tr key={index} className="tableContents border-b-2">
                <td>{user?.organization}</td>
                <td>{user?.username}</td>
                <td>{user?.email}</td>
                <td>{user?.phone}</td>
                <td>{user?.joined}</td>
                <td
                  className={`${
                    user?.status === "Inactive"
                      ? "inactive"
                      : user?.status === "Active"
                      ? "active"
                      : user?.status === "Blacklisted"
                      ? "blacklisted"
                      : "pending"
                  }`}
                >
                  {user?.status}
                </td>
                <td>
                  <div className="dropdown dropdown-left">
                  <Image src={options} alt="options" tabIndex={0} role="button" />
                    <Options />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <table className="mobileTable">
        <thead>
          <tr>
            {mobileHeaders.map((header) => {
              return (
                <th key={header} className="headers">
                  {header}
                  <Image src={filter} alt="filter" /* onClick={toggleFilter} */ />
                </th>
              );
            })}
           {/*  {showFilter && (
              <Filter
                userData={userData}
                setShowFilter={setShowFilter}
                setDataToDisplay={setDataToDisplay}
              />
            )} */}
          </tr>
        </thead>
        <tbody>
          {dataToDisplay.map((user, index) => {
            return (
              <tr key={index} className="tableContents">
                <td>{user?.username}</td>
                <td
                  className={`${
                    user?.status === "Inactive"
                      ? "inactive"
                      : user?.status === "Active"
                      ? "active"
                      : user?.status === "Blacklisted"
                      ? "blacklisted"
                      : "pending"
                  }`}
                >
                  {user?.status}
                </td>
                <td /* onClick={() => toggleDropdown(index)} */>
                  <Image src={options} alt="options" />

                  {/* {dropdownVisible === index && (
                    <Options
                      dropdownVisible={dropdownVisible}
                      setDropdownVisible={setDropdownVisible}
                      userId={user?._id}
                    />
                  )} */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
