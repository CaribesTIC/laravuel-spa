export const ascBubble = function (a, b) {
  if (a.name > b.name) { return 1; }
  if (a.name < b.name) { return -1; }
  // a must be equal to b
  return 0;
}

export const getError = (error) => {
  const errorMessage = "API Error, please try again.";  
  if (import.meta.env.DEV) {
    console.error(error.response.headers ?? "No Headers")    
    console.error("Status:", error.response.status)
    console.error("Message:", error.message)
    console.error(errorMessage)
    console.log(error)  
    if (!error.response.data) {
      console.error(
        "There is no Data.",
        `API ${error.config.baseURL}${error.config.url} not found`
      ) 
    } else {
      console.error('Data', error.response.data)
      if (error.response.data.errors)
        return error.response.data.errors
    }
  }  
  return errorMessage;
};


/*
export const getError = (error) => {
  const errorMessage = "API Error, please try again.";
  if (!error.response.data) {
    console.error(
      `API ${error.config.baseURL}${error.config.url} not found`
    );    
  }
  if (import.meta.env.DEV) {
    console.error(error.response.data ?? "There is no Data")
    console.error(error.response.headers?? "No Headers")
    console.error(errorMessage)
    console.error("Status", error.response.status)
    console.log(error)     
  }
  if (error.response.data && error.response.data.errors) {
    return error.response.data.errors;
  }
  return errorMessage;
};
*/

