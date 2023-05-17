const parseError = (err: any) => {
  // console.log(err.error.data);
  if (err?.data?.errors) {
    const message = Object.values(err.data.errors)[0];
    // return message;
    return { errorMessage: message, id: "error_0" };
  } else if (err?.data?.error) {
    return { errorMessage: err.data.error, id: "error_01" };
  } else if (err?.data?.data?.message) {
    return { errorMessage: err.data.data.message, id: "error_1" };
    // return err.error.data.error.message;
  } else if (err?.data?.message) {
    return { errorMessage: err.data.message, id: "error_2" };
    // return err.error.data.message;
  } else if (err?.data) {
    return { errorMessage: err.data, id: "error_3" };
    // return err.error.data;
  } else if (err.message) {
    return { errorMessage: err.message, id: "error_4" };
    // return err.message;
  } else if (err.error) {
    return { errorMessage: err.error, id: "error_5" };
  } else {
    return { errorMessage: "Error Occured", id: "error_other" };
    // return 'Error Occured';
  }
};

export default parseError;
