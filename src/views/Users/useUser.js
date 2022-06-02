import UserService from "@/services/UserService";

export default () => {   

  return {

    helperTables: () => {
      UserService.helperTablesGet()
      .then((response) => {
        roles.value = response.data.roles;
        console.log(roles.value)
        //state.helperTables = false;
      })
      .catch((error) => {
        errors.value = getError(error)
      });
    }
  }
  
};

