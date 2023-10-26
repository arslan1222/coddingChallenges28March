function ageInDays(person) {
    // Extract data from the input object
    const { firstName, lastName, ageInYears } = person;
  
    // Concatenate first and last name
    const fullName = firstName + " " + lastName;
  
    // Calculate age in days (assuming a year has 365 days)
    const ageInDays = ageInYears * 365;
  
    return {
      fullName: fullName,
      ageInDays: ageInDays
    };
  }

  const personData = {
    firstName: "Arslan",
    lastName: "Haider",
    ageInYears: 21
  };
  
  const result = ageInDays(personData);
  console.log("Full Name:", result.fullName);
  console.log("Age in Days:", result.ageInDays);
  