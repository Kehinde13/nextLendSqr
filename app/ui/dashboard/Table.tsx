"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import filter from "@/public/icons/filter-results-button (1).png";
import options from "@/public/icons/ic-more-vert-18px.png";
import "./Table.css";
import Options from "./Options";
import Filter from "./Filter";
import { fetchCustomers } from "@/app/lib/Fetchdata";
import { CustomerField } from "@/app/lib/definitions";

const Table = () => {
  const [dropdownVisible, setDropdownVisible] = useState<
    string | boolean | number | undefined
  >(false);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [customers, setCustomers] = useState<CustomerField[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const tableHeaders = [
    "ORGANIZATION",
    "USERNAME",
    "EMAIL",
    "PHONE NUMBER",
    "DATE JOINED",
    "STATUS",
  ];

  const mobileHeaders = ["USERNAME", "STATUS"];

  const toggleDropdown = (id: string | number | undefined) => {
    setDropdownVisible(dropdownVisible === id ? false : id);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const customers = await fetchCustomers();
        setCustomers(customers);
      } catch (err) {
        setError("Failed to fetch customer data.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);
  

  return (
    <div className="usersTable">
      <table className="desktopTable">
        <thead>
          <tr>
            {tableHeaders.map((header) => {
              return (
                <th key={header} className="headers">
                  {header}
                  <Image src={filter} alt="filter" onClick={toggleFilter} />
                </th>
              );
            })}
          </tr>
          {showFilter && <Filter />}
        </thead>
        <tbody>
          {customers.map((user, index) => {
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
                <td onClick={() => toggleDropdown(user?.id)}>
                  <Image src={options} alt="options" />

                  {dropdownVisible === user?.id && (
                    <Options
                      dropdownVisible={dropdownVisible}
                      setDropdownVisible={setDropdownVisible}
                      userId={user?.id}
                    />
                  )}
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
                  <Image src={filter} alt="filter" onClick={toggleFilter} />
                </th>
              );
            })}
          </tr>
          {showFilter && <Filter />}
        </thead>
        <tbody>
          {customers.map((user, index) => {
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
                <td onClick={() => toggleDropdown(index)}>
                  <Image src={options} alt="options" />

                  {dropdownVisible === index && (
                    <Options
                      dropdownVisible={dropdownVisible}
                      setDropdownVisible={setDropdownVisible}
                      userId={user?.id}
                    />
                  )}
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
