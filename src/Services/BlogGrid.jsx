import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Registrations",
      features: [
        "GST",
        "LLP",
        "ESI",
        "EPF",
        "Firm",
        "Professional Tax",
        "Company Incorporation",
        "One Person Company (OPC)",
        "Udyam Registration (MSME)",
      ],
    },
    {
      name: "Returns",
      features: [
        "ESI",
        "EPF",
        "GST Audit",
        "PT Returns",
        "ROC Filings",
        "Salary ITR Returns",
        "Income Tax Audit",
        "Non-Taxable Audit",
        "TDS Returns & TCS Returns",
        "GST Monthly & Quarterly Returns",
        "GST Annual Returns (GSTR-9 & GSTR-9C)",
      ],
    },
    {
      name: "Other Services",
      features: [
        "Payroll",
        "CMA Report",
        "LUT Certificate",
        "CA Certification",
        "PAN Card & TAN Number",
        "Company Name Change",
        "Business Project Report",
        "Company Share Transfer",
        "Bookkeeping Accounting",
        "IT Department Compliances",
        "GST Department Compliances",
        "Digital Signature Certificate (DGFT DSC)",
        "Digital Signature Certificate (Class-3 DSC)",
      ],
    },
    {
      name: "License Registrations",
      features: [
        "Trade License",
        "Labour License",
        "Food License (FSSAI)",
        "Import Export Code (IEC)",
        "Authorized Dealer Code (AD Code)",
      ],
    },
    {
      name: "Tally",
      features: [
        "Tally Support",
        "AMC For Tally",
        "Tally On Cloud",
        "Tally New Packs",
        "Tally Implementation",
        "Tally Prime Server (TPS-9)",
        "Tally Data Cloud Backups",
        "Tally Upgrades - Single User To Multi User",
        "Tally Software Subscription (TSS) Renewal",
      ],
    },
    {
      name: "Lic Advisors (#SSLA) - Lic For You And Your Family’s Future",
      features: [
        "Term Plans",
        "Pension Plans",
        "Children Plans",
        "Whole Life Plans",
        "Retirement Plans",
        "Money Back Plans",
        "Endowment Plans",
        "Single Premium Plans",
      ],
    },
  ];

  return (
    <div className="pt-[85px] pb-[90px] px-[15px]">
      {/* Header Section */}
      <div className="w-full mx-auto p-6 flex flex-col items-center text-center">
        <h2 className="text-3xl font-semibold text-[#1a1e66]">Choose the Best Pricing Plan</h2>
        <p className="text-[16px] text-[#1a1e66] max-w-2xl">
          Select a pricing plan that best suits your needs. We offer flexible pricing for registrations, returns, and licenses.
        </p>
      </div>

      {/* Pricing Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg text-center border border-gray-200">
            <div className="py-[23px] px-[26px]">
              <h3 className="text-xl font-semibold text-[#1a1e66] text-start">{plan.name}</h3>
              <p className="text-gray-500 text-sm mt-2 mb-4 text-start">
                Get full access to our {plan.name.toLowerCase()} services.
              </p>
            </div>

            <Link to="/contact">
              <p className="text-[20px] py-2 px-[30px] font-semibold text-white bg-gradient-to-b from-[#3140fc] to-[#091394]">
                Get Started Now
              </p>
            </Link>
            
            {/* Features List */}
            <ul className="mt-4 space-y-2 px-[20px] pt-[16px] pb-[27px]">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 px-[15px] py-[14px] rounded-md text-[#1a1e66] font-semibold">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
