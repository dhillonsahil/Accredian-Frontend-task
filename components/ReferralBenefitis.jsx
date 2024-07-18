import React from "react";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

const ReferralBenefitis = () => {
  return (
    <div className="my-10">
      <div className="text-center">
        <h1 className={`text-xl ${poppinsFont.className}`}>
          What Are The <span className="text-blue-600">Referral Benefits?</span>
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="w-3/4 bg-white rounded-lg shadow-md ml-8 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-blue-700 font-bold">Programs</h2>
          </div>
          <table className="min-w-full bg-white border rounded-lg overflow-hidden">
            <thead className="bg-blue-100">
              <tr>
                <th className="py-2 px-4 text-left text-gray-700">Programs</th>
                <th className="py-2 px-4 text-left text-gray-700">
                  Referrer Bonus
                </th>
                <th className="py-2 px-4 text-left text-gray-700">
                  Referee Bonus
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="py-2 px-4 border-b">
                  Professional Certificate Program in Product Management
                </td>
                <td className="py-2 px-4 border-b">₹ 7,000</td>
                <td className="py-2 px-4 border-b">₹ 9,000</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  PG Certificate Program in Strategic Product Management
                </td>
                <td className="py-2 px-4 border-b">₹ 9,000</td>
                <td className="py-2 px-4 border-b">₹ 11,000</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  Executive Program in Data Driven Product Management
                </td>
                <td className="py-2 px-4 border-b">₹ 10,000</td>
                <td className="py-2 px-4 border-b">₹ 10,000</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  Executive Program in Product Management and Digital
                  Transformation
                </td>
                <td className="py-2 px-4 border-b">₹ 10,000</td>
                <td className="py-2 px-4 border-b">₹ 10,000</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  Executive Program in Product Management
                </td>
                <td className="py-2 px-4 border-b">₹ 10,000</td>
                <td className="py-2 px-4 border-b">₹ 10,000</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  Advanced Certification in Product Management
                </td>
                <td className="py-2 px-4 border-b">₹ 10,000</td>
                <td className="py-2 px-4 border-b">₹ 10,000</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  Executive Program in Product Management and Project Management
                </td>
                <td className="py-2 px-4 border-b">₹ 10,000</td>
                <td className="py-2 px-4 border-b">₹ 10,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReferralBenefitis;
