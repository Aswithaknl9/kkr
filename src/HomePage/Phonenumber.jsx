import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (value, country) => {
    setPhoneNumber(value);

    
    const numericPhone = value.replace(/\D/g, "");
    const countryCodeLength = country?.dialCode?.length || 0;
    const actualNumber = numericPhone.slice(countryCodeLength);

    setIsValid(actualNumber.length >= 10);
  };

  return (
    <div className="flex flex-col">
      <PhoneInput
        country="in"
        value={phoneNumber}
        onChange={handleChange}
        inputProps={{
          name: "phone",
          required: true,
          autoFocus: false,
        }}
        enableSearch={true}
        disableCountryCode={false}
        disableDropdown={true}
        containerStyle={{ marginTop: "5px", width: "100%" }}
        inputStyle={{
          width: "100%",
          paddingLeft: "50px",
          height: "40px",
          border: isValid ? "1px solid #ccc" : "1px solid red",
        }}
      />
      
      {!isValid && phoneNumber.replace(/\D/g, "").length > 2 && (
        <span className="text-red-500 text-sm mt-1">
          Enter a valid phone number (at least 10 digits).
        </span>
      )}
    </div>
  );
};

export default PhoneNumber;
