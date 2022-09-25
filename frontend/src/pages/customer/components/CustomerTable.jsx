import ButtonAppointment from "../../../components/ButtonAppointment/ButtonAppointment";
import React from "react";
import { useState } from "react";
import CustomerModal from "./CustomerModal";
const CustomerTable = ({ dataUsers }) => {
  const [showModal, setShowModal] = useState(false);
  const [employee, setEmployee] = useState({});
  //Data for creating thead of table
  const tHead = ["ID", "FIRST NAME", "LAST NAME", "EMAIL", ""];

  const handleClick = (employee) => {
    setShowModal(true);
    setEmployee(employee);
  };

  return (
    <div>
      {" "}
      <div className=" overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                {tHead.map((user, index) => (
                  <th
                    key={index}
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-head text-left  font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    {user}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataUsers.map((user) => {
                const { _id, first_name, last_name, email } = user;
                return (
                  <tr key={_id.$oid}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{_id}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {first_name}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {last_name}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {email}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <ButtonAppointment onClick={() => handleClick(user)} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <CustomerModal
        setShowModal={setShowModal}
        showModal={showModal}
        employee={employee}
      />
    </div>
  );
};

export default CustomerTable;
