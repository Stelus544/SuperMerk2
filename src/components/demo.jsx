import React, { useEffect, useState, useRef } from "react";

function ExpandedBilling() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("Select a country");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const countryDropdownRef = useRef(null);
  const [showCountryOptions, setShowCountryOptions] = useState(false);
  const [showCreditCardSection, setShowCreditCardSection] = useState(false);

  useEffect(() => {
    // Check form validity whenever form fields change
    setFormValid(
      name !== "" &&
        email !== "" &&
        city !== "" &&
        zipCode !== "" &&
        selectedCountry !== "Select a country" &&
        (selectedPaymentMethod !== "Credit Card" ||
          (cardNumber !== "" && expirationDate !== "" && securityCode !== "")),
    );
  }, [
    name,
    email,
    city,
    zipCode,
    cardNumber,
    expirationDate,
    securityCode,
    selectedPaymentMethod,
    selectedCountry,
  ]);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulating checkout process with a timeout
    setTimeout(() => {
      // Reset state after checkout process is completed
      setIsCheckingOut(false);
      console.log("Checkout completed!");
    }, 2000); // Change the timeout value as needed
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setShowCountryOptions(false); // Hide the country options after selection
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here
    if (!name || !email || !city || !zipCode || !selectedCountry) {
      alert("Please fill in all required fields.");
      return;
    }
    if (selectedPaymentMethod === "Credit Card") {
      if (!validateCreditCard(cardNumber)) {
        alert("Please enter a valid credit card number.");
        return;
      }
    }
    // If all validations pass, proceed to checkout
    handleCheckout();
  };

  const validateCreditCard = (cardNumber) => {
    // Basic credit card validation (Luhn algorithm)
    const digits = cardNumber.replace(/\D/g, "").split("").reverse();
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      let digit = parseInt(digits[i]);
      if (i % 2 === 1) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
    }
    return sum % 10 === 0;
  };

  const countries = [
    "United States of America",
    "Canada",
    "United Kingdom",
    "Australia",
    // Add more country options as needed
  ];

  const toggleCountryOptions = () => {
    setShowCountryOptions(!showCountryOptions);
  };

  const handleClickOutside = (event) => {
    if (
      countryDropdownRef.current &&
      !countryDropdownRef.current.contains(event.target)
    ) {
      setShowCountryOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col px-11 py-12 bg-white rounded-xl max-w-[570px] max-md:px-5">
      <div className="text-xl font-bold tracking-tight leading-8 text-gray-900 max-md:max-w-full">
        Billing Details
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-10 text-base font-bold tracking-normal leading-6 text-gray-900 max-md:max-w-full">
          First & Last Name
        </div>
        <div className="flex flex-col justify-center mt-4 text-base tracking-normal leading-6 text-gray-900 bg-white rounded-lg max-md:max-w-full">
          <input
            type="text"
            placeholder="i.e. John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="justify-center items-start px-5 py-5 rounded-lg border border-gray-200 border-solid max-md:pr-5 max-md:max-w-full"
          />
        </div>
        <div className="mt-7 text-base font-bold tracking-normal leading-6 text-gray-900 max-md:max-w-full">
          Email Address
        </div>
        <div className="flex flex-col justify-center mt-4 text-base tracking-normal leading-6 text-gray-900 bg-white rounded-lg max-md:max-w-full">
          <input
            type="email"
            placeholder="i.e. john@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="justify-center items-start p-5 rounded-lg border border-gray-200 border-solid max-md:pr-5 max-md:max-w-full"
          />
        </div>
        <div className="mt-8 text-base font-bold tracking-normal leading-6 text-gray-900 max-md:max-w-full">
          Country
        </div>
        <div className="relative" ref={countryDropdownRef}>
          <div
            onClick={toggleCountryOptions}
            className="flex justify-between items-center px-5 py-4 rounded-lg border border-gray-200 border-solid max-md:pr-5 max-md:max-w-full cursor-pointer"
          >
            <div>{selectedCountry}</div>
            <div className="flex-shrink-0 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 8.14a.5.5 0 01.7 0L10 12.29l4.25-4.15a.5.5 0 01.7.7l-4.5 4.4a.5.5 0 01-.7 0l-4.5-4.4a.5.5 0 010-.7z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {showCountryOptions && (
            <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg max-h-36 overflow-auto border border-gray-200 border-solid">
              {countries.map((country) => (
                <div
                  key={country}
                  className="cursor-pointer px-5 py-2 hover:bg-gray-100"
                  onClick={() => handleCountryChange(country)}
                >
                  {country}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-5 mt-7 text-base tracking-normal leading-6 text-gray-900 max-md:flex-wrap">
          <div className="flex flex-col flex-1 whitespace-nowrap">
            <div className="font-bold">State</div>
            <div className="flex flex-col justify-center mt-3 bg-white rounded-lg">
              <input
                type="text"
                placeholder="State"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="justify-center items-start p-5 rounded-lg border border-gray-200 border-solid max-md:pr-5"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="font-bold">ZIP Code</div>
            <div className="flex flex-col justify-center mt-3 bg-white rounded-lg">
              <input
                type="text"
                placeholder="Zip Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="justify-center items-start p-5 rounded-lg border border-gray-200 border-solid max-md:pr-5"
              />
            </div>
          </div>
        </div>
        <div className="mt-16 text-xl font-bold tracking-tight leading-8 text-gray-900 max-md:mt-10 max-md:max-w-full">
          Payment Method
        </div>
        <div className="flex gap-5 py-3 pr-1.5 pl-4 mt-8 w-full bg-white rounded-md border border-gray-200 border-solid max-md:flex-wrap max-md:max-w-full cursor-pointer">
          <input
            type="radio"
            id="creditCard"
            name="paymentMethod"
            value="Credit Card"
            checked={selectedPaymentMethod === "Credit Card"}
            onChange={() => handlePaymentMethodChange("Credit Card")}
            className="my-auto" // Add this class to align with the image
          />
          <label
            htmlFor="creditCard"
            className="flex gap-2.5 items-center cursor-pointer" // Adjust alignment to center
          >
            <div className="flex items-center">
              {" "}
              {/* Wrap text and image inside a flex container */}
              <div className="text-base font-bold tracking-normal leading-6 text-gray-900">
                Credit Cards
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4db0d52251e2e85e15017213b714600ca26e64c54ff09930ee211678706a17a1?apiKey=597363a3080546f9b072bf59bebbfd17&"
                className="grow shrink-0 aspect-[5.26] basis-0 w-fit"
                style={{ maxWidth: "75%" }}
              />
            </div>
          </label>
        </div>
        {selectedPaymentMethod === "Credit Card" && (
          <>
            <div className="mt-8 text-base font-bold tracking-normal leading-6 text-gray-900 max-md:max-w-full">
              Card Number
            </div>
            <div className="flex gap-5 px-3.5 py-2.5 mt-3 text-base tracking-tight bg-white rounded-md border border-gray-200 border-solid text-zinc-500 max-md:flex-wrap max-md:max-w-full">
              <input
                type="text"
                placeholder="11154 5665 6464 565"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="flex-auto my-auto"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4db0d52251e2e85e15017213b714600ca26e64c54ff09930ee211678706a17a1?apiKey=597363a3080546f9b072bf59bebbfd17&"
                className="shrink-0 w-[113x] w-[226px]"
              />
            </div>
            <div className="flex gap-5 mt-7 max-md:flex-wrap">
              <div className="flex flex-col flex-1 text-base tracking-normal leading-6 text-gray-900">
                <div className="font-bold">Expire Date </div>
                <input
                  type="text"
                  placeholder="Month/Year"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                  className="items-start px-4 pt-6 pb-3.5 mt-2.5 whitespace-nowrap bg-white rounded-md border border-gray-200 border-solid max-md:pr-5"
                />
              </div>
              <div className="flex flex-col flex-1">
                <div className="text-base font-bold tracking-normal leading-6 text-gray-900">
                  Security Code
                </div>
                <div className="flex gap-5 justify-between px-4 py-5 mt-2.5 text-base tracking-tight whitespace-nowrap bg-white rounded-md border border-gray-200 border-solid text-zinc-500">
                  <input
                    type="text"
                    placeholder="PIN"
                    value={securityCode}
                    onChange={(e) => setSecurityCode(e.target.value)}
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/79fa10e218d94b267d4eda5bad5edcd53f1b42ae491353d9d520d938583eec2f?apiKey=597363a3080546f9b072bf59bebbfd17&"
                    className="shrink-0 w-3.5 aspect-square"
                  />
                </div>
              </div>
            </div>
          </>
        )}
        <div className="flex gap-5 justify-between px-5 py-4 mt-9 w-full text-base font-bold tracking-normal leading-6 text-gray-900 whitespace-nowrap bg-white rounded-md border border-gray-200 border-solid max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-2.5 my-auto">
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              value="Paypal"
              checked={selectedPaymentMethod === "Paypal"}
              onChange={() => handlePaymentMethodChange("Paypal")}
            />
            <label htmlFor="paypal" className="ml-2">
              Paypal
            </label>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/756d0d7d2cce75e81a9eb66888e66133b11cd90d6368354a8a83f397a48a2418?apiKey=597363a3080546f9b072bf59bebbfd17&"
            className="shrink-0 max-w-full aspect-[2.86] w-[118px]"
          />
        </div>
        <div className="mt-9 text-base tracking-normal leading-7 text-indigo-600 max-md:max-w-full">
          <span className="text-gray-900">
            By clicking the button you agree the{" "}
          </span>
          <span className="text-indigo-600">Terms and Conditions</span>
        </div>
        <button
          type="submit"
          disabled={!formValid}
          className={
            `justify-center items-center px-16 py-6 mt-9 text-lg font-bold tracking-tight text-center text-white bg-indigo-600 rounded-lg max-md:px-5 max-md:max-w-full ${
              !formValid ? "opacity-50 cursor-not-allowed" : ""
            }` + " container w-[100%]"
          }
        >
          {isCheckingOut ? "Checking out..." : "Proceed to checkout"}
        </button>
      </form>
    </div>
  );
}

export default ExpandedBilling;
